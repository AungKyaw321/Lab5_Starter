// explore.js

window.addEventListener('DOMContentLoaded', init);
function init() {
    var utterance;
    const getText = document.getElementById("text-to-speak");
    const currVoice = document.getElementById("voice-select");
    const getSelectedVoice = document.querySelector("select");
    const synth = window.speechSynthesis;
    var textToSpeak;
    getText.addEventListener("input", (event) => {
      console.log(event.target.value);
      textToSpeak = event.target.value;
    })
   let voices = [];

    function populateVoiceList() {
        voices = synth.getVoices();
  
        for (let i = 0; i < voices.length ; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        option.value = i;
        if (voices[i].default) {
            option.textContent += ' — DEFAULT';
        }
  
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        currVoice.appendChild(option);
        }
    }
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    const button = document.querySelector('button');
    button.addEventListener('click', event => {
        utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.voice = voices[getSelectedVoice.value];
        synth.speak(utterance);
        utterance.onstart = event => {
            document.querySelector("#explore img").src = "assets/images/smiling-open.png";
           }
        utterance.addEventListener('end', event => {
            document.querySelector("#explore img").src = "assets/images/smiling.png";
           })
    })
}