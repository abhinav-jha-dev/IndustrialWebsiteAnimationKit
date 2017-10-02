$(document).ready(function () {
    //for Ship Animation
    var x = 5, y = 0;
    var shipAnimationItteration = 0;
    TweenMax.to("#deck", 2, { x: 5, y: 10 });
    TweenMax.to("#deckshadow", 2, { x: 5, y: 10 });
    TweenMax.to("#deckshadow", 2, { x: 0, y: 0, delay: 2 });
    TweenMax.to("#deck", 2, { x: 0, y: 0, delay: 2 });
    TweenMax.to("#wave", 2, { x: 379, y: 330 });
    TweenMax.to("#wave", 2, { x: 385, y: 330, delay: 2 });
    var shipAnimationInterval = setInterval(function () {
        if (shipAnimationItteration <= 6) {
            x = x - 5;
            if (x % 10 == 0)
                y = y + 7;
        }
        TweenMax.to("#deck", 2, { x: x, y: y });
        TweenMax.to("#deckshadow", 2, { x: x, y: y });
        TweenMax.to("#deckshadow", 2, { x: x - 5, y: y - 7, delay: 2 });
        TweenMax.to("#deck", 2, { x: x - 5, y: y - 7, delay: 2 });
        TweenMax.to("#wave", 2, { x: 379, y: 330 });
        TweenMax.to("#wave", 2, { x: 385, y: 330, delay: 2 });
        shipAnimationItteration++;
    }, 4000);
});