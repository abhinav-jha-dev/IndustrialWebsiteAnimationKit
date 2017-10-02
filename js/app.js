$(document).ready(function () {
    var base_url = window.location.origin;
    $("#shipbtn").click(function () {
        window.location.href = base_url + "mithap/ship.html";
    });
    $("#planebtn").click(function () {
        window.location.href = base_url + "mithap/plane.html";
    });
    $("#lorrybtn").click(function () {
        window.location.href = base_url + "mithap/lorry.html";
    });
});