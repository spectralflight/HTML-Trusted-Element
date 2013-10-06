/// <reference path="chrome.d.ts"/>

chrome.contextMenus.create({
    id: "create_context_menu",
    title: "Encrypt Textarea",
    contexts: ["editable"]
});

chrome.contextMenus.onClicked.addListener((info, tab?) => {
    if (tab != null) {
        chrome.tabs.executeScript({file: "js/inject_encrypt.js"});
    }
});

chrome.runtime.onMessage.addListener((message: UserContent, sender, resp) => {
    if (sender.tab) {
        chrome.tabs.sendMessage(sender.tab.id, message, resp);
    }
});
