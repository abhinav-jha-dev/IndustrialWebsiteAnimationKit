$(document).ready(function () {
    var base_url = window.location.href;
    $("#shipbtn").click(function () {
        window.location.href = base_url + "ship.html";
    });
    $("#planebtn").click(function () {
        window.location.href = base_url + "plane.html";
    });
    $("#lorrybtn").click(function () {
        window.location.href = base_url + "lorry.html";
    });
});