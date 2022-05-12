// Listener msg
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "setInputValue") {
            setInputValue(request.quantia, request.autoretirar);
        }
    });