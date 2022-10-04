import React from "react";
import FocusTrap from "focus-trap-react";
import ReactDOM from 'react-dom';
import './CharacterInputForm.css';
import UnitCard from "../unit-card/UnitCard";

class CharacterInputForm extends React.Component {
    state = {
        unitList: [],
        showForm: false,
        fighter: {
            name: "",
            class: "",
            desc: ""
        }
    }

    displayForm = () => {
        this.setState({showForm: !this.state.showForm});
        console.log(`show form value: ${this.state.showForm}`);
    }

    deleteFighter = (props) => {
        let newList = this.state.unitList.filter((entry) => entry.key != props);
        this.setState({unitList: newList});
    };

    addFighter = (props) => {
        props.preventDefault();
        let newFighter = {name: props.target[0].value, class: props.target[1].value, desc: props.target[2].value}
        let entryKey = this.state.unitList.length;
        this.setState({
            unitList: this.state.unitList.concat(<div key={entryKey} id={`unit-entry`}><UnitCard fighter={newFighter}/>
                <button className={`delete-fighter-btn`} onClick={() => this.deleteFighter(entryKey)}>X</button>
            </div>)
        });
        console.log(`list in state: ${this.state.unitList}`);
        this.displayForm();
    };

    render() {
        return <div>
            <div id={`unit-list-entry`}>
                {this.state.unitList}
            </div>
            {
                this.state.showForm && (
                    ReactDOM.createPortal(
                        <FocusTrap>
                            <aside
                                tag="aside"
                                role="dialog"
                                tabIndex="-1"
                                aria-modal="true"
                                className="modal-cover"
                            >
                                <div className="modal-area">
                                    <button id={`form-cancel-btn`} className={`_modal-close`}
                                            onClick={this.displayForm}>
                                        <span id="close-modal" className="_hide-visual">Close</span>
                                        <svg className="_modal-close-icon" viewBox="0 0 40 40">
                                            <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>
                                        </svg>
                                    </button>
                                    <h3>Submit a fighter</h3>
                                    <div className={`modal-body`}>
                                        <form onSubmit={this.addFighter}>
                                            <input id={`fighter-name`} type={`text`} title={`Name`}
                                                   placeholder={`name`}/>
                                            <br/>
                                            <input id={`fighter-class`} type={`text`} title={`class`}
                                                   placeholder={`class`}/>
                                            <br/>
                                            <input id={`fighter-desc`} type={`text`} title={`desc`}
                                                   placeholder={`desc`}/>
                                            <br/>
                                            <input id={`submit-fighter-btn`} type={`submit`}/>
                                        </form>
                                    </div>
                                </div>
                            </aside>
                        </FocusTrap>, document.body
                    ))
            }
        </div>
    }
}

export default CharacterInputForm
