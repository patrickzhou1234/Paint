maincanv = document.getElementById("maincanv");
mousedown = false;
thickness = document.getElementById("thickness");
ink = [];

function pendown() {
  mousedown = true;
  var newpixel = document.createElement("div");
  newpixel.style.cssText = "background-color:green;left:"+(event.pageX-thickness.value/2)+"px;top:"+(event.pageY-thickness.value/2)+"px;position:absolute;width:"+thickness.value+"px;height:"+thickness.value+"px;border-radius:50%;pointer-events:none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;user-drag: none;-webkit-user-drag: none;";
  ink.push(newpixel);
  document.body.appendChild(newpixel);
}

function penup() {
  mousedown = false;
}

maincanv.onmousemove = function(event) {
  if (mousedown) {
    var newpixel = document.createElement("div");
    newpixel.style.cssText = "background-color:green;left:"+(event.pageX-thickness.value/2)+"px;top:"+(event.pageY-thickness.value/2)+"px;position:absolute;width:"+thickness.value+"px;height:"+thickness.value+"px;border-radius:50%;pointer-events:none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;user-drag: none;-webkit-user-drag: none;";
    ink.push(newpixel);
    document.body.appendChild(newpixel);
  }
}

function revealconfirm() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("confirmcontainer").style.display = "block";
}

function hideconfirm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("confirmcontainer").style.display = "none";
}

function clearcanv() {
  hideconfirm();
  for (i=0;i<ink.length;i++) {
    ink[i].remove();
  }
}
