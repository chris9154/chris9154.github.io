window.onscroll = function() {stickToTop()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

var inactive = document.getElementsByClassName("inactive");

var active = document.getElementsByClassName("active");

var employment = document.getElementById("employment");

var education = document.getElementById("education");

var references = document.getElementById("references");

var other = document.getElementById("other");

var employmentinfo = document.getElementById("employmentinfo");

var educationinfo = document.getElementById("educationinfo");

var referencesinfo = document.getElementById("referencesinfo");

var otherinfo = document.getElementById("otherinfo");

var inactives = document.querySelectorAll(".inactive");

function stickToTop() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }   else {
        navbar.classList.remove("sticky");
    }
}

function employmentTab() {  
    var actives = document.querySelectorAll(".active");
    for (var i = 0; i < actives.length; i++) {
        actives[i].classList.replace('active', 'inactive');
    }
    employment.classList.replace('inactive', 'active');
    employmentinfo.classList.replace('inactive', 'active');
}

function educationTab() {
    var actives = document.querySelectorAll(".active");
    for (var i = 0; i < actives.length; i++) {
        actives[i].classList.replace('active', 'inactive');
    }
    education.classList.replace('inactive', 'active');
    educationinfo.classList.replace('inactive', 'active');
}

function referencesTab() {
    var actives = document.querySelectorAll(".active");
    for (var i = 0; i < actives.length; i++) {
        actives[i].classList.replace('active', 'inactive');
    }
    references.classList.replace('inactive', 'active');
    referencesinfo.classList.replace('inactive', 'active');
}
