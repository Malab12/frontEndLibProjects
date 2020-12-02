const audio = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


$(document).ready(() => {
    $(document).keydown(event => {
        // console.log(typeof event.which)
        switch(event.which) {
            case 81:
            case 87:
            case 69:
            case 65:
            case 83:
            case 68:
            case 90:
            case 88:
            case 67: buttonPressed(event.which);
        }
    });
    $('.button').click(() => {
        const id = event.target.id;
        buttonClicked(id);
        
    });
});

function buttonPressed(keycode) {
    audio.forEach(clip => {
        if(clip.keyCode === keycode) {
            // console.log(`Drum button ${clip.keyTrigger} was pressed!`);
            
            // Highlighting the button pressed and display it 
            const id = `#${clip.keyTrigger}`;
            $(id).addClass('pressed');
            setTimeout(() =>$(id).removeClass('pressed'),200);
            $('#descriptor').text(clip.id);
            $('#letter-display').text(clip.keyTrigger);

            // Adding the audio clip
            const sound = new Audio(clip.url);
            sound.play();
            return;
        }
    });
}

function buttonClicked(id) {
    audio.forEach(clip => {
        if(clip.keyTrigger === id) {
            $('#descriptor').text(clip.id);
            $('#letter-display').text(clip.keyTrigger);
            const sound = new Audio(clip.url);
            sound.play();
            return;
        }
    });
}