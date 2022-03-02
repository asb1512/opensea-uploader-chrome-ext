// confirms initialization of extension
chrome.action.onClicked.addListener((tab) => {
  console.log("onClicked listener is working.");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});