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

motr()
var min = getMinutes();
forzathonCheck(min)

// Default function
function motr() {
    var choice = Math.floor(Math.random() * motr.length);
    document.getElementById("motr").innerHTML = motr[choice];
}

// #FORZATHON LIVE timer to run at 5 minutes before the next hour
function forzathonCheck(min) {
    if (min >= 55) {
        document.getElementById("motr").innerHTML = "#FORZATHON LIVE - Event begins in" + " " + ". Get there now to take part!";
    }
}

// Grab the current minute on page refresh
function getMinutes() {
    const date = new Date();
    let minutes = date.getUTCMinutes();
    return minutes;
}