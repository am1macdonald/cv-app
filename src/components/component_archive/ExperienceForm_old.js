import React from "react";
import { Component } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    if (this.props.expToEdit) {
      this.state = {
        companyName: {
          value: this.props.expToEdit.companyName,
          id: uniqid(),
        },
        positionTitle: {
          value: this.props.expToEdit.positionTitle,
          id: uniqid(),
        },
        duties: {
          value: this.props.expToEdit.duties,
          id: uniqid(),
        },
        startDate: {
          value: this.props.expToEdit.startDate,
          id: uniqid(),
        },
        endDate: {
          value: this.props.expToEdit.endDate,
          id: uniqid(),
        },
        id: {
          value: this.props.expToEdit.id,
        },
      };
    } else {
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
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.newExperience = this.newExperience.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.editItem) {
      this.props.updater(this.newExperience());
      this.props.toggleEditItem();
      return;
    }

    this.props.onButtonClicked(this.newExperience());
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

  newExperience() {
    return {
      companyName: this.state.companyName.value,
      positionTitle: this.state.positionTitle.value,
      duties: this.state.duties.value,
      startDate: this.state.startDate.value,
      endDate: this.state.endDate.value,
      id: this.state.id ? this.state.id.value : uniqid(),
    };
  }

  render() {
    return (
      <form className="container-sm mb-1">
        <div className="mb-3">
          <label htmlFor="company-name">Company Name: </label>
          <input
            className="form-control"
            type="text"
            name="companyName"
            id="company-name"
            value={this.state.companyName.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position-title">Position Title: </label>
          <input
            className="form-control"
            type="text"
            name="positionTitle"
            id="position-title"
            value={this.state.positionTitle.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duties">Duties: </label>
          <input
            className="form-control"
            type="text-area"
            name="duties"
            id="duties"
            value={this.state.duties.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="start-of-employment">Start of Employment: </label>
          <input
            className="form-control"
            type="date"
            name="startDate"
            id="start-of-employment"
            value={this.state.startDate.value}
            onChange={this.handleChange}
            max={new Date().toLocaleDateString("en-ca")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="end-of-employment">End of Employment: </label>
          <input
            className="form-control"
            type="date"
            name="endDate"
            id="end-of-employment"
            value={this.state.endDate.value}
            onChange={this.handleChange}
            max={new Date().toLocaleDateString("en-ca")}
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

ExperienceForm.propTypes = {
  onButtonClicked: PropTypes.func,
  toggleAdder: PropTypes.func,
  expToEdit: PropTypes.object,
  editItem: PropTypes.bool,
  toggleEditItem: PropTypes.func,
  updater: PropTypes.func,
};

export default ExperienceForm;
