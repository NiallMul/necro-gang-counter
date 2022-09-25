import CharacterDetails from "../character-details/CharacterDetails";
import KillTally from "../kill-tally/KillTally";
import './UnitCard.css';

function UnitCard(props) {
    let newFighter = props.fighter;
    return (
        <div id={`unit-entry`}>
            <CharacterDetails details={newFighter}/>
            <KillTally/>
        </div>
    );
}

export default UnitCard;
