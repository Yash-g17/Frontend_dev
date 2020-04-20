// $('#right-button').click(function() {
//     event.preventDefault();
//     $('#scroll-cards').animate({
//         scrollLeft: "+=400px"
//     }, "slow");
// });
// $('#left-button').click(function() {
//     event.preventDefault();
//     $('#scroll-cards').animate({
//         scrollLeft: "-=400px"
//     }, "slow");
// });

var parent = document.getElementById('scroll-cards');
var child = document.getElementsByClassName('card');
child.style.paddingBottom = child.offsetWidth - child.clientWidth + "px";

// function scalingfunction() {
//     x = 0.5;
//     document.getElementById('first-row-container').style.transform = ("scale(" + x + ")");
//     console.log(10);
// }
// document.querySelector("#first-row-container").addEventListener('resize', scalingfunction());

function test() {
    alert("asdasdsa");
    console.log(10);
}
document.querySelector("body").addEventListener('click', test);
document.write(5 + 6);