chrome.action.onClicked.addListener(() => {
    chrome.windows.create({
        url: 'https://superconnector.glide.page',
        type: 'popup',
        width: 375,
        height: 700,
        left: 0,
        top: 50
    });
});