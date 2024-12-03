console.log("Content script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.createElement("div");
  banner.textContent = "This is injected by the Chrome extension!";
  banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 10px;
    z-index: 1000;
  `;
  document.body.appendChild(banner);
});
