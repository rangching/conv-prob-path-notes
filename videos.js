// ============================================================
//  影片連結設定（預留）
//  影片上架後，只要改這個檔案，網頁就會自動換成可播放的影片。
//
//  youtube：YouTube 影片 ID 或完整網址都可以，例如
//           "dQw4w9WgXcQ" 或 "https://youtu.be/dQw4w9WgXcQ"
//  mp4    ：自架 MP4 的網址（相對路徑也可以，例如 "videos/EP01.mp4"）
//           youtube 與 mp4 同時填時，優先用 youtube。
//  duration：片長字串，例如 "6:35"（留空就用 content.js 的預估值）
//  sections：正式版的小節時間（秒）。留 null 就用 content.js 的預估時間軸。
//            例：[0, 53.7, 217.7, 310.7]，長度要和該集的小節數相同。
//  noVoice ：無旁白版的 YouTube ID 或網址（可留空）
// ============================================================

window.SERIES_PLAYLIST = ""; // 系列播放清單網址，留空則不顯示按鈕

window.VIDEO_LINKS = {
  u01: { youtube: "https://youtu.be/XWP6peM5Lls", mp4: "", duration: "6:35", sections: [0, 53.7, 217.7, 310.7], noVoice: "" },
  u02: { youtube: "AoG9VPrbZQo", mp4: "", duration: "6:51", sections: [0, 52.7, 190.2, 281.3, 353.9], noVoice: "" },
  u03: { youtube: "7LWfzhyLAr8", mp4: "", duration: "7:34", sections: [0, 86.8, 222.2, 358.8], noVoice: "" },
  u04: { youtube: "ceym3vKg99E", mp4: "", duration: "8:13", sections: [0, 68.1, 157.8, 233.7, 371.1], noVoice: "" },
  u05: { youtube: "8QAt_fkdeX4", mp4: "", duration: "6:09", sections: [0, 77.9, 159, 218.3, 297.7], noVoice: "" },
  u06: { youtube: "AZXSnC3yEzA", mp4: "", duration: "7:36", sections: [0, 98.7, 161.8, 224.9, 293.2, 386.7], noVoice: "" },
  u07: { youtube: "ayB8mBq8h34", mp4: "", duration: "6:17", sections: [0, 105.4, 199.7, 305.8], noVoice: "" },
  u08: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "" },
  u09: { youtube: "aVmGu6wfuGA", mp4: "", duration: "8:48", sections: [0, 60.4, 164.6, 248.7, 370.8, 454.2], noVoice: "" }
};
