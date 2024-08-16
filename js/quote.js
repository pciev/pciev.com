// Message Of The Refresh
var motr = [
    "Kikou! -Chocolat Gelato",
    "Salut! -Red Savarin",
    "HAHA YES I'VE MADE OUT OF THE STRIP CLUB ALIVE , FUCK YOU STUPIDS -@HenstonVennic",
    "come to my stable -@rllyhungryhorse",
    "I'm going to Pranks you! -Jongulo Pranks",
    "Squeak! -Red Cylinder",
    "Squeak! -Elh Cylinder",
]

random()
forzathonCheck()

// Default function
function random() {
    var choice = Math.floor(Math.random() * motr.length);
    document.getElementById("motr").innerHTML = motr[choice];
}

// #FORZATHON LIVE timer to run at 5 minutes before the next hour
function forzathonCheck() {
    var now = new Date();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    if (min >= 55) {
        setInterval(function() {
            document.getElementById("motr").innerHTML = "#FORZATHON LIVE - Event begins in 0" + (60 - min - 1) + ":" + (60 - sec) + ". Get there now to take part!";
        }, 1000);
    }
}

// Grab the current minute on page refresh
function getMinutes() {
    const date = new Date();
    let minutes = date.getUTCMinutes();
    return minutes;
}