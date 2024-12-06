// // background.js
// chrome.runtime.onInstalled.addListener(() => {
//     console.log("Background service worker installed.");
//   });
  
//   // Example listener for messages
//   chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log("Message received:", message);
//     sendResponse({ status: "Message received successfully" });
//   });
  


// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed and service worker started.");
  });
  
  // Example of using alarms or tabs API in background.js
  chrome.alarms.create('myAlarm', { periodInMinutes: 1 });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'myAlarm') {
      console.log("Alarm triggered!");
    }
  });
  