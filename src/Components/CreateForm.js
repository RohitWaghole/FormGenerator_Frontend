import React, { Component } from 'react';
import MCQ from './Elements/MCQ.js';
import ShortAns from './Elements/ShortAns.js';

export default class CreateForm extends Component {

    state = {
        fields: [
        ]
    }
    elements = [
        { name: "MCQ" },
        { name: "short_ans" },
    ]
    MCQCount = 0;
    ShortAnsCount = 0;
    formConfiguration = []


    addFormConfiguration = (field) => {
        var objIndex = this.formConfiguration.findIndex((obj => obj.id === field.id));

        if (objIndex === -1) {
            this.formConfiguration.push(field);
        }
        else {
            this.formConfiguration[objIndex] = field
        }
    }

    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("fieldID", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev) => {
        if (ev.dataTransfer.getData("fieldID") === 'MCQ') {
            this.setState(prevState => ({
                fields: [...prevState.fields, <MCQ id={this.MCQCount} addFormConfiguration={this.addFormConfiguration} />]
            }))
            this.MCQCount = this.MCQCount + 1
        }
        else if (ev.dataTransfer.getData("fieldID") === 'short_ans') {
            this.setState(prevState => ({
                fields: [...prevState.fields, <ShortAns id={this.ShortAnsCount} addFormConfiguration={this.addFormConfiguration} />]
            }))
            this.ShortAnsCount = this.ShortAnsCount + 1
        }
    }

    handlePublish = () => {
        //code to handle submit
        console.log("Fields :")
        console.log(this.formConfiguration)
    }


    render() {
        var allElements = []

        this.elements.forEach((el) => {
            allElements.push(
                <button key={el.name}
                    onDragStart={(e) => this.onDragStart(e, el.name)}
                    draggable
                >
                    {el.name}
                </button>
            );
        });

        return (
            <div style={{ display: 'flex', height: '100%', marginTop: "50px" }}>

                <div className="container-drag" style={{ width: '30%', background: 'skyblue' }}>

                    <h2 className="task-header">All Elements</h2>

                    <div className="elementList" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => { this.onDrop(e) }}>
                        {allElements}
                    </div>

                </div>

                <div style={{ width: '70%', background: 'orange' }}>

                    <h2 className="task-header">Form Elements</h2>

                    <ul >
                        {
                            this.state.fields.map((el, index) => {
                                return <li key={index}>{el}<hr></hr></li>;
                            })
                        }
                    </ul>

                    <div style={{border: "2px solid black", width: "500px", height: "30px", backgroundColor: "lightgray", padding: "10px"}} onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)}>
                        Drag Here
                    </div>

                    <button onClick={this.handlePublish}>Publish </button>
                </div>
            </div>
        );
    }
}