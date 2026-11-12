# 卷積到機率路徑：學習網頁

《從 Convolution 核心到生成式機率路徑》EP1–EP9 的學習網頁，版型參考 MIT 6.S184 課程筆記網站。純靜態網頁，不需要建置步驟，放在 GitHub Pages：https://rangching.github.io/conv-prob-path-notes/

## 檔案

| 檔案 | 內容 |
|---|---|
| `index.html` | 版面、樣式、互動（路由、進度、播放器、背誦卡、測驗） |
| `content.js` | 九集的課程內容：學習單三題與參考答案、詞彙、練習題、筆記、測驗、小節時間軸 |
| `videos.js` | **影片連結預留處**：影片上架後只要改這個檔案 |

## 影片上架後怎麼填

打開 `videos.js`，找到該集（`u01`～`u09`）：

```js
u02: { youtube: "https://youtu.be/XXXXXXXXXXX", mp4: "", duration: "6:12", sections: [0, 75, 180, 285], noVoice: "" },
```

- `youtube`：YouTube 影片 ID 或完整網址都可以。
- `mp4`：自架影片網址（沒有 YouTube 時才用）。
- `duration`：正式片長。
- `sections`：正式版各小節開始的秒數，數量要和該集小節數相同；留 `null` 就沿用腳本預估時間。
- `noVoice`：無旁白版（可留空）。
- `window.SERIES_PLAYLIST`：系列播放清單網址，填了首頁就會出現按鈕。

填好後，首頁卡片會顯示「▶ 可觀看」和 YouTube 縮圖，影片分頁會直接播放，小節時間軸也能點擊跳轉。

## 本機預覽

```bash
python3 -m http.server 8184
```

在這個資料夾執行，然後打開 http://localhost:8184 。

## 內容依據

- 系列腳本：`Convolution 到生成式機率路徑（EP1-EP9）全系列腳本與分鏡表.md`
- 查證修訂：`ConvProbPath_Series/source_notes.md`（EP6 的 α_t 縮放、EP7 的 σ_min、EP8 錢帛兼行、EP9 個人估計）
- EP1 小節時間取自 `unit_01_digestion/ep01_digestion_chapters.json`；EP2–EP9 為腳本預估，正式版出片後在 `videos.js` 的 `sections` 更新。
- 學習進度存在瀏覽器的 localStorage，只留在該裝置。
