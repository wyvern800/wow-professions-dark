/**
 * Dark mode for WoW-Professions
 * Author: wyvern800 | http://github.com/wyvern800
 * With the help of Th3Mike | http://github.com/th3mike
 */
(function () {
  const gray = "#424242";

  chrome.storage.sync.get(["key"], function (result) {
    console.log("Value currently is " + result.key);

    // Sets the default value to true
    if (result.key === null || result.key === undefined) {
      document.getElementById("dharoka").checked = true;
      chrome.storage.sync.set({ key: true }, function () {
        console.log("Default value set to true");
      });
    }

    var darkMode = result.key;

    // Sets the color of the bg
    var x = document.getElementsByClassName(
      "main-container container js-quickedit-main-content"
    );
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = darkMode ? "#292929" : "white";
      x[i].style.color = darkMode ? "#858585" : "black";
    }

    // Sets the header color
    var x = document.getElementsByClassName("gdskill");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.color = darkMode ? "white" : "black";
      x[i].style.backgroundColor = darkMode ? gray : "#f7f7f7";
    }

    // removes background
    document.body.style.backgroundImage = darkMode ? "none" : "initial";
    document.body.style.backgroundColor = darkMode ? gray : "#a6a6a6";

    // change breadcumb color
    var x = document.getElementsByClassName("breadcrumb");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.color = darkMode ? "white" : "black";
      x[i].style.backgroundColor = darkMode ? gray : "#f5f5f5";
    }

    // change li active
    var x = document.getElementsByClassName("active");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.color = darkMode ? "white" : "#777";
    }

    // Adds the toggle between dark and lighter mode
    document.getElementById("dharoka").addEventListener(
      "click",
      function () {
        chrome.storage.sync.get(["key"], function (result) {
          if (result.key === true) {
            chrome.storage.sync.set({ key: false }, function () {
              document.getElementById("dharoka").checked = false;
              console.log("Value is set to: false");
            });
          } else {
            chrome.storage.sync.set({ key: true }, function () {
              document.getElementById("dharoka").checked = true;
              console.log("Value is set to: true");
            });
          }
        });
      },
      false
    );

    // sets the current status
    document.getElementById("dharoka").checked = result.key;
  });
})();
