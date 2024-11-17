const player = new Plyr("#player", {
  youtube: {
    // sdk: null,
    // api: null,
    controls: 0,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    noCookie: false,
    disablekb: 1,
    playsinline: 1,
    cc_load_policy: 0,
    iv_load_policy: 3,
    customControls: true,
    enablejsapi: 1,
  },
});
window.player = player;
