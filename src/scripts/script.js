'use strict';

document.addEventListener("DOMContentLoaded", function() {
  var orbs = document.getElementsByClassName('c-orb');
  
  var positions = [
    { bottom: 20, left: -35 },
    { bottom: 320, left: 450 },
    { bottom: 440, left: 180 }
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
    var initialX = estate.width/2 + positions[i].left;
    var delta = (mouseX-initialX)/50/(1+i*5*i);
    orb.style.left = Math.floor(positions[i].left + delta) + 'px';
  };

  var moveY = function(i, orb, mouseY) {
    var initialY = estate.height/2 + positions[i].bottom;
    var delta = (mouseY-initialY)/50/(1+i*i);
    orb.style.bottom = Math.floor(positions[i].bottom - delta) + 'px';
  };

  document.onmousemove = function(event) {
    for (var i = 0; i < orbs.length; i++) {
      moveX(i, orbs[i], event.x);
      moveY(i, orbs[i], event.y);
    }
  };

});