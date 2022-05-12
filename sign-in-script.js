console.log('retr.js loaded');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const textarea = document.querySelector('textarea');
    const value = textarea.value;
    if (value.length > 0) {

    chrome.runtime.sendMessage({
    action: 'setInputValue',
    quantia: value,
    autoretirar: true

    });
  }
});


