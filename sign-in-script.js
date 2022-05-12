// const button = document.querySelector('button');

// button.addEventListener('mouseover', () => {
//     button.style.backgroundColor = 'red';
//     button.style.color = 'white';
//     button.style.transform = 'scale(1.3)';
//     document.querySelector('div').style.backgroundColor = '#fcee54'
// });

// button.addEventListener('mouseleave', () => {
//     button.style.backgroundColor = '#F5C2e0'
//     button.style.color = 'Black'
//     button.style.transform = 'scale(1)';

//     document.querySelector('div').style.backgroundColor = '#fcee54'
// }),

// button.addEventListener('click', () =>  {
const textarea = document.querySelector('textarea');
// get value 
const value = textarea.value;
// send value to background.js
chrome.runtime.sendMessage({
    action: 'setInputValue',
    quantia: value,
    autoretirar: true
});
// });



