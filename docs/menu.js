function close_menubar() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');

    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
}

function open_menubar() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    
    sideMenu.classList.add('active');
    overlay.classList.add('active');
}

