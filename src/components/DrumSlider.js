

export default function DrumSlider (props) {
    return (
        <input type="range" min="0" max="100" defaultValue="50" className="slider" id={props.type} onChange={props.OnVolumeChange}></input>
    );
}