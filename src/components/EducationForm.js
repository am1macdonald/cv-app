import React, { Component } from "react";
import uniqid from "uniqid";
import PropTypes from 'prop-types'

class EducationForm extends Component {
  constructor(props) {
    super(props);

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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.newSchool = this.newSchool.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onButtonClicked(this.newSchool());
    this.setState({
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
    });
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
      id: uniqid(),
    };
  }

  render() {
    return (
      <form className="container-sm">
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
          <label htmlFor="graduationDate">Date of Studies: </label>
          <input
            className="form-control"
            type="text"
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
        <button type="button" className="btn btn-primary" onClick={this.handleClick}>
          Submit
        </button>
      </form>
    );
  }
}

EducationForm.propTypes = {
  onButtonClicked: PropTypes.func
}

export default EducationForm;
