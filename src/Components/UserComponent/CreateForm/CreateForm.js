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
import formApi from "../../API/FormData.js";
import Navbar from "../Navbar/Navbar.js";
import FileUpload from "../Elements/FileUpload.js";
import Address from "../Elements/Address.js";
import Checkbox from "../Elements/Checkbox.js";

class CreateForm extends Component {
  state = {
    fields: [],
    formName: "",
  };

  elements = [
    { name: "FullName" },
    { name: "Email" },
    { name: "Date" },
    { name: "Time" },
    { name: "Address" },
    { name: "Phone" },
    { name: "MCQ" },
    { name: "CheckboxAnswer" },
    { name: "short_ans" },
    { name: "LongAnswer" },
    { name: "FileUpload" },
    //add more elements here
  ];

  //array to save form configuration
  formConfiguration = [];

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
  FileUploadCount = 0;
  AddressCount = 0;
  CheckBoxCount = 0;

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

  addFormName = (name) => {
    this.setState({ name: name });
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
    } else if (ev.dataTransfer.getData("fieldID") === "FileUpload") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <FileUpload
            id={this.FileUploadCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.FileUploadCount = this.FileUploadCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "Address") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <Address
            id={this.AddressCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.AddressCount = this.AddressCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "CheckboxAnswer") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <Checkbox
            id={this.CheckBoxCount}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.CheckBoxCount = this.CheckBoxCount + 1;
    }
  };

  handlePublish = async () => {
    //code to handle submit

    console.log("Fields :");
    console.log(this.formConfiguration);

    const querRes = await formApi.post("/saveform", {
      formConf: {
        fromName: this.state.name,
        formID: "2",
        fields: this.formConfiguration,
      },
      email: this.props.email,
    });

    console.log(querRes.data);
  };

  handlePreview = async () => {
    this.props.navigate("/user/preview", { state: this.formConfiguration });
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
      /*eslint no-unused-expressions: "error"*/
      <div>
        <Navbar />
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
              <h2>Form</h2>
            </div>

            <Heading addFormName={this.addFormName} />
            <ul className="bg-color-white">
              {this.state.fields.map((el, index) => (
                <li className="added-elements" key={index}>
                  {el}
                </li>
              ))}
            </ul>

            <div
              className="droppable-area"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e)}
              id="target-div"
            >
              <div className="drag-text">Drag Here</div>
            </div>
            <div className="publish-preview-btn">
              <div className="publish-btn-div">
                <button className="publish-btn" onClick={this.handlePublish}>
                  Publish{" "}
                </button>
              </div>

              <div className="publish-btn-div">
                <button className="button-4" onClick={this.handlePreview}>
                  Preview{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateForm;
