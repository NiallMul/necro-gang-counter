import {React, useState} from "react";
import './KillTally.css';

function KillTally() {

    const [tally, setTally] = useState(0);

    const increaseTally = () => {
        return setTally(tally => tally + 1);
    }

    const decreaseTally = () => {
        return setTally(tally => tally>0? tally - 1 : 0);
    }

    const resetTally = () => {
        return setTally(0);
    }
    return <div id={`kill-tally`}>
        <h3>Kill Tally</h3>
        <button id={`increase-tally`} onClick={increaseTally}>Increase</button>
        <span id={"tally_output"}>{tally}</span>
        <button id={`decrease-tally`} onClick={decreaseTally}>Decrease</button>
        <br/>
        <button id={`reset-tally`} onClick={resetTally}>reset</button>
    </div>;
}

export default KillTally
