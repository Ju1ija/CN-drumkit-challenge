const letterCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const letterSounds = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tink", "tom"];

// Key events

document.addEventListener("keydown", (e) => {
  let sound = letterSounds[letterCodes.indexOf(e.which)];
  document.getElementById(`${sound}`).pause();
  document.getElementById(`${sound}`).currentTime = 0;
  document.getElementById(`${sound}`).play();
});

document.onkeydown = scaleUpKey;
document.onkeyup = scaleDownKey;

function scaleUpKey(e) {
  document.getElementById(`${e.which}`).style.transform = "scale(1.3)";
  document.getElementById(`${e.which}`).style.color = "#FFFFFF";
  document.getElementById(`${e.which}`).style.fontWeight = "700";
}

function scaleDownKey(e) {
  document.getElementById(`${e.which}`).style.transform = "scale(1)";
  document.getElementById(`${e.which}`).style.color = "#000000";
  document.getElementById(`${e.which}`).style.fontWeight = "500";
}

// Mouse events

document.addEventListener("click", (e) => {
  let code = parseInt(e.path[1].id);
  let sound = letterSounds[letterCodes.indexOf(code)];
  document.getElementById(`${sound}`).pause();
  document.getElementById(`${sound}`).currentTime = 0;
  document.getElementById(`${sound}`).play();
});

document.onmousedown = scaleUpMouseClick;
document.onmouseup = scaleDownMouseClick;
document.onmouseover = scaleUpMouseHover;
document.onmouseout = scaleDownMouseHover;

function scaleUpMouseClick(e) {
  let code = parseInt(e.path[1].id);
  document.getElementById(`${code}`).style.transform = "scale(1.3)";
  document.getElementById(`${code}`).style.color = "#FFFFFF";
  document.getElementById(`${code}`).style.fontWeight = "700";
}

function scaleDownMouseClick(e) {
  let code = parseInt(e.path[1].id);
  document.getElementById(`${code}`).style.transform = "scale(1)";
  document.getElementById(`${code}`).style.color = "#000000";
  document.getElementById(`${code}`).style.fontWeight = "500";
}

function scaleUpMouseHover(e) {
  let code = parseInt(e.path[1].id);
  document.getElementById(`${code}`).style.transform = "scale(1.3)";
  document.getElementById(`${code}`).style.fontWeight = "700";
}

function scaleDownMouseHover(e) {
  let code = parseInt(e.path[1].id);
  document.getElementById(`${code}`).style.transform = "scale(1)";
  document.getElementById(`${code}`).style.fontWeight = "500";
}