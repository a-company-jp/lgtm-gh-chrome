const observer = new MutationObserver((mutations, obs) => {
  console.log('mutation detected');
  const fileAttachmentSection = document.querySelector('.js-upload-markdown-image.is-default');
  if (fileAttachmentSection) {
    obs.disconnect();
    console.log('fileAttachmentSection found');
    const newElementHtml = `
      <div class="pr-2 pl-2 pb-2">
        <button type="button" class="Button--invisible Button--small Box Button">
          <span class="Button-content">
            <span class="Button-visual Button-leadingVisual">
            LGTM
            </span>
            <span class="Button-label">POST LGTM with LGTM Generator</span>
          </span>
        </button>
      </div>`;

    fileAttachmentSection.insertAdjacentHTML('beforeend', newElementHtml);
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
