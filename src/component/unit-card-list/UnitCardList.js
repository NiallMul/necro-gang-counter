import React from "react";
import './UnitCardList.css';
import CharacterInputForm from "../character-input-form/CharacterInputForm";

class UnitCardList extends React.Component{
    constructor(props) {
        super(props);
        this.unitEntryElement = React.createRef();
    }
    handleClick =()=>{
        this.unitEntryElement.current.displayForm();
    }
    render() {
        return (
            <div>
                <div id={`unit-list-entry`}>
                </div>
                <CharacterInputForm ref={this.unitEntryElement}/>
                <button onClick={this.handleClick}>Add Fighter form</button>
            </div>

        );
    }



}

export default UnitCardList;
