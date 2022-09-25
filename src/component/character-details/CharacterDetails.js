import './CharacterDetails.css';

function CharacterDetails(props) {
    let charDetails = props.details;
    return <div id={`character-details`}>
        <span>Name: {charDetails.name}</span>
        <br/>
        <span>Class: {charDetails.class}</span>
        <br/>
        <span>Desc: {charDetails.desc}</span>
    </div>;
}

export default CharacterDetails
