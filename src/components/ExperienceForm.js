import React from "react";
import { Component } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: {
        value: "",
        id: uniqid(),
      },
      positionTitle: {
        value: "",
        id: uniqid(),
      },
      duties: {
        value: "",
        id: uniqid(),
      },
      startDate: {
        value: "",
        id: uniqid(),
      },
      endDate: {
        value: "",
        id: uniqid(),
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.newExperience = this.newExperience.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onButtonClicked(this.newExperience());
    this.setState({
      companyName: {
        value: "",
        id: uniqid(),
      },
      positionTitle: {
        value: "",
        id: uniqid(),
      },
      duties: {
        value: "",
        id: uniqid(),
      },
      startDate: {
        value: "",
        id: uniqid(),
      },
      endDate: {
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

  newExperience() {
    return {
      companyName: this.state.companyName.value,
      positionTitle: this.state.positionTitle.value,
      duties: this.state.duties.value,
      startDate: this.state.startDate.value,
      endDate: this.state.endDate.value,
      id: uniqid(),
    };
  }

  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="company-name">Company Name: </label>
          <input
            type="text"
            name="companyName"
            id="company-name"
            value={this.state.companyName.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="position-title">Position Title: </label>
          <input
            type="text"
            name="positionTitle"
            id="position-title"
            value={this.state.positionTitle.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="duties">Duties: </label>
          <input
            type="text"
            name="duties"
            id="duties"
            value={this.state.duties.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="start-of-employment">Start of Employment: </label>
          <input
            type="date"
            name="startDate"
            id="start-of-employment"
            value={this.state.startDate.value}
            onChange={this.handleChange}
            max={new Date().toLocaleDateString("en-ca")}
          />
        </div>
        <div>
          <label htmlFor="end-of-employment">End of Employment: </label>
          <input
            type="date"
            name="endDate"
            id="end-of-employment"
            value={this.state.endDate.value}
            onChange={this.handleChange}
            max={new Date().toLocaleDateString("en-ca")}
          />
        </div>
        <button type="submit" onClick={this.handleClick}>
          Submit
        </button>
      </form>
    );
  }
}

ExperienceForm.propTypes = {
  onButtonClicked: PropTypes.func,
};

export default ExperienceForm;