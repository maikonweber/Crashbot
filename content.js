// Listener msg
// Google Extention Content Scripts
// https://developer.chrome.com/extensions/content_scripts
// https://developer.chrome.com/extensions/content_scripts#host_permissions
// https://developer.chrome.com/extensions/content_scripts#host_permissions#perm


console.log('Content Scripts');
 
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    if (request.action == "EnterTime") {
      console.log('Enter Time');
      setInputValue(request.valor, sendResponse);

    }
    return true;
}
);




function setInputValue(valor, sendResponse) {
    let quantia = document.querySelectorAll('input')[0];
    let autoretirar = document.querySelectorAll('input')[1];
    let buttonGreyDouble = document.querySelectorAll('button')[4];
    let buttonRed = document.querySelectorAll('button')[5];
    
    quantia.value = `${valor}`;
    buttonGreyDouble.click();
    buttonRed.click();
    alert('Enter Time');
    sendResponse({
        action: "EnterTime",
        active: true
    });

    return true;
}

// }
