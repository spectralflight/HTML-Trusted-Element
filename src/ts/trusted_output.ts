/// <reference path="types.d.ts"/>

declare var $: any;
declare var CryptoJS: any;

var id = undefined;
window.addEventListener("message", receiveMessage, false);

var receiveMessage = function (event) {
    if (event.window !== window.parent()) {return;}

    try {
        var data = JSON.parse(event.data);
    } catch (e) {return;}

    if ((data instanceof Object) && (id in data) && (content in data)) {
        id = parseInt(data.id);
        var encrypted_content = data.content;
        var content = CryptoJS.AES.decrypt(encrypted_content, password).toString(CryptoJS.enc.Utf8);
        if (content.length !== 0) {
            $("#user-content").val(content);
        } else {

        }
    }
}

$(document).ready(function () {
    $("#submit-button").click(function () {
        var password = $("#password-input").val();
        var unencrypted_content = $("#user-content").val();
        var encrypted_content = CryptoJS.AES.encrypt(unencrypted_content, password).toString();

        chrome.runtime.sendMessage(<UserContent>{id: id, encrypted_content: encrypted_content});
    });

    $("#user-content")

});