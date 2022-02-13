

export default function DrumButton (props) {
    return (
        <button className="drum-pad" onClick={props.OnDrumPadClick} value={props.text} id={props.audioID}>
            {props.text}
            <audio src={props.source} className='clip' id={props.text}></audio>
        </button>
    );
}