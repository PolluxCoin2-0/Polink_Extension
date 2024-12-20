// console.log("Content script loaded!");

// document.addEventListener("DOMContentLoaded", () => {
//   const banner = document.createElement("div");
//   banner.textContent = "This is injected by the Chrome extension!";
//   banner.style.cssText = `
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     background-color: #007bff;
//     color: white;
//     text-align: center;
//     padding: 10px;
//     z-index: 1000;
//   `;
//   document.body.appendChild(banner);
// });






// console.log("Content script loaded!");

// // Create the banner as before
// const banner = document.createElement("div");
// banner.textContent = "This is injected by the Chrome extension!";
// banner.style.cssText = `
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   background-color: #007bff;
//   color: white;
//   text-align: center;
//   padding: 10px;
//   z-index: 1000;
// `;
// document.body.appendChild(banner);

// // Add a button to copy text to clipboard
// const copyButton = document.createElement("button");
// copyButton.textContent = "Copy Text";
// copyButton.style.cssText = `
//   margin-left: 10px;
//   padding: 5px 10px;
//   background-color: #28a745;
//   color: white;
//   border: none;
//   cursor: pointer;
// `;
// banner.appendChild(copyButton);

// // Clipboard copy functionality
// copyButton.addEventListener("click", async () => {
//   const textToCopy = "This is the text you want to copy!";
  
//   try {
//     await navigator.clipboard.writeText(textToCopy);
//     console.log("Text copied to clipboard");
//   } catch (err) {
//     console.error("Failed to copy text: ", err);
//   }
// });
