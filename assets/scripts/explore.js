// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth=window.speechSynthesis;

function init() {
  // TODO
  const voiceElement=document.getElementById("voice-select");
  const textSpeak = document.getElementById("text-to-speak");
  const press = document.querySelector("button");
  const image = document.querySelector("img");
  console.log(image);
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

      const voices = speechSynthesis.getVoices();
      const toSpeak = new SpeechSynthesisUtterance(textSpeak.value);
      //setting voice and language
      for(let i = 0; i < voices.length; i++){
        // console.log(voices[i].name);
        // console.log("elem name:",voiceElement.value);
        if(voices[i].name === voiceElement.value){
          toSpeak.voice = voices[i];
          toSpeak.lang=voices[i].lang;
          break;
        }

      }
      //speaking

      speechSynthesis.speak(toSpeak);
      // changeImage();
    
            
      toSpeak.onstart=() => {
        changeImage(true);
      };

      toSpeak.onend=() => {
        changeImage(false);

      };
  })
}

function changeImage(isSpeaking){
  console.log("entering")
  const image = document.querySelector("img");

  if(isSpeaking){
    console.log("speaking");
    image.src = "assets/images/smiling-open.png" 
  }else{
    console.log("stopped speaking");
    image.src = "assets/images/smiling.png"
  }
}


 

