// Disable Drag
document.ondragstart = function() {
  return false;
};

// Disable Right Click / Context Menu
function nocontext(e) {
  return false;
}
document.oncontextmenu = nocontext;

// Disable Selection on Body
document.addEventListener("DOMContentLoaded", function() {
  var e = document.getElementsByTagName('body')[0];
  if (e) {
    e.setAttribute('unselectable', "on");
  }
});
