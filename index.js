const preventYoutubeNavigation = () => {
  const iframe = document.querySelector(".vjs-youtube iframe");
  if (iframe) {
    iframe.addEventListener("load", () => {
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;

      const links = iframeDocument.querySelectorAll("a");
      links.forEach((link) =>
        link.addEventListener("click", (e) => e.preventDefault())
      );
    });
  }
};

preventYoutubeNavigation();
