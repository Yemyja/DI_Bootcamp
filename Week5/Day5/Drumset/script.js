const  drumSounds = {
    kick: './sounds/kick.wav',
    snare:'./sounds/snare.wav',
    hihat: './sounds/hihat.wav',
    clap: './sounds/clap.wav',
    ride: './sounds/ride.wav',
    tink: './sounds/tink.wav',
    boom: './sounds/boom.wav',
    tom: './sounds/tom.wav',
    openhat: './sounds/openhat.wav',


};

const kickbutton = document.querySelector('.kick');
kickbutton.addEventListener('click',() => {
    const kickSound= new Audio (drumSounds.kick);
    kickSound.play();
});

const snarebutton = document.querySelector('.snare');
snarebutton.addEventListener('click',() => {
    const snareSound= new Audio (drumSounds.snare);
    snareSound.play();
});


const hihatbutton = document.querySelector('.hihat');
hihatbutton.addEventListener('click',() => {
    const hihatSound= new Audio (drumSounds.hihat);
    hihatSound.play();
});

const clapbutton = document.querySelector('.clap');
clapbutton.addEventListener('click',() => {
    const clapSound= new Audio (drumSounds.clap);
    clapSound.play();
});

const ridebutton = document.querySelector('.ride');
ridebutton.addEventListener('click',() => {
    const rideSound= new Audio (drumSounds.ride);
    rideSound.play();
});


const tinkbutton = document.querySelector('.tink');
tinkbutton.addEventListener('click',() => {
    const tinkSound= new Audio (drumSounds.tink);
    tinkSound.play();
});


const boombutton = document.querySelector('.boom');
boombutton.addEventListener('click',() => {
    const boomSound= new Audio (drumSounds.boom);
    boomSound.play();
});


const tombutton = document.querySelector('.tom');
tombutton.addEventListener('click',() => {
    const tomSound= new Audio (drumSounds.tom);
    tomSound.play();
});

const openhatbutton = document.querySelector('.openhat');
openhatbutton.addEventListener('click',() => {
    const openhatSound= new Audio (drumSounds.openhat);
    openhatSound.play();
});

//agregar que sirva aprentando una tecla

document.addEventListener("keydown", (event) => {
    if (event.code === "KeyA") {
      const kickSound = new Audio(drumSounds.kick);
      kickSound.play();
    } else if (event.code === "KeyS") {
      const snareSound = new Audio(drumSounds.snare);
      snareSound.play();
    } else if (event.code === "KeyD") {
      const hiHatSound = new Audio(drumSounds.hihat);
      hiHatSound.play();
    } else if (event.code === 'KeyF'){
          const boomSound= new Audio ( drumSounds.boom)
          boomSound.play();
    } else if (event.code === 'KeyJ'){
          const boomSound= new Audio ( drumSounds.boom)
          boomSound.play();
    }else if (event.code === 'KeyG'){
             const clapSound= new Audio ( drumSounds.clap)
             clapSound.play();

    }else if (event.code === 'KeyH'){
        const rideSound= new Audio ( drumSounds.ride)
        rideSound.play();
    }
  });


//Add event listener to each button



// const kickbutton = document.querySelector('.kick');
// kickbutton.addEventListener('click',() => {
//    playSound(drumSounds.kick);
// });

// const snarebutton = document.querySelector('.snare');
// snarebutton.addEventListener('click',() => {
//     playSound(drumSounds.snare);
// });


// const hihatbutton = document.querySelector('.hihat');
// hihatbutton.addEventListener('click',() => {
//     playSound(drumSounds.hihat);
// });

// const clapbutton = document.querySelector('.clap');
// clapbutton.addEventListener('click',() => {
//     playSound(drumSounds.clap);
// });

// const ridebutton = document.querySelector('.ride');
// ridebutton.addEventListener('click',() => {
//     playSound(drumSounds.ride);
// });


// const tinkbutton = document.querySelector('.tink');
// tinkbutton.addEventListener('click',() => {
//     playSound(drumSounds.tink);
// });


// const boombutton = document.querySelector('.boom');
// boombutton.addEventListener('click',() => {
//     playSound(drumSounds.boom);
// });


// const tombutton = document.querySelector('.tom');
// tombutton.addEventListener('click',() => {
//     playSound(drumSounds.tom);
// });

// const openhatbutton = document.querySelector('.openhat');
// openhatbutton.addEventListener('click',() => {
//     playSound(drumSounds.openhat);
// });

 
   