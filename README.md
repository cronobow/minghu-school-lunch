# 明湖國小營養午餐資訊站

整理114學年度起公開會議、記點紀錄、群組公告與臺北市教育局新聞稿。非學校或政府官方網站，原始公開來源優先於本站摘要。

網站：https://minghu-school-lunch.gh.maxlab.tw/

本 repository 僅包含可公開的靜態網站，不包含本機監廚資料庫或私人附件。

## 每次公開資料更新流程

排程目標為每天 Asia/Taipei 06:00、13:00，包含週末與國定假日。排程由 Codex app 支援的 automation 管理，勿另建 cron、launchd 或修改內部資料庫；網站頁面本身不會啟動查詢。

1. 先讀工作區及上層 AGENTS.md、適用的 .agents/skills，執行 git status。以最新 origin/main 為基底；若原 checkout 有未提交或未推送工作，另建乾淨 checkout，不 reset、stash 或推送他人工作。
2. 直讀 https://bhps-lunch.blogspot.com/feeds/posts/default?alt=json&max-results=50 與 blog 的公告、月份菜單預告、相關會議頁。按原始 URL／文章 ID 去重；未標示原文發表日期的資訊專區不列入公告清單，不以查閱日補日期；保留來源、原日期、有效歷史內容及適用學校。月菜單及水果預告是計畫，不能當成當日實餐。當日菜色僅在當日公開文章存在且已目視看過其原照後整理；沒有文章時不猜測、不沿用舊照片作今日照片。此站每日菜色仍連至原資訊網。
3. 查閱明湖官方 https://www.mhups.tp.edu.tw/ 的行政公告（搜尋午餐）及其公開營養午餐專區；查教育局 https://www.doe.gov.taipei/News.aspx?n=B3DDF0458F0FFC11&sms=72544237BBE4C5F6 與衛生局 https://health.gov.taipei/ 的午餐／食安消息。讀原文後再摘要，不把食材檢驗、午餐留樣與環境檢驗混為同一結果。需要登入或權限變更時停止該來源，不新增 credentials。使用者已明確授權：查閱或下載明湖舊站 `mhups-teachers.mhups.tp.edu.tw` 的公開午餐頁面及附件時，可針對該網域略過 TLS 憑證驗證，此授權也適用於例行排程。僅允許 HTTPS 公開資料讀取，不更改系統或瀏覽器安全設定，不對其他網域略過驗證，不用此方式登入或傳送帳密。其他來源憑證驗證失敗時，不自行略過驗證。可改查正常驗證可讀的官方來源；仍不可讀時，在本次執行回報中標示部分查閱。
   - 「臺北市政府相關新聞」區塊每則新聞右方的原文連結按鈕，文案一律固定為「閱讀原文」。新增、修改或透過 AI 更新內容時，不得依新聞內容、來源機關、網站或文章類型改成「閱讀新聞稿」、「閱讀原稿」等其他文字；更新後須檢查該區塊所有按鈕均為「閱讀原文」。
4. footer `#update-status` 只顯示「最後更新：YYYY-MM-DD HH:mm:ss」，時間使用 Asia/Taipei，time datetime 含 +08:00。不要在 footer 顯示查閱狀態、失敗來源、時區文字或其他說明；這些只在執行回報中記錄。沒有新內容可更新真實查閱時間，不虛構消息；全部查核失敗或部署失敗時不推進最後更新時間。
5. 檢查 git diff、git diff --check；以 node --check 檢查 meetings.js 及抽出的 inline script；檢查 HTML 連結、重複資料與公開檔案清單。只明確 stage index.html、meetings.js、README.md、CNAME、.nojekyll 及經核對的 pdfs/*.pdf 中必要檔，絕不使用 git add .。私人監廚資料庫、LINE 附件、下載原照、查核日誌、憑證及本機設定不得加入 repository。
6. 提交並推送 main，由既有 GitHub Pages 根目錄部署。確認遠端 commit，GitHub Actions 的 pages build and deployment 成功且對應該 SHA，再直讀正式站核對 footer 及內容；均驗證成功才回報完成。失敗需回報階段，不宣稱成功。
7. 每次回報查核結果、commit、Pages run、正式站結果與未查成來源；不可調整其他午餐通知任務或建立重複排程。電腦須開機、Codex app 運行、專案可用及網路可達；不可為排程自行改睡眠或安全設定。

2026-10-06 首次流程驗證：碧湖 feed 的當日葷／素原照已目視核對，教育局列表已查閱，補入衛生局 10/3 原稿；明湖首頁午餐搜尋可讀，舊營養午餐專區 HTTPS 自簽憑證未通過驗證，因此本次 footer 記為部分查閱。

本次委派環境的 Codex automation 工具回覆「僅支援 local threads」，未建立任何排程；需由父對話設定每天 Asia/Taipei 06:00、13:00 的單一觸發，勿同時另建本機排程。原 checkout /Users/max/maxlab/minghu-school-lunch 的未提交及未推送工作均未變動；本次使用最新遠端的隔離 checkout。

## 公開 PDF 副本

`pdfs/` 保存已核對的公開會議紀錄原檔，會議及記點的完整紀錄連結使用本站副本，不改寫 PDF 內容。原始下載位置為 `https://mhups-teachers.mhups.tp.edu.tw/eweb/module/download/update/ew00000000101/`，原檔名稱保持不變。依網站既有來源說明，不在每份紀錄另外標註來源或取得日期。
