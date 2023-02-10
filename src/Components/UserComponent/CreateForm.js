import React, { Component } from "react";
import MCQ from "../Elements/MCQ.js";
import ShortAns from "../Elements/ShortAns.js";
import Date from "../Elements/Date.js";
import Heading from "../Elements/Heading.js";
import FullName from "../Elements/FullName.js";
import Email from "../Elements/Email.js";
import LongAns from "../Elements/LongAns.js";
import Phone from "../Elements/Phone.js";
import Time from "../Elements/Time.js";
import "./CreateForm.css";
import formApi from '../API/FormData.js'


export default class CreateForm extends Component {
  state = {
    fields: [],
  };

  elements = [
    { name: "Heading" },
    { name: "FullName" },
    { name: "Email" },
    { name: "Date" },
    { name: "Time" },
    { name: "Phone" },
    { name: "MCQ" },
    { name: "short_ans" },
    { name: "LongAnswer" },
    //add more elements here
  ];

  //count for all elements
  MCQCount = 0;
  ShortAnsCount = 0;
  DateCount = 0;
  HeadingCount = 0;
  FullNameCount = 0;
  EmailCount = 0;
  LongAnsCount = 0;
  PhoneCount = 0;
  TimeCount = 0;

  //array to save form configuration
  formConfiguration = [];

  addFormConfiguration = (field) => {
    var objIndex = this.formConfiguration.findIndex(
      (obj) => obj.id === field.id
    );

    if (objIndex === -1) {
      this.formConfiguration.push(field);
    } else {
      this.formConfiguration[objIndex] = field;
    }
  };

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("fieldID", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev) => {
    if (ev.dataTransfer.getData("fieldID") === "MCQ") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <MCQ
            id={this.MCQCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.MCQCount = this.MCQCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "short_ans") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <ShortAns
            id={this.ShortAnsCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.ShortAnsCount = this.ShortAnsCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "Date") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <Date
            id={this.DateCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.DateCount = this.DateCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "Heading") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <Heading
            id={this.HeadingCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.HeadingCount = this.HeadingCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "FullName") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <FullName
            id={this.FullNameCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.FullNameCount = this.FullNameCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "Email") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <Email
            id={this.EmailCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.EmailCount = this.EmailCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "LongAnswer") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <LongAns
            id={this.LongAnsCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.LongAnsCount = this.LongAnsCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "Phone") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <Phone
            id={this.PhoneCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.PhoneCount = this.PhoneCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "Time") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <Time
            id={this.TimeCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.TimeCount = this.TimeCount + 1;
    }
  };

  handlePublish = async () => {
    //code to handle submit
    console.log("Fields :");
    console.log(this.formConfiguration);

    console.log("Fields :")
    console.log(this.formConfiguration)

    const querRes = await formApi.post('/saveform', { formConf: { formID: "2", fields: this.formConfiguration }, email: "abc" })

    console.log(querRes.data)
  };

  render() {
    var allElements = [];

    this.elements.forEach((el) => {
      allElements.push(
        <button
          className="elements-btn"
          key={el.name}
          onDragStart={(e) => this.onDragStart(e, el.name)}
          draggable
        >
          {el.name}
        </button>
      );
    });

    return (
      // root container
      <div className="container-root1">
        {/* left container */}
        <div className="container-drag">
          <div className="task-header">
            <h2>All Elements</h2>
          </div>

          <div
            className="elementList"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => {
              this.onDrop(e);
            }}
          >
            {allElements}
          </div>
        </div>

        {/* right container */}
        <div className="container-right" id="container-right">
          <div className="task-header">
            <h2>Form Elements</h2>
          </div>

          <ul>
            {this.state.fields.map((el, index) => {
              return (
                <li className="added-elements" key={index}>
                  {el}
                  <hr></hr>
                </li>
              );
            })}
          </ul>

          {/* Droppable Area */}
          <div
            className="droppable-area"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e)}
            id="target-div"
          >
            <div className="drag-text">Drag Here</div>
          </div>
          <div className="publish-btn-div">
            <button className="publish-btn" onClick={this.handlePublish}>
              Publish{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
