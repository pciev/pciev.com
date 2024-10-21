let highestZIndex = 50;

document.getElementById('startButton').addEventListener('mousedown', function() {
    var startMenu = document.getElementById('startMenu');
    if (startMenu.classList.contains('hidden')) {
        startMenu.classList.remove('hidden');
        startMenu.style.display = 'block';
        document.addEventListener('mousedown', closeStartMenuOOB);
    } else {
        startMenu.classList.add('hidden');
        startMenu.style.display = 'none';
        document.removeEventListener('mousedown', closeStartMenuOOB)
    }
});

document.querySelectorAll('.menuItem').forEach(function(item) {
    item.addEventListener('mousedown', function(event) {
        event.preventDefault();
        var content = this.getAttribute('data-content');
        var url = this.getAttribute('data-url');
        if(url) {
            createWindowIFrame(url);
        } else {
            createWindow(content);
        }
        closeStartMenu();
    });
});

function closeStartMenu() {
    var startMenu = document.getElementById('startMenu');
    startMenu.classList.add('hidden');
    startMenu.style.display = 'none';
    document.removeEventListener('mousedown', closeStartMenuOOB);
}

function closeStartMenuOOB(event) {
    var startMenu = document.getElementById('startMenu');
    if(!startMenu.contains(event.target) && event.target.id !== 'startButton') {
        closeStartMenu();
    }
}

function createWindow(content) {
    var windowScreen = document.createElement('div');
    windowScreen.classList.add('windowScreen');
    windowScreen.style.display = 'block';
    windowScreen.style.zIndex = ++highestZIndex;

    var windowHeader = document.createElement('div');
    windowHeader.classList.add('windowHeader');
    windowHeader.innerHTML = 'Window Header';

    var windowContent = document.createElement('div');
    windowContent.classList.add('windowContent');
    windowContent.innerHTML = content;

    var closeButton = document.createElement('button');
    closeButton.classList.add('closeButton');
    closeButton.innerHTML = 'X';
    closeButton.addEventListener('mousedown', function() {
        document.body.removeChild(windowScreen);
    });

    windowScreen.appendChild(windowHeader);
    windowScreen.appendChild(windowContent);
    windowScreen.appendChild(closeButton);
    document.body.appendChild(windowScreen);

    dragWindow(windowScreen, windowHeader);

    windowScreen.addEventListener('mousedown', function() {
        if(parseInt(windowScreen.style.zIndex) !== highestZIndex) {
            windowScreen.style.zIndex = ++highestZIndex;
        };
    });
}

function createWindowIFrame(url) {
    var windowScreen = document.createElement('div');
    windowScreen.classList.add('windowScreen');
    windowScreen.style.display = 'block';
    windowScreen.style.zIndex = ++highestZIndex;

    var windowHeader = document.createElement('div');
    windowHeader.classList.add('windowHeader');
    windowHeader.innerHTML = 'Window Header';

    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    var windowContent = document.createElement('div');
    windowContent.classList.add('windowContent');
    windowContent.style.height = 'calc(100% - 40px)';
    windowContent.appendChild(iframe);

    var closeButton = document.createElement('button');
    closeButton.classList.add('closeButton');
    closeButton.innerHTML = 'X';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(windowScreen);
    });

    windowScreen.appendChild(windowHeader);
    windowScreen.appendChild(windowContent);
    windowScreen.appendChild(closeButton);
    document.body.appendChild(windowScreen);

    dragWindow(windowScreen, windowHeader);

    windowScreen.addEventListener('mousedown', function() {
        if (parseInt(windowScreen.style.zIndex) !== highestZIndex) {
            windowScreen.style.zIndex = ++highestZIndex;
        }
    });

    iframe.addEventListener('load', function() {
        try {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            var title = iframeDocument.title || 'Untitled';
            windowHeader.innerHTML = title;
            windowHeader.appendChild(closeButton);
        } catch(e) {
            windowHeader.innerHTML = 'Content Loaded';
            windowHeader.appendChild(closeButton);
        }
    })
}

function dragWindow(windowScreen, windowHeader) {
    var offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;

    windowHeader.onmousedown = function(e) {
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };

    function elementDrag(e) {
        e.preventDefault();
        offsetX = mouseX - e.clientX;
        offsetY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        windowScreen.style.top = (windowScreen.offsetTop - offsetY) + "px";
        windowScreen.style.left = (windowScreen.offsetLeft - offsetX) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}