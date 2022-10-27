// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById("horn-select");
  console.log(selectElement);
  var audio1;
  var volume1 = 0.5;
  var img1;
  var selectedImg;
  
  selectElement.addEventListener('change', (event) => {
   // console.log(event.target.value);
    if (event.target.value == "air-horn"){
      img1 = document.querySelector("img");
      img1.src = "assets/images/air-horn.svg";
      audio1 = new Audio("assets/audio/air-horn.mp3");
      selectedImg = event.target.value;
    }
    else if (event.target.value == "car-horn"){
      img1 = document.querySelector("img");
      img1.src = "assets/images/car-horn.svg";
      audio1 = new Audio("assets/audio/car-horn.mp3");
      selectedImg = event.target.value;
    }
    else if (event.target.value == "party-horn"){
      img1 = document.querySelector("img");
      img1.src = "assets/images/party-horn.svg";
      audio1 = new Audio("assets/audio/party-horn.mp3");
      selectedImg = event.target.value;
    }
  })
  const volumeSelector = document.getElementById("volume-controls");
  volumeSelector.addEventListener('change', (volSelect) => {
    console.log(volSelect.target.value);//to check do inspect element on website and open console to check the console.log message
    if (volSelect.target.value == 0){
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-0.svg";
      volume1 = volSelect.target.value / 100;
    }
    else if ((volSelect.target.value >= 1) && (volSelect.target.value < 33)){
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-1.svg";
      volume1 = volSelect.target.value / 100;
    }
    else if ((volSelect.target.value >= 33) && (volSelect.target.value < 67)){
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-2.svg";
      volume1 = volSelect.target.value / 100;
    }
    else if (volSelect.target.value >= 67){
      document.querySelector("#volume-controls img").src = "assets/icons/volume-level-3.svg";
      volume1 = volSelect.target.value / 100;
    }
   // console.log(img1);
 //  if(event.target.value)
  })
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    audio1.play();
    audio1.volume = volume1;
    console.log(selectedImg);
    if(selectedImg == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  })
}