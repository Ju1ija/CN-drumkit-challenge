const aKey = document.getElementById("aKey");
const sKey = document.getElementById("sKey");
const dKey = document.getElementById("dKey");
const fKey = document.getElementById("fKey");
const gKey = document.getElementById("gKey");
const hKey = document.getElementById("hKey");
const jKey = document.getElementById("jKey");
const kKey = document.getElementById("kKey");
const lKey = document.getElementById("lKey");


const letterCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const letterSounds = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tink", "tom"];

document.addEventListener("keydown", (e) => {
  if (letterCodes.includes(e.which)) {
    let sound = letterSounds[letterCodes.indexOf(e.which)];
    document.getElementById(`${sound}`).pause();
    document.getElementById(`${sound}`).currentTime = 0;
    document.getElementById(`${sound}`).play();
  }
});

aKey.addEventListener("click", () => {
  document.getElementById("boom").pause();
  document.getElementById("boom").currentTime = 0;
  document.getElementById("boom").play();
});

sKey.addEventListener("click", () => {
  document.getElementById("clap").pause();
  document.getElementById("clap").currentTime = 0;
  document.getElementById("clap").play();
});

dKey.addEventListener("click", () => {
  document.getElementById("hihat").pause();
  document.getElementById("hihat").currentTime = 0;
  document.getElementById("hihat").play();
});

fKey.addEventListener("click", () => {
  document.getElementById("kick").pause();
  document.getElementById("kick").currentTime = 0;
  document.getElementById("kick").play();
});
gKey.addEventListener("click", () => {
  document.getElementById("openhat").pause();
  document.getElementById("openhat").currentTime = 0;
  document.getElementById("openhat").play();
});

hKey.addEventListener("click", () => {
  document.getElementById("ride").pause();
  document.getElementById("ride").currentTime = 0;
  document.getElementById("ride").play();
});

jKey.addEventListener("click", () => {
  document.getElementById("snare").pause();
  document.getElementById("snare").currentTime = 0;
  document.getElementById("snare").play();
});

kKey.addEventListener("click", () => {
  document.getElementById("tink").pause();
  document.getElementById("tink").currentTime = 0;
  document.getElementById("tink").play();
});

lKey.addEventListener("click", () => {
  document.getElementById("tom").pause();
  document.getElementById("tom").currentTime = 0;
  document.getElementById("tom").play();
});
