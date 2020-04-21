$('#right-button').click(function() {
    event.preventDefault();
    $('#scroll-cards').animate({
        scrollLeft: "+=400px"
    }, "slow");
});
$('#left-button').click(function() {
    event.preventDefault();
    $('#scroll-cards').animate({
        scrollLeft: "-=400px"
    }, "slow");
});

// var parent = document.getElementById('scroll-cards');
// var child = document.getElementsByClassName('card');
// child.style.paddingBottom = child.offsetWidth - child.clientWidth + "px";
// const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// var y = document.getElementById('first-row-container').offsetWidth;

// function scalingFunction() {
//     console.log("y=" + y);
//     x = ((body.innerWidth) / (y));
//     console.log("x=" + x);
//     console.log("inner width" + window.innerWidth);
//     document.getElementById('first-row-container').style.transform = ("scale(" + x + ")");
//     console.log(document.getElementById('first-row-container').offsetWidth);
//     // document.getElementById('first-row-container').style.transform
// }
// window.addEventListener('resize', scalingFunction);