import logo from './logo.svg';
import './App.css';
import React from 'react';
import Drum from './components/Drum.js'


const bankOne = [
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

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '50',
      power: true,
      bank: false,
      audioName: ''
    }
    this.handleVolumeSliderChange = this.handleVolumeSliderChange.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
    this.handleDrumPadClick = this.handleDrumPadClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleVolumeSliderChange(event) {
    this.setState({
      volume: event.target.value
    });
    console.log(event.target.value)
  }
  handleSwitchChange(event) {
    if (event.target.id == 'powerSwitch') {
      this.setState({
        power: event.target.checked
      });
    }
    else if (event.target.id == 'bankSwitch') {
      this.setState({
        bank: event.target.checked
      });
    }
  }

  handleDrumPadClick(event) {
    if (this.state.power){
      const sound = document.getElementById(event.target.value);
      sound.volume = parseFloat(this.state.volume) / 100;
      sound.play();
      this.setState({
        audioID: event.target.id
      });
    }
  }

  handleKeyDown = (event) => {
    if (this.state.power){
      try {
        document.getElementById(String.fromCharCode(event.keyCode)).parentElement.click();
        
      }
      catch (error) {
        console.log("Undefined Key, no audio found so ignored the key press => " + String.fromCharCode(event.keyCode));
      }
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="App">
        <Drum OnVolumeChange={this.handleVolumeSliderChange} OnSwitchChange={this.handleSwitchChange} audios={this.state.bank ? bankTwo : bankOne} OnDrumPadClick={this.handleDrumPadClick} audioName={this.state.audioID}/>
      </div>
    );
  }
}

export default App;
