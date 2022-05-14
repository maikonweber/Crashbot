// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript(null, {file: "content.js"});
// });

chrome.tabs.query({url : "https://blaze.com/pt/games/crash"}, function(tabs) {
    console.log(tabs);
})




console.log('Content Scripts');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "setInputValue") 
    console.log(request);
        // Split list to row
        let list = request.list
        let listRow = list.split('\n');
setInterval(() =>  {    
        console.log('Interval');
        let date = new Date();
        let hour = date.getHours().toString();
        let minute = date.getMinutes().toString().padStart(2, '0');
        let second = date.getSeconds();
        let time = hour + ':' + minute 
        console.log(time);
        listRow.forEach(function(row) {
            let rows = row.match(/[0-9][0-9]\:[0-9][0-9]/g);
            if (rows != null) {
                if (rows[0] == time) {
                    console.log(rows[0], 'Enter Time ', time);
                    chrome.tabs.query({url : "https://blaze.com/pt/games/crash"}, function(tabs) {
                        console.log(tabs)
                        console.log(tabs[0].id);
                        chrome.tabs.sendMessage(tabs[0].id, {
                         action: "EnterTime",
                         valor: request.valor, 
                         auto: request.auto, 
                         list: request.list

                        });
                    });
                }
            }
        });
    }, 30000);
    return true;
});
