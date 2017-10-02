$(document).ready(function () {
    // for Plane Animation
    //var planeanimationtimeline = new TimelineMax({ repeat: -1, yoyo: true });
    //planeanimationtimeline.to(["#clouds"], 2, { x: 10, y: 10, ease: Power1.easeOut })
    //.to(["#clouds"], 2, { x: 0, y: 10, ease: Power1.easeOut })
    //.to(["#clouds"], 2, { x: 0, y: 0, ease: Power1.easeOut });
    //var birdanimation = new TimelineMax({ repeat: -1, yoyo: true });
    //birdanimation.to(["#birds"], 2, { x: 5, y: 5, scale: 0.8 })
    //.to(["#birds"], 3, { x: -5, y: -5, scale: 0.8 });

    TweenMax.from(["#Plane", "#planeashes"], 2, { x: -500, y: 300, scale: 0.5, ease: Power1.easeOut, onComplete: stableplananimation });
    TweenMax.from("#planeashes", 4, { opacity: 0, onComplete: stableplananimation });
    TweenMax.fromTo("#planeashes", 0.1, { opacity: 0 }, { opacity: 1, repeat: -1 });
    function stableplananimation() {
        var planetimeline = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 0 });
        planetimeline.to(["#Plane", "#planeashes"], 2, { x: 10, y: 0, ease: Power1.easeOut })
        .to(["#Plane", "#planeashes"], 2, { x: -10, y: 0, ease: Power1.easeOut });
    }
    //var smallplanetimeline = new TimelineMax({ repeat: -1, repeatDelay: 4 });
    //smallplanetimeline.fromTo(["#smallplanes"], 1, { x: 0, y: 0, opacity: 0, ease: Power1.easeOut }, { x: 0, y: 0, opacity: 1, ease: Power1.easeOut })
    //    .to(["#smallplanes"], 2, { x: 110, y: -50, scale: 0.8, ease: Power1.easeOut })
    //    .to(["#smallplanes"], 2, { x: 600, y: -300, scale: 0.8, ease: Power0.easeOut })
    //.to(["#smallplanes"], 2, { x: 900, y: -450, opacity: 0, ease: Power0.easeOut });

});