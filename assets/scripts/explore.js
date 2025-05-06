// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceElement=document.getElementById("voice-select");
  const textSpeak = document.getElementById("text-to-speak");
  const press = document.querySelector("button");
  const image = document.querySelector("img");
  console.log(press);

  //populating options for voices
  speechSynthesis.onvoiceschanged = () => {
    const voices = speechSynthesis.getVoices();
    for(let i = 0; i < voices.length; i++){
      const options = document.createElement('option');
      options.value = `${voices[i].name}`;
      options.text = `${voices[i].name} (${voices[i].lang})`;
      voiceElement.appendChild(options);
    }
  }

  //playing text after clicking button
  press.addEventListener("click", (event) =>{
    onclick = (event) => {
      const voices = speechSynthesis.getVoices();
      const toSpeak = new SpeechSynthesisUtterance(textSpeak.value);
      //setting voice and language
      for(let i = 0; i < voices.length; i++){
        //console.log(voices[i].name);
        //console.log("elem name:",voiceElement.value);
        if(voices[i].name === voiceElement.value){
          toSpeak.voice = voices[i];
          toSpeak.lang=voices[i].lang;
          break;
        }

      }
      //speaking
      speechSynthesis.speak(toSpeak);

      //changing image
      if (speechSynthesis.speaking){
        image.src = `assets/images`
      }
    }
  })

}