// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript(null, {file: "content.js"});
// });



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "setInputValue") 
        console.log(request);
        console.log(request.liste);
            // Split list to row
            let list = request.liste
            let listRow = list.split('\n');
            setInterval(() =>  {
            let date = new Date();
            let hour = date.getHours().toString();
            let minute = date.getMinutes().toString().padStart(2, '0');
            let second = date.getSeconds();
            let time = hour + ':' + minute 
            console.log(time)
            listRow.forEach(function(row) {
                let rows = row.match(/[0-9][0-9]\:[0-9][0-9]/g);
                if (rows != null) {
                    if (rows[0] == time) {
                        console.log(rows[0]);
                       chrome.tabs.sendMessage({
                            action: "EnterTime",
                            time: rows[0],
                            valor : request.valor,
                            auto : request.autoretirar
                       });
                        }              
                    }
                    return
                }
            )
            }, 35000);
    }
);
