function reddenPage() {
  console.log("You've reach the function finally!");
  document.body.style.backgroundColor = 'red';
}

chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});