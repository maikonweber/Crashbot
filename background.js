// Listener msg
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "setInputValue") 
            console.log(request.quantia);
            // Split list to row
            let list = request.quantia
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
                        return 
                    }
                    return
                }
            });
        }, 60000);
    });