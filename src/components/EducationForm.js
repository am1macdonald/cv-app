import React, { Component } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";

class EducationForm extends Component {
  constructor(props) {
    super(props);

    if (this.props.eduToEdit) {
      this.state = {
        schoolName: {
          value: this.props.eduToEdit.schoolName,
          id: uniqid(),
        },
        titleOfStudy: {
          value: this.props.eduToEdit.titleOfStudy,
          id: uniqid(),
        },
        graduationDate: {
          value: this.props.eduToEdit.graduationDate,
          id: uniqid(),
        },
        gpa: {
          value: this.props.eduToEdit.gpa,
          id: uniqid(),
        },
        id: {
          value: this.props.eduToEdit.id,
        },
      };
    } else {
      this.state = {
        schoolName: {
          value: "",
          id: uniqid(),
        },
        titleOfStudy: {
          value: "",
          id: uniqid(),
        },
        graduationDate: {
          value: "",
          id: uniqid(),
        },
        gpa: {
          value: "",
          id: uniqid(),
        },
      };
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.newSchool = this.newSchool.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.editItem) {
      this.props.updater(this.newSchool());

      this.props.toggleEditItem();
      return;
    }
    this.props.onButtonClicked(this.newSchool());

    this.props.toggleAdder();
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: {
        value: e.target.value,
        id: this.state[e.target.name].id,
      },
    });
  }

  newSchool() {
    return {
      schoolName: this.state.schoolName.value,
      titleOfStudy: this.state.titleOfStudy.value,
      graduationDate: this.state.graduationDate.value,
      gpa: this.state.gpa.value,
      id: this.state.id ? this.state.id.value : uniqid(),
    };
  }

  render() {
    return (
      <form className="container-sm mb-5">
        <div className="mb-3">
          <label htmlFor="school-name">School Name: </label>
          <input
            className="form-control"
            type="text"
            name="schoolName"
            id="school-name"
            value={this.state.schoolName.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title-of-study">Title of Studies: </label>
          <input
            className="form-control"
            type="text"
            name="titleOfStudy"
            id="title-of-study"
            value={this.state.titleOfStudy.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="graduationDate">Graduation Date: </label>
          <input
            className="form-control"
            type="date"
            name="graduationDate"
            id="graduationDate"
            value={this.state.graduationDate.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gpa">GPA: </label>
          <input
            className="form-control"
            type="text"
            name="gpa"
            id="gpa"
            value={this.state.gpa.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-primary col-sm-2"
            onClick={this.handleClick}
          >
            {this.props.editItem ? "Update" : "Add"}
          </button>
          <span className="col-md-auto"></span>
          <button
            type="button"
            className="btn btn-secondary col-sm-2"
            onClick={
              this.props.editItem
                ? this.props.toggleEditItem
                : this.props.toggleAdder
            }
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

EducationForm.propTypes = {
  onButtonClicked: PropTypes.func,
  toggleAdder: PropTypes.func,
  eduToEdit: PropTypes.object,
  editItem: PropTypes.bool,
  toggleEditItem: PropTypes.func,
  updater: PropTypes.func,
};

export default EducationForm;
