// Listener msg
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "setInputValue") 
            console.log(request.quantia);
            // Split list to row
            let list = request.quantia
            let listRow = list.split('\n');
            listRow.forEach(function(row) {
                console.log(row.match(/[0-9][0-9]\:[0-9][0-9]/g));
                
            });
          

    });