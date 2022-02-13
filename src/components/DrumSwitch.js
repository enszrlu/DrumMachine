

export default function DrumSwitch (props) {
    return (
        <label className="switch">
            <input type="checkbox" onChange={props.OnSwitchChange} id={props.type} defaultChecked={props.defaultChecked}></input>
            <span className="switchSlider"></span>
        </label>
    );
}