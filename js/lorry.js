$(document).ready(function () {
    //for Lorry Animation
    var lorryanimation = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 1 });
    lorryanimation.to(["#ankelload"], 5, { x: 0, y: 70, ease: Power0.easeOut }, "ankeldown")
        .to(["#ankel rect"], 5, { attr: { height: 100 }, ease: Power0.easeOut }, "ankeldown")
        .to(["#ankelload"], 5, { x: 0, y: 0, ease: Power0.easeOut }, "ankelup")
        .to(["#ankel rect"], 5, { attr: { height: 31.233 }, ease: Power0.easeOut }, "ankelup")
    .from(["#floatbox"], 5, { y: 70, ease: Power0.easeOut }, "ankelup")
    .to(["#ankel rect", "#floatbox", "#ankelload"], 5, { x: -70, ease: Power0.easeOut })
    .to(["#ankel rect"], 5, { attr: { height: 100 }, ease: Power0.easeOut }, "ankelenddown")
    .to(["#floatbox", "#ankelload"], 5, { y: 70, ease: Power0.easeOut }, "ankelenddown");
});