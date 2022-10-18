


let updateHour = () => {
  let date = new Date();

  let gg = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  let hh = date.getHours();
  let mn = date.getMinutes();
  let ss = date.getSeconds();

  document.getElementById("date").innerHTML = `${gg}/${mm}/${yyyy}`;
  document.getElementById("hour").innerHTML = `${hh}:${mn}:${ss}`;
};

var audio = new Audio('C:/Users/utente/Documents/Can i SIum/canisium/TheSiumProjectVanilla/assets/urloDelSium.mp3');
audio.play();

document
  .getElementsByTagName("button")[0]
  .addEventListener("click", (openPopUp = () => {

    window.open('https://javascript.info/')

  }));

setInterval(updateHour, 1000);
