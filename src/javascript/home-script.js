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
var parent = document.getElementById('scroll-cards');
var child = document.getElementsByClassName('card');
child.style.paddingBottom = child.offsetWidth - child.clientWidth + "px";