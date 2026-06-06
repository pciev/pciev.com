// Message Of The Refresh
var motr = [
    "Kikou! -Chocolat Gelato",
    "Salut! -Red Savarin",
    "HAHA YES I'VE MADE OUT OF THE STRIP CLUB ALIVE , FUCK YOU STUPIDS -@HenstonVennic",
    "come to my stable -@rllyhungryhorse",
    "I'm going to Pranks you! -Jongulo Pranks",
    "Squeak! -Red Cylinder",
    "Squeak! -Elh Cylinder",
    "Marge, I'm funny! -Homer",
    "My name is Cory. I like Sonic and I love eating gyros. -Armenian Cory",
    "Catch me later, I'll buy you a beer. -Barney Calhoun",
    "Get Mad!!! -Cave Johnson",
    "Aesthetic Room Makeover. -@rubypaws_",
    "Breadsticks, Muffins, or an empty jug of water. -Misheard flight attendant",
    "You are no longer subscribed to Apple Music. -Apple Music",
    "You will try a new type of seafood and love it. -Fortune cookie",
    "made this out of frustration -@redinSTR"
]

var now = new Date();
var min = now.getMinutes();
random();

// Disable #FORZATHON LIVE timer until a better solution is found
/* if (min < 55) {
    random()
} 
setInterval(forzathonCheck, 1000); */

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
        document.getElementById("motr").innerHTML = "#FORZATHON LIVE\n Event begins in 0" + (59 - min) + ":" + (59 - sec) + ". Get there now to take part!";
    }
}

// Grab the current minute on page refresh
function getMinutes() {
    var now = new Date();
    var min = now.getMinutes();
    return min;
}
