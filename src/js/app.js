
var estado = 0,
vw = $(window).width();
$(".bt-duvidas a").click(function() {
var delay_time = 0;
$("#hamburger").toggleClass('open');
if (estado === 0) {
TweenMax.to($("#bg-menu-mobile"), 1, {
  x:-vw,
  ease: Expo.easeInOut
});

$(".nav-mb li").each(function() {
  TweenMax.to($(this), 1.2, {
    x:-vw,
    scaleX: 1,
    delay: delay_time,
    ease: Expo.easeInOut
  });
  delay_time += .04;
});
estado = 1;
} else {
estado = 0;
TweenMax.to($("#bg-menu-mobile"), 1.2, {
  x:0,
  ease: Expo.easeInOut
});
$(".nav-mb li").each(function() {
  TweenMax.to($(this), 1, {
    x:0,
    delay: delay_time,
    ease: Expo.easeInOut
  });
  delay_time += .02;
});
}
});

var estado = 0,
vw = $(window).width();
$("#hamburger").click(function() {
var delay_time = 0;
$(this).toggleClass('open');

if (estado === 0) {
TweenMax.to($("#bg-menu-mobile"), 1, {
  x:-vw,
  ease: Expo.easeInOut
});

$(".nav-mb li").each(function() {
  TweenMax.to($(this), 1.2, {
    x:-vw,
    scaleX: 1,
    delay: delay_time,
    ease: Expo.easeInOut
  });
  delay_time += .04;
});
estado = 1;
} else {
estado = 0;
TweenMax.to($("#bg-menu-mobile"), 1.2, {
  x:0,
  ease: Expo.easeInOut
});
$(".nav-mb li").each(function() {
  TweenMax.to($(this), 1, {
    x:0,
    /*
    x:vw,
    scaleX: 2.3,
    */
    delay: delay_time,
    ease: Expo.easeInOut
  });
  delay_time += .02;
});
}
});

