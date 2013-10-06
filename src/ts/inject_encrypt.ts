/// <reference path="chrome.d.ts"/>

(function() {

  var iframe = <HTMLIFrameElement> window.document.createElement('iframe');
  var textarea = <HTMLTextAreaElement> document.activeElement;
  var id = Math.round(Math.random()*10000);

  iframe.className = 'encryptor-iframe';
  iframe.style.cssText = window.getComputedStyle(textarea, 'active').cssText;
  iframe.style.position = "absolute";
  iframe.style.top = textarea.offsetTop.toString() + "px";
  iframe.style.left = textarea.offsetLeft.toString() + "px";
  iframe.width = textarea.offsetWidth.toString();
  iframe.height = textarea.offsetHeight.toString();
  iframe.src = chrome.extension.getURL('trusted_input.html');
  iframe.onload = () => {
    window.setTimeout(function() {
      iframe.style.display = 'block';
    }, 0);
    iframe.contentWindow.postMessage(JSON.stringify(<UserContent> {"id": id, "content": textarea.value}), chrome.extension.getURL('trusted_input.html'));
  };


  chrome.runtime.onMessage.addListener((request: UserContent, sender, response) => {
    if (request.id === id) {
      textarea.value = request.content;
    }
  });

  textarea.parentNode.insertBefore(iframe, textarea.nextSibling);
})();
