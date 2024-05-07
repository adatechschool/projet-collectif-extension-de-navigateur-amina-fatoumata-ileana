function getActiveTab() {
  return chrome.tabs.query({ active: true, currentWindow: true });
}
