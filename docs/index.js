function goto_home() {
    const home = document.querySelector("#home");
    if (home)
        home.scrollIntoView({behavior : 'smooth'});
    else 
        location.href = "index.html";
}

function goto_profile() {
    const profile = document.querySelector("#profile");
    if (profile) 
        profile.scrollIntoView({behavior : 'smooth'});
    else 
        location.href = "profile.html";
}

function goto_service() {
    const service = document.querySelector("#service");
    if(service)
        service.scrollIntoView({behavior : 'smooth'});
    else
        location.href = "service.html";
}

function goto_tech() {
    const tech = document.querySelector("#technology");
    if (tech)
        tech.scrollIntoView({behavior : 'smooth'});
    else
        location.href = "service.html";
}

function goto_center() {
    const center = document.querySelector("#center");
    if (center)
        center.scrollIntoView({behavior : 'smooth'});
    else
        location.href = "center.html";
}

function download_catalog() {
    window.location.href = 'catalog(new).pdf';
}

window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u' || e.key === 'p')) {
      e.preventDefault();
      return false;
    }
  });
