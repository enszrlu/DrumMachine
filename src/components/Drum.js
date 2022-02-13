import DrumButton from './DrumButton.js'
import DrumSwitch from './DrumSwitch.js'
import DrumSlider from './DrumSlider.js'

export default function Drum (props) {
    return (
        <div id="drum-machine">
            <div id="display">
                <div id="drum-pad">
                    {props.audios.map((audio) => <DrumButton text={audio.keyTrigger} source={audio.url} audioID={audio.id} keyCode={audio.keyCode} OnDrumPadClick={props.OnDrumPadClick}/>)}
                </div>
                <div id="drum-info">
                    <p>Power</p>
                    <DrumSwitch type={'powerSwitch'} OnSwitchChange={props.OnSwitchChange} defaultChecked={true}/>
                    <p id='audioNameInfo'>{props.audioName}</p>
                    <DrumSlider type={'volumeSlider'} OnVolumeChange={props.OnVolumeChange} />
                    <p>Bank</p>
                    <DrumSwitch type={'bankSwitch'} OnSwitchChange={props.OnSwitchChange} defaultChecked={false}/>
                </div>
            </div>
            <text>by enszrlu</text>
        </div>
    );
}