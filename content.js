console.log('retr.js loaded');

// Google Extention Content Scripts
// https://developer.chrome.com/extensions/content_scripts
// https://developer.chrome.com/extensions/content_scripts#host_permissions
// https://developer.chrome.com/extensions/content_scripts#host_permissions#permissions

// Content Scripts


// Get element by class input-field-wrapper and try send a value 
// to the background.js file
function setInputValue(quantia, autoretiar) {
    let quantia = document.querySelectorAll('input')[0];
    let autoretirar = document.querySelectorAll('input')[1];
    let buttonGreyDouble = document.querySelectorAll('button')[4];
    let buttonRed = document.querySelectorAll('button')[5];
    
    quantia.value = '100';
    buttonGreyDouble.click();
    buttonRed.click();
    return true;
    
}
