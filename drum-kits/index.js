const kits = ["crash","kick","snare","tom"];

const containerEl = document.querySelector(".container");

kits.forEach(kit => {
    const btnEl = document.createElement("button");
    containerEl.appendChild(btnEl);
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(resim/" +kit+ ".png)";
    const audioEl = document.createElement("audio");
    containerEl.appendChild(audioEl);
    audioEl.src = "ses/" + kit + ".mp3";

    btnEl.addEventListener("click",()=>{
        audioEl.play();
    })

    window.addEventListener("keydown",(event)=>{
       
        if(kit.slice(0,1) === event.key){
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(()=>{
                btnEl.style.transform = "scale(1)";  
            },100);

        };
    });



});