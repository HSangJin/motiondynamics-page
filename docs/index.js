function goto_home() {
    document.querySelector("#home").scrollIntoView({behavior : 'smooth'});
}

function goto_profile() {
    document.querySelector("#profile").scrollIntoView({behavior : 'smooth'});
}

function goto_service() {
    document.querySelector("#service").scrollIntoView({behavior : 'smooth'});
}

function goto_tech() {
    document.querySelector("#technology").scrollIntoView({behavior : 'smooth'});
}

function goto_center() {
    document.querySelector("#center").scrollIntoView({behavior : 'smooth'});
}

window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u' || e.key === 'p')) {
      e.preventDefault();
      return false;
    }
  });
