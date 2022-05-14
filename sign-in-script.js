console.log("Hello World!");

const button = document.querySelector('#submit');
const input = document.querySelector('#valor');
const auto = document.querySelector('#auto');
const textarea = document.querySelector('#username');


button.addEventListener('click', () => {
  console.log("Clicked");
  let inputSend = input.value
  let autoSend = auto.value
  let textareaSend = textarea.value
  console.log(inputSend);
  console.log(autoSend);
  console.log(textareaSend);
  chrome.runtime.sendMessage({
    action: "setInputValue",
    valor: inputSend,
    auto: autoSend,
    list: textareaSend
    
  }, function(response) {
    console.log(response.msg);
  }
  );
  });



// button.addEventListener('click', () => {
//     const textarea = document.querySelectorAll('#username').value;
//     const inputValor = document.querySelectorAll('#valor')[0].value;
//     const inputAuto = document.querySelector('#auto').value;
//     console.log(textarea);  
//     console.log(inputValor);
//     console.log(inputAuto);

//     if (textarea != '' && inputValor != '' && inputAuto != '') {
//       chrome.runtime.sendMessage({
//       action: 'setInputValue',
//       list: textarea,
//       valor : inputValor,
//       auto : inputAuto
//       });
//       return Promise.resolve("Dummy response to keep the console quiet");
//     }
// });


