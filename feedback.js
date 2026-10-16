(() => {
  // 僅填公開設定。密鑰必須放在 Worker secrets，不能放入此檔。
  const config = { endpoint: 'https://minghu-lunch-feedback.crono0720.workers.dev/feedback', sitekey: '0x4AAAAAAFYNv13d3l42B_I8' };
  const form = document.getElementById('feedback-form');
  const status = document.getElementById('feedback-status');
  const verificationStatus = document.getElementById('feedback-verification-status');
  const setVerification = (text, state = 'notice') => {
    verificationStatus.textContent = `（${text}）`;
    verificationStatus.className = `verification-${state}`;
  };
  const button = form.querySelector('button[type="submit"]');
  let token = ''; let widget; let busy = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || !config.endpoint || !config.sitekey) return;
    if (!form.reportValidity()) return;
    if (!token) { setVerification('請先完成安全驗證。'); return; }
    busy = true; button.disabled = true; form.setAttribute('aria-busy', 'true');
    status.textContent = '正在送出，請稍候…';
    const payload = Object.fromEntries(new FormData(form));
    payload.role = payload.role || ''; payload.token = token;
    try {
      const response = await fetch(config.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: AbortSignal.timeout(25000), credentials: 'omit', referrerPolicy: 'no-referrer' });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error(result.message || '目前無法送出，請稍後再試。');
      status.textContent = result.message;
      form.reset();
    } catch (error) {
      status.textContent = error instanceof TypeError || error.name === 'TimeoutError' || error.name === 'SyntaxError'
        ? '無法確認送達，填寫內容已保留。請稍後再試；重送可能產生重複訊息。' : error.message;
    } finally {
      busy = false; token = ''; form.removeAttribute('aria-busy');
      button.disabled = true;
      if (window.turnstile && widget !== undefined) {
        setVerification('正在進行安全驗證…', 'pending');
        window.turnstile.reset(widget);
      }
    }
  });
  if (['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)) {
    setVerification('本機預覽，暫不開放送出。');
    return;
  }
  if (!config.endpoint || !config.sitekey) {
    setVerification('意見信箱尚未開放，暫時無法送出。');
    return;
  }
  setVerification('正在進行安全驗證…', 'pending');
  window.onFeedbackTurnstile = () => {
    widget = window.turnstile.render('#feedback-verification', {
      sitekey: config.sitekey, action: 'lunch_feedback', language: 'zh-tw', size: 'flexible',
      callback: value => { token = value; button.disabled = busy; setVerification('驗證完成', 'complete'); },
      'expired-callback': () => { token = ''; button.disabled = true; setVerification('驗證已過期，請重新驗證。'); },
      'error-callback': () => { token = ''; button.disabled = true; setVerification('驗證無法載入，請確認網路後重新整理；重新整理前請先複製意見內容。'); }
    });
  };
  const script = document.createElement('script');
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onFeedbackTurnstile&render=explicit';
  script.async = true;
  script.onerror = () => { setVerification('驗證無法載入，請稍後再試。填寫內容仍保留。'); };
  document.head.append(script);
})();
