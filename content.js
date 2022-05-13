// Listener msg
// Google Extention Content Scripts
// https://developer.chrome.com/extensions/content_scripts
// https://developer.chrome.com/extensions/content_scripts#host_permissions
// https://developer.chrome.com/extensions/content_scripts#host_permissions#perm

chrome.runtime.onMessage.addListener(getMessage);


function getMessage(message, sender, sendResponse) {
    if (message.action == "enterTime") {
        console.log(message);
      
    }
}


function setInputValue(valor, cashour) {
    let quantia = document.querySelectorAll('input')[0];
    let autoretirar = document.querySelectorAll('input')[1];
    let buttonGreyDouble = document.querySelectorAll('button')[4];
    let buttonRed = document.querySelectorAll('button')[5];
    
    quantia.value = `${valor}`;
    buttonGreyDouble.click();
    buttonRed.click();
    return true;

}
