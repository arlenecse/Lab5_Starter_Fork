// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  const selectElement=document.getElementById("horn-select");
  console.log(selectElement);
  const image=document.querySelector("img");
  console.log(image);
  const sound=document.getElementsByClassName("hidden");
  console.log(sound);

  const div=document.getElementById("volume-controls");
  const volImage=div.querySelector("img");
  const slider=document.getElementById("volume");

  const playButton=document.querySelector("button");
  console.log(playButton);

  selectElement.addEventListener("change",(e)=>{
    image.src=`assets/images/${e.target.value}.svg`;
    sound.src=`assets/audio/${e.target.value}.mp3`;
  });

  slider.addEventListener("change",(e)=>{
    if(slider.value==0){
      volImage.src=`assets/icons/volume-level-0.svg`;
      sound.volume=0;
    }

    if(slider.value>=1 && slider.value<33){
      volImage.src=`assets/icons/volume-level-1.svg`;
      sound.volume=slider.value/100;
    }

    if(slider.value>=33 && slider.value<67){
      volImage.src=`assets/icons/volume-level-2.svg`;
      sound.volume=slider.value/100;
    }

    if(slider.value>=67){
      volImage.src=`assets/icons/volume-level-3.svg`;
      sound.volume=slider.value/100;
    }

    console.log(sound.volume);
  });


  playButton.addEventListener("click", (event) =>{
    console.log(sound.src);
    sound.play();
  })

  
}