var id = undefined;
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
    try  {
        if (event.window !== window.parent()) {
            return;
        }
        var data = JSON.parse(event.data);
        if ((id in data) && (content in data)) {
        }
    } catch (err) {
        return;
    }
}

$(document).ready(function () {
    $("#submit-button").click(function () {
        var password = $("#password-input").val();
        var unencrypted_content = $("#user-content").val();
        var encrypted_content = CryptoJS.AES.encrypt(unencrypted_content, password).toString();
        var decrypted = CryptoJS.AES.decrypt(encrypted_content, password).toString(CryptoJS.enc.Utf8);

        chrome.runtime.sendMessage({ id: id, encrypted_content: encrypted_content }, function (response) {
            response.id;
        });
    });
});
