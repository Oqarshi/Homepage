console.log("Welcome idot play the game and stop looking at the code.")

load = localStorage2.getItem("loadgame");
if (load == "true") {
  window.open("https://Pixelated-War.omediscool.repl.co/Mars/loading/loading.html", "_self");
}

function modals(color, title, desc, buta, butb) {
  var modalz = document.getElementById("modal");
  var modover = document.getElementById("modaloverlay");
  var modtitle = document.getElementById("modal-title");
  var moddesc = document.getElementById("modal-desc");
  var modbuta = document.getElementById("modalbuta");
  var modbutb = document.getElementById("modalbutb");
  modalz.style.top = "0";
  modover.style.display = "block";


  if (color == "red") {
    var colour = "#DD1A1A"
  }

  else if (color == "blue") {
    var colour = "#1A3EDD"
  }

  else if (color == "green") {
    var colour = "#32CD32"
  }

  else {
    var colour = color;
  }


  modtitle.style.backgroundColor = colour;
  modtitle.innerHTML = title;
  moddesc.innerHTML = desc;
  if (buta === false) {
    modbuta.style.display = "none";
  }
  
  else {
    modbuta.innerHTML = buta;
    modbuta.addEventListener("click", function() {
      return "1";
    });
  }

  if (butb === false) {
    modbutb.style.display = "none";
  }
  
  else {
    modbutb.innerHTML = buta;
    modbuta.addEventListener("click", function() {
      return "2";
    });
  }
}


function modalout() {
  var modalz = document.getElementById("modal");
  var modover = document.getElementById("modaloverlay");
  var modtitle = document.getElementById("modal-title");
  var moddesc = document.getElementById("modal-desc");
  var modbuta = document.getElementById("modalbuta");
  var modbutb = document.getElementById("modalbutb");
    modal.style.top = "-100vh";
    modover.style.display = "none";
}