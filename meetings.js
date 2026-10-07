const meetings = [
  ['2026-08-21','三校群組','115學年度第1次午餐群組供應委員會會議','pdfs/file3800_65.pdf',['碧湖供應，康寧、明湖受供應；廠商為統鮮美食股份有限公司。','每人每餐 70 元，另加中央獎勵金每人每日 10 元，合計 80 元；學生無須支付。','8 月 31 日開始供餐；主食 1 份、副食 3 菜 1 湯，每週至少 1 次精選餐。']],
  ['2026-06-17','明湖國小','明湖校內午餐供應委員會會議','pdfs/file0159_55.pdf',['6 月 2 日班級青菜內發現異物，校方拍照存證、採集異物並通知廠商。','廠商說明異物可能來自田間灌溉用濾水頭，會議記載改善挑洗流程。','決議記小點 2 點、4,000 元。']],
  ['2026-06-12','三校群組','114學年度第9次午餐群組供應委員會會議','pdfs/file0510_58.pdf',['報告下學期衛生檢驗、滿意度及違失記點。','明湖重大違失記點 5 點；該份紀錄未載事件明細與後續複查。','通過 115 學年度第 1 次會議於 8 月 21 日召開。']],
  ['2026-06-01','三校群組','114學年度第8次午餐群組供應委員會會議','pdfs/file0450_57.pdf',['修正 115 學年度採購評選委員為 11 人。','履約規範採教育局最新版本；每日提供乳品、豆漿或水果任一項。','通過一般違約小點每點 2,000 元、重大衛生缺失大點每點 2,200 元之建議。']],
  ['2026-05-08','三校群組','114學年度第7次午餐群組供應委員會會議','pdfs/file0320_56.pdf',['115 學年度正式全天課程學生每餐由政府補助 70 元；另有國產可追溯食材獎勵金每人每日 10 元，合計 80 元。','正式全天課程學生無須支付；課後照顧或其他外加課程不在免費午餐範圍。','康寧、明湖持續加入 115 學年度群組；6 月菜單調整兩道副菜及兩道湯品。']],
  ['2026-05-07','明湖國小','明湖校內午餐會議與4月29日湯品異物','pdfs/file0106_54.pdf',['4 月 29 日課後照顧班羅宋湯桶內發現大隻蟲，學校記載疑似為蟑螂。','學校拍照、保存異物、通知廠商，並更換備品湯。','決議對廠商記大點 5 點，並罰款 11,000 元。']],
  ['2026-04-15','明湖國小','明湖校內午餐供應委員會會議','pdfs/file0049_53.pdf',['期初滿意度反映份量、米飯口感、油鹹程度及水果品質。','討論電梯工程期間送餐安排、新學年免費午餐及廠商評選代表。']],
  ['2026-03-20','三校群組','114學年度第6次午餐群組供應委員會會議','pdfs/file5258_52.pdf',['康寧反映低年級肉片與水果食用問題，承商表示會調整。','4 月 30 日主菜改為大溪黑豆干，其餘菜單通過。','下次會議訂於 5 月 8 日。']],
  ['2026-01-09','三校群組','114學年度第5次午餐群組供應委員會會議','pdfs/file5230_51.pdf',['上學期衛生檢驗記載符合規定；明湖一般與重大違失記點均為 0。','報告明湖低、中高年級滿意度調查結果。','2 月 24 日主菜改為豬排，其餘 2 至 3 月菜單通過。']],
  ['2025-12-31','明湖國小','明湖校內午餐供應委員會會議','pdfs/file4919_49.pdf',['報告期末師長與學生滿意度調查。','紀錄班級補菜需求與口味調整意見；完整統計見原始文件。']],
  ['2025-12-12','三校群組','114學年度第4次午餐群組供應委員會會議','pdfs/file5202_50.pdf',['報告 10、11 月三章獎勵金補助「符合」；本次紀錄未重列金額。同學年度第 1、3 次正式會議均記載中央獎勵金為每人每日 10 元。','報告 11 月 20 日食安查核，並請各校於 12 月底前提供滿意度調查。','1 月菜單依審查版本執行。']],
  ['2025-10-17','三校群組','114學年度第3次午餐群組供應委員會會議','pdfs/file2054_45.pdf',['每人每餐餐費 65 元，另加中央獎勵金每人每日 10 元，合計 75 元；學生無須支付獎勵金 10 元。','確認三校供餐關係及統鮮廠商，並記載水果、奶類、豆乳及蛋料理等供餐頻率。','調整 11 至 12 月菜單與較鹹口味。']],
  ['2025-10-17','明湖國小','明湖校內午餐供應委員會會議','pdfs/file2300_46.pdf',['報告期初滿意度、份量、口味及中央廚房整修期間供餐情形。','決議修正停餐退費辦法，團體停餐採紙本申請。','廠商說明舊針管事件的源頭管理與合作來源調整。']],
  ['2025-09-19','三校群組','114學年度第2次午餐群組供應委員會會議','pdfs/file3313_44.pdf',['中央廚房修繕及人員尚未到位，暫由統鮮總廠供應。','明湖反映少數菜色較鹹及體育班份量問題。','再次審查 10 月菜單，刪除貢丸並調整菜色。']],
  ['2025-08-22','三校群組','114學年度第1次午餐群組供應委員會會議','pdfs/file1314_40.pdf',['碧湖供應，康寧與明湖受供應；廠商為統鮮。','每人每餐餐費 65 元，另加中央獎勵金每人每日 10 元，合計 75 元；學生無須支付獎勵金 10 元。','9 月 1 日開始供餐；暑假廚房修繕，9 月由總廠送餐。']],
];

const penalties = [
  ['2026-06-17','明湖國小','統鮮美食股份有限公司','青菜內發現異物','小點 2 點','4,000 元','pdfs/file0159_55.pdf','校內逐案決議'],
  ['2026-06-12','康寧國小','統鮮美食股份有限公司','114學年度下學期累計','小點 6 點','金額未載','pdfs/file0510_58.pdf','群組期末統計，未附事件明細'],
  ['2026-05-07','明湖國小','統鮮美食股份有限公司','羅宋湯桶內發現疑似蟑螂','大點 5 點','11,000 元','pdfs/file0106_54.pdf','校內逐案決議'],
  ['2026-01-09','康寧國小','統鮮美食股份有限公司','114學年度上學期累計','小點 1 點','金額未載','pdfs/file5230_51.pdf','群組期末統計，未附事件明細'],
];

const schoolBadgeClass = {
  '碧湖國小': 'school-bihu',
  '康寧國小': 'school-kangning',
  '明湖國小': 'school-minghu',
};

const penaltyList = document.querySelector('#penaltyList');
const penaltyCount = document.querySelector('#penaltyCount');
const penaltyYearTabs = document.querySelectorAll('#points .penalty-year-tab');
const meetingList = document.querySelector('#meetingList');
const meetingCount = document.querySelector('#meetingCount');
const meetingTabs = document.querySelectorAll('#records .meeting-tab');
const meetingPagination = document.querySelector('#meetingPagination');
const newsItems = [...document.querySelectorAll('#news .news-item')];
const newsPagination = document.querySelector('#newsPagination');
const announcementItems = [...document.querySelectorAll('#announcements .news-item')];
const announcementPagination = document.querySelector('#announcementPagination');
const meetingPageSize = 10;
const newsPageSize = 3;
let activeMeetingFilter = 'all';
let activePenaltyYear = '115';
let meetingPage = 1;
let newsPage = 1;
let announcementPage = 1;

function renderPenalties() {
  const visiblePenalties = penalties.filter(([date]) => {
    const [year, month] = date.split('-').map(Number);
    const academicYear = month >= 8 ? year - 1911 : year - 1912;
    const matchesYear = academicYear === Number(activePenaltyYear);
    return matchesYear;
  });

  penaltyCount.textContent = `共 ${visiblePenalties.length} 筆`;
  penaltyList.innerHTML = visiblePenalties.length ? visiblePenalties.map(([date, school, , event, points, amount, url]) => `
    <article class="penalty-item">
      <div><time class="penalty-date" datetime="${date}">${date.replaceAll('-','.')}</time></div>
      <div><div class="entity-tags"><span class="entity-tag ${schoolBadgeClass[school]}">${school}</span></div><h3>${event}</h3></div>
      <div class="penalty-result">${points}<span>罰款 ${amount}</span></div>
      <a class="record-link" href="${url}" target="_blank" rel="noreferrer">查看會議紀錄</a>
    </article>`).join('') : '<p class="penalty-empty">目前尚未收錄此學年度可追溯的記點資料；不代表沒有違失或記點。</p>';
}

function renderPagination(container, totalItems, page, pageSize, onChange) {
  const totalPages = Math.ceil(totalItems / pageSize);
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  const groupStart = Math.max(1, Math.min(page - 1, totalPages - 2));
  const groupEnd = Math.min(groupStart + 2, totalPages);
  const ellipsis = '<span class="page-ellipsis" aria-hidden="true">…</span>';
  const pageButtons = (groupStart > 1 ? ellipsis : '') +
    Array.from({length: groupEnd - groupStart + 1}, (_, index) => {
      const pageNumber = groupStart + index;
      return `<button class="page-button" type="button" data-page="${pageNumber}"${pageNumber === page ? ' aria-current="page"' : ''} aria-label="第 ${pageNumber} 頁">${pageNumber}</button>`;
    }).join('') + (groupEnd < totalPages ? ellipsis : '');

  container.innerHTML = `
    <button class="page-button" type="button" data-page="${page - 1}" ${page === 1 ? 'disabled' : ''}>上一頁</button>
    ${pageButtons}
    <button class="page-button" type="button" data-page="${page + 1}" ${page === totalPages ? 'disabled' : ''}>下一頁</button>`;

  container.querySelectorAll('button[data-page]:not(:disabled)').forEach(button => {
    button.addEventListener('click', () => onChange(Number(button.dataset.page)));
  });
}

function renderMeetings() {
  const visibleMeetings = meetings.filter(([, type]) => {
    if (activeMeetingFilter === 'all') return true;
    return type === activeMeetingFilter;
  });
  const totalPages = Math.ceil(visibleMeetings.length / meetingPageSize);
  meetingPage = Math.min(meetingPage, totalPages || 1);
  const start = (meetingPage - 1) * meetingPageSize;
  const pagedMeetings = visibleMeetings.slice(start, start + meetingPageSize);

  meetingCount.textContent = `共 ${visibleMeetings.length} 份`;
  meetingList.innerHTML = pagedMeetings.length ? pagedMeetings.map(([date,type,title,url,points]) => {
    const badge = type === '三校群組'
      ? '<span class="entity-tag group">三校群組</span>'
      : `<span class="entity-tag ${schoolBadgeClass[type]}">${type}</span>`;
    return `
    <article class="meeting">
      <div><time class="meeting-date" datetime="${date}">${date.replaceAll('-','.')}</time></div>
      <div><div class="entity-tags">${badge}</div><h3>${title}</h3><ul>${points.map(point => `<li>${point}</li>`).join('')}</ul></div>
      <a class="record-link" href="${url}" target="_blank" rel="noreferrer">查看完整紀錄</a>
    </article>`;
  }).join('') : '<p class="penalty-empty">目前沒有符合此分類的正式會議紀錄。</p>';

  renderPagination(meetingPagination, visibleMeetings.length, meetingPage, meetingPageSize, page => {
    meetingPage = page;
    renderMeetings();
    document.querySelector('#records').scrollIntoView({behavior: 'smooth', block: 'start'});
  });
}

function renderAnnouncements() {
  const start = (announcementPage - 1) * newsPageSize;
  announcementItems.forEach((item, index) => {
    item.hidden = index < start || index >= start + newsPageSize;
  });
  renderPagination(announcementPagination, announcementItems.length, announcementPage, newsPageSize, page => {
    announcementPage = page;
    renderAnnouncements();
    document.querySelector('#announcements').scrollIntoView({behavior: 'smooth', block: 'start'});
  });
}

function renderNews() {
  const start = (newsPage - 1) * newsPageSize;
  newsItems.forEach((item, index) => {
    item.hidden = index < start || index >= start + newsPageSize;
  });

  renderPagination(newsPagination, newsItems.length, newsPage, newsPageSize, page => {
    newsPage = page;
    renderNews();
    document.querySelector('#news').scrollIntoView({behavior: 'smooth', block: 'start'});
  });
}

meetingTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    meetingTabs.forEach(item => item.setAttribute('aria-selected', String(item === tab)));
    activeMeetingFilter = tab.dataset.filter;
    meetingPage = 1;
    renderMeetings();
  });
});

penaltyYearTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    penaltyYearTabs.forEach(item => item.setAttribute('aria-selected', String(item === tab)));
    activePenaltyYear = tab.dataset.year;
    renderPenalties();
  });
});

renderPenalties();
renderMeetings();
renderNews();

renderAnnouncements();
