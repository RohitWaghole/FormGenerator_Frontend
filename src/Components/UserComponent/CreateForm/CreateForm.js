import React, { Component } from "react";
import MCQ from "../Elements/MCQ.js";
import ShortAns from "../Elements/ShortAns.js";
import Date from "../Elements/Date.js";
import Heading from "../Elements/Heading.js";
import Email from "../Elements/Email.js";
import LongAns from "../Elements/LongAns.js";
import Phone from "../Elements/Phone.js";
import Time from "../Elements/Time.js";
import formApi from "../../API/FormData.js";
import FileUpload from "../Elements/FileUpload.js";
import Address from "../Elements/Address.js";
import Checkbox from "../Elements/Checkbox.js";
import "./CreateForm.css";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      name: "",
      formConfiguration: []

    };

    this.getFormData();
  }


  elements = [
    { name: "Email" },
    { name: "Date" },
    { name: "Time" },
    { name: "Address" },
    { name: "Phone" },
    { name: "MCQ" },
    { name: "CheckboxAnswer" },
    { name: "short_ans" },
    { name: "LongAnswer" },
    { name: "FileUpload" }
  ];

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


  getFormData = async () => {
    if (this.props.formID) {
      const apiRes = await formApi.get('/getFormByID', { params: { formID: this.props.formID, email: this.props.email } })

      if (apiRes.data.status === false) return alert('Something went wrong!');

      this.addFormName(apiRes.data.data.formName)

      apiRes.data.data.fields.map((form) => {
        if (form.type === 'MCQ') {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <MCQ id={form.id} label={form.label} options={form.options} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.MCQCount = this.MCQCount + 1;
        }

        else if (form.type === "short_ans") {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <ShortAns id={form.id} label={form.label} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.ShortAnsCount = this.ShortAnsCount + 1;
        }


        else if (form.type === "Date") {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <Date id={form.id} label={form.label} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.DateCount = this.DateCount + 1;
        }

        else if (form.type === "Email") {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <Email id={form.id} label={form.label} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.EmailCount = this.EmailCount + 1;
        }

        else if (form.type === "LongAnswer") {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <LongAns id={form.id} label={form.label} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.LongAnsCount = this.LongAnsCount + 1;
        }

        else if (form.type === "Phone") {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <Phone id={form.id} label={form.label} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.PhoneCount = this.PhoneCount + 1;
        }


        else if (form.type === "Time") {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <Time id={form.id} label={form.label} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.TimeCount = this.TimeCount + 1;
        }

        else if (form.type === "Address") {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <Address id={form.id} label={form.label} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.AddressCount = this.AddressCount + 1;
        }


        else if (form.type === "FileUpload") {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <FileUpload id={form.id} label={form.label} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.FileUploadCount = this.FileUploadCount + 1;
        }

        else if (form.type === "CheckboxAnswer") {
          this.setState((prevState) => ({
            fields: [
              ...prevState.fields,
              <Checkbox id={form.id} label={form.label} options={form.options} addFormConfiguration={this.addFormConfiguration} />,
            ],
          }));

          this.CheckBoxCount = this.CheckBoxCount + 1;
        }
      })

    }
  }

  addFormConfiguration = (field) => {
    var objIndex = this.state.formConfiguration.findIndex(
      (obj) => obj.id === field.id
    );

    if (objIndex === -1) {
      this.state.formConfiguration.push(field);
    } else {
      this.state.formConfiguration[objIndex] = field;
    }


  };

  addFormName = (name) => {
    this.setState({ name: name });
  };



  handlePublish = async () => {
    console.log("Fields :");
    console.log(this.state.formConfiguration);

    const querRes = await formApi.post('/saveform', { formConf: { formID: this.props.formID, formName: this.state.name, fields: this.state.formConfiguration }, email: this.props.email })

    if (querRes.data.status === true) {
      this.props.navigate(`/${this.props.email}/publish`, { state: { formID: querRes.data.data.formID } })
    }

    else {
      alert(querRes.data.massage)
    }


  };

  handlePreview = async () => {
    this.props.navigate(`/${this.props.email}/preview`, { state: { form: this.state.formConfiguration, email: this.props.email } });
  };


  //Drag and drop handlers
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
          <MCQ id={`MCQ_${this.MCQCount}`} label={""} options={['otpion 1']} addFormConfiguration={this.addFormConfiguration} />,
        ],
      }));

      this.MCQCount = this.MCQCount + 1;
    } else if (ev.dataTransfer.getData("fieldID") === "short_ans") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <ShortAns
            id={`ShortAns_${this.ShortAnsCount}`} label={""}
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
            id={`Date_${this.DateCount}`} label={""}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.DateCount = this.DateCount + 1;

    } else if (ev.dataTransfer.getData("fieldID") === "Email") {
      this.setState((prevState) => ({
        fields: [
          ...prevState.fields,
          <Email
            id={`Email_${this.EmailCount}`} label={""}
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
            id={`LongAns_${this.LongAnsCount}`} label={""}
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
            id={`Phone_${this.PhoneCount}`} label={""}
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
            id={`Time_${this.TimeCount}`} label={""}
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
            id={`FileUpload_${this.FileUploadCount}`} label={""}
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
            id={`Address_${this.AddressCount}`} label={""}
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
            id={`Checkbox_${this.CheckBoxCount}`} label={""} options={['checkbox 1']}
            addFormConfiguration={this.addFormConfiguration}
          />,
        ],
      }));
      this.CheckBoxCount = this.CheckBoxCount + 1;
    }
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
      <div>
        <div className="container-root1">
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
            <Heading name={this.state.name} addFormName={this.addFormName} />

            <ul>
              {
                this.state.fields.map((el, index) => {
                  return <li className="added-elements" style={{ marginBottom: "20px" }} key={index}>{el}</li>
                })
              }
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
                <button className="publish-btn" onClick={this.handlePreview}>
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
