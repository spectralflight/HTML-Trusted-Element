/// <reference path="chrome.d.ts"/>

chrome.contextMenus.create({
    title: "Encrypt Textarea",
    contexts: ["editable"],
    onclick: (info, tab) => {
        alert('here');
    }
});
