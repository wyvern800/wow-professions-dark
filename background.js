document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete" && tab.active) {
      // Avoid our script to be executed outside our domain
      if (tab.url.startsWith("https://www.wow-professions.com") == false)
        return;

      chrome.tabs.executeScript(
        tab.ib,
        {
          file: "Darken.js",
        },
        () => chrome.runtime.lastError
      );

      // Listen changes on storage to update the color scheme
      chrome.storage.onChanged.addListener(function (changes, namespace) {
        chrome.tabs.executeScript(
          tab.ib,
          {
            file: "Darken.js",
          },
          () => chrome.runtime.lastError
        );
      });
    }
  });
});
