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
  u01: { youtube: "", mp4: "", duration: "6:35", sections: [0, 53.7, 217.7, 310.7], noVoice: "" },
  u02: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "" },
  u03: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "" },
  u04: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "" },
  u05: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "" },
  u06: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "" },
  u07: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "" },
  u08: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "" },
  u09: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "" }
};
