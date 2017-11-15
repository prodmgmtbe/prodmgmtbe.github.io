'use strict';

document.addEventListener("DOMContentLoaded", function() {
  var orbs = document.getElementsByClassName('c-orb');
  
  var positions = [
    // in pixels
    // { bottom: 20, left: -35 },
    // { bottom: 320, left: 450 },
    // { bottom: 440, left: 180 }

    // in %
    { bottom: 4, left: -5},
    { bottom: 45, left: 70},
    { bottom: 63, left: 28}
  ];

  for (var i = 0; i < orbs.length; i++) {
    orbs[i].style.left = positions[i].left;
    orbs[i].style.bottom = positions[i].bottom;
  }

  var estate = {
    width: screen.availWidth,
    height: screen.availHeight
  };

  var moveX = function(i, orb, mouseX) {
    var initialX = 50 + positions[i].left;
    var delta = (mouseX/estate.width*100 - initialX) / 15 / (1+i*5);
    orb.style.left = positions[i].left + delta + '%';
  };

  var moveY = function(i, orb, mouseY) {
    var initialY = positions[i].bottom;
    var delta = (mouseY/estate.height*100 - initialY) / 15 / (1+i*5);
    orb.style.bottom = positions[i].bottom - delta + '%';
  };

  document.onmousemove = function(event) {
    for (var i = 0; i < orbs.length; i++) {
      moveX(i, orbs[i], event.x);
      moveY(i, orbs[i], event.y);
    }
  };

});