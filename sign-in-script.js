console.log('retr.js loaded');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const textarea = document.querySelector('textarea');
    const value = textarea.value;
    const InputValor = document.querySelector('#Autoretirar');
    const inputAutoretirar = document.querySelector('#valor');
    const tron = InputValor.value;
    const ocen = inputAutoretirar.value;

    if (value.length > 0) {
      chrome.runtime.sendMessage({
      action: 'setInputValue',
      liste: value,
      cashout: tron,
      valor : tron  
      });
  }
});


