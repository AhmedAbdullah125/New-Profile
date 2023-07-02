window.onscroll = function () { myFunction() };
function myFunction() {
    // console.log(window.scrollY);
    if (window.scrollY > (document.getElementById("prog").offsetTop - 300)) {
        document.getElementById("bar1").style.width = document.getElementById("prog-value1").innerHTML;
        document.getElementById("bar2").style.width = document.getElementById("prog-value2").innerHTML;
        document.getElementById("bar3").style.width = document.getElementById("prog-value3").innerHTML;
    }
    if (window.scrollY > (document.getElementById("prog").offsetTop)) {
        document.getElementById("nav").classList.add("navbar-fixed");
        document.getElementById("nav").classList.remove("navbar-notfixed");
    }
    if (window.scrollY < document.getElementById("prog").offsetTop) {
        document.getElementById("nav").classList.add("navbar-notfixed");
        document.getElementById("nav").classList.remove("navbar-fixed");
    }

    if (window.scrollY >= 0 && window.scrollY < (document.getElementById("prog").offsetTop)) {
        removeActive();
        document.getElementById("nav-home").classList.add("active");
    }
    if (window.scrollY >= (document.getElementById("prog").offsetTop) && window.scrollY < (document.getElementById("services").offsetTop)) {
        removeActive();
        document.getElementById("nav-about").classList.add("active");
    }
    if (window.scrollY > (document.getElementById("services").offsetTop) && window.scrollY < (document.getElementById("portfolio").offsetTop)) {
        removeActive();
        document.getElementById("nav-services").classList.add("active");
    }
    if (window.scrollY > (document.getElementById("portfolio").offsetTop)&& window.scrollY < (document.getElementById("clients").offsetTop)) {
        removeActive();
        document.getElementById("nav-works").classList.add("active");
    }
    if (window.scrollY > (document.getElementById("clients").offsetTop)&& window.scrollY < (document.getElementById("team").offsetTop)) {
        removeActive();
        document.getElementById("nav-clients").classList.add("active");
    }
    if (window.scrollY > (document.getElementById("team").offsetTop)&& window.scrollY < (document.getElementById("contact").offsetTop)) {
        removeActive();
        document.getElementById("nav-team").classList.add("active");
    }
    if (window.scrollY > (document.getElementById("contact").offsetTop)) {
        removeActive();
        document.getElementById("nav-contact").classList.add("active");
    }
    
}
function removeActive() {
    document.getElementById("nav-home").classList.remove("active");
    document.getElementById("nav-about").classList.remove("active");
    document.getElementById("nav-services").classList.remove("active");
    document.getElementById("nav-works").classList.remove("active");
    document.getElementById("nav-clients").classList.remove("active");
    document.getElementById("nav-team").classList.remove("active");
    document.getElementById("nav-contact").classList.remove("active");
}


function filterBrand() {
    //document.getElementById("brand").style.display = "none";
    var filterA = document.getElementsByClassName("filterA");
    for (var i = 0; i < filterA.length; i++) {
        filterA.item(i).classList.remove("active");
    }
    document.getElementById("brandA").classList.add("active");


    var filters = document.getElementsByClassName("filter");
    for (var i = 0; i < filters.length; i++) {
        filters.item(i).classList.add("not-activ-col");
    }

    var brands = document.getElementsByClassName("brand");
    for (var i = 0; i < brands.length; i++) {
        brands.item(i).classList.add("activ-col");
        brands.item(i).classList.remove("not-activ-col");
    }
}
function filterAll() {
    var filterA = document.getElementsByClassName("filterA");
    for (var i = 0; i < filterA.length; i++) {
        filterA.item(i).classList.remove("active");
    }
    document.getElementById("allA").classList.add("active");



    //document.getElementById("brand").style.display = "none";
    var all = document.getElementsByClassName("filter");
    for (var i = 0; i < all.length; i++) {
        all.item(i).classList.add("activ-col");
        all.item(i).classList.remove("not-activ-col");
    }
}
function filterDesign() {
    //document.getElementById("brand").style.display = "none";
    var filterA = document.getElementsByClassName("filterA");
    for (var i = 0; i < filterA.length; i++) {
        filterA.item(i).classList.remove("active");
    }
    document.getElementById("designA").classList.add("active");

    var filters = document.getElementsByClassName("filter");
    for (var i = 0; i < filters.length; i++) {
        filters.item(i).classList.remove("not-activ-col");
        filters.item(i).classList.remove("activ-col");
        filters.item(i).classList.add("not-activ-col");
    }

    var design = document.getElementsByClassName("design");
    for (var i = 0; i < design.length; i++) {
        design.item(i).classList.add("activ-col");
        design.item(i).classList.remove("not-activ-col");
    }
}
function filterGraphic() {
    //document.getElementById("brand").style.display = "none";
    var filterA = document.getElementsByClassName("filterA");
    for (var i = 0; i < filterA.length; i++) {
        filterA.item(i).classList.remove("active");
    }
    document.getElementById("graphicA").classList.add("active");

    var filters = document.getElementsByClassName("filter");
    for (var i = 0; i < filters.length; i++) {
        filters.item(i).classList.remove("not-activ-col");
        filters.item(i).classList.remove("activ-col");
        filters.item(i).classList.add("not-activ-col");
    }

    var graphic = document.getElementsByClassName("graphic");
    for (var i = 0; i < graphic.length; i++) {
        graphic.item(i).classList.add("activ-col");
        graphic.item(i).classList.remove("not-activ-col");
    }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});