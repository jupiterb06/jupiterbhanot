$("#nav-expand").click(function (e) {
    $("#logo-div-1").toggleClass("hidden");
    $("#logo-div-2").toggleClass("hidden");



    $("header nav").toggleClass("stick-to-top");

    $("#global-nav").slideToggle();

    $("#nav-expand").toggleClass("current-page");

});

const mediaQuery = window.matchMedia("(max-width: 760px)");

function handleDeviceChange(e) {
    if (e.matches) {
        $("#global-nav").css("display", "none");
    } else {
        $("#global-nav").css("display", "flex");
        $("header nav").removeClass("stick-to-top");
        $("#logo-div-2").addClass("hidden");


    }
}

handleDeviceChange(mediaQuery);
mediaQuery.addEventListener("change", handleDeviceChange);


let currentSection = "#painting-drawing";


$("#jump-to-section li a").click(function (e) {
    e.preventDefault();
    $(currentSection + "-btn").removeClass("current-page");


    $("#work-content section").fadeOut();
    $(currentSection).addClass("hidden");

    $(e.target.dataset.section).removeClass("hidden");

    $(e.target.dataset.section).fadeIn();
    currentSection = e.target.dataset.section;
    $(currentSection + "-btn").addClass("current-page");




});