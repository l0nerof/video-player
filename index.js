// const player = new Plyr("#player", {
//   youtube: {
//     // sdk: null,
//     // api: null,

//     controls: 0,
//     modestbranding: 1,
//     rel: 0,
//     showinfo: 0,
//     noCookie: false,
//     disablekb: 1,
//     playsinline: 1,
//     cc_load_policy: 0,
//     iv_load_policy: 3,
//     customControls: true,
//     enablejsapi: 1,
//   },
// });

// window.player = player;

// const player = videojs("vid1", {
//   techOrder: ["youtube"],
//   sources: [
//     {
//       src: "https://www.youtube.com/watch?v=g5ERY3VtaUU",
//       type: "video/youtube",
//     },
//   ],
//   youtube: {
//     modestbranding: 1,
//     rel: 0,
//     showinfo: 0,
//     playsinline: 1,
//   },
//   controls: true,
//   autoplay: false,
//   playsinline: true, // Підтримка inline на iOS
//   controlBar: {
//     volumePanel: { inline: false },
//   },
// });

// data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=-Qh02CS2ifc"}] }'
// data-setup='{ "techOrder": ["youtube"],
//   "sources": [
//     {
//       "src": "https://www.youtube.com/watch?v=g5ERY3VtaUU",
//       "type": "video/youtube",
//     },
//   ],
//   "youtube": {
//     "modestbranding": 1,
//     "rel": 0,
//     "showinfo": 0,
//     "playsinline": 1,
//   },
//   "controls": true,
//   "autoplay": false,
//   "playsinline": true,
//   "controlBar": {
//     "volumePanel": { "inline": false },
//   }, }'

document.getElementById("vid1").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
