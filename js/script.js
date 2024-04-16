// zmena viditelnosti polozek v menu

var menu = document.getElementById("Menu");
var odkazy = document.getElementById("Odkazy");
var button = document.getElementById("Button");
menu.addEventListener("click", Show);

function Show () {
 if (odkazy.style.getPropertyValue("display") == "none") {
  odkazy.style.setProperty("display", "flex");
  button.style.setProperty("color","black");
  button.style.setProperty("background","cyan");
} else {
  odkazy.style.setProperty("display", "none");
  button.style.setProperty("color","#f4ddba");
  button.style.setProperty("background","black");
      }
}
