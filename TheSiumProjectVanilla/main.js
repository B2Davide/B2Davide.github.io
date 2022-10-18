


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

let siumCheck = () => {

  let date = new Date();

  if(date.getDay() === 6){document.getElementById("redirect").href = 'siumnt.html'}else{document.getElementById("redirect").href = 'sium.html'} 

};

// var audio = new Audio('http://localhost:5500/canisium/TheSiumProjectVanilla/assets/urloDelSium.mp3');
// audio.play();

setInterval(updateHour, 1000);

siumCheck();