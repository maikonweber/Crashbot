
console.log("Rodando liso")

function goTo() {
    // Check the time of site
    var time = new Date().getHours();
    // If the time is between 7am and 12pm
    if (time >= 7 && time <= 12) {
        // Go to the morning page
        console.log(time)
    }
    // If the time is between 12pm and 5pm
    else if (time >= 12 && time <= 17) {
        // Go to the afternoon page
        console.log(time)
    }
    // If the time is between 5pm and 7pm
    
}

(async () => {
    goTo()
})()

    