import React, { Component } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";
// import bootstrap from 'bootstrap'

class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: "",
        id: uniqid(),
      },
      email: {
        value: "",
        id: uniqid(),
      },
      phoneNumber: {
        value: "",
        id: uniqid(),
      },
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newInfo = this.newInfo.bind(this);
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

  handleClick(e) {
    e.preventDefault();
    this.props.onButtonClicked(this.newInfo());
    this.setState({
      name: {
        value: "",
        id: uniqid(),
      },
      email: {
        value: "",
        id: uniqid(),
      },
      phoneNumber: {
        value: "",
        id: uniqid(),
      },
    });
    this.props.toggleUpdater();
  }

  newInfo() {
    return {
      name: this.state.name.value,
      email: this.state.email.value,
      phoneNumber: this.state.phoneNumber.value,
    };
  }

  render() {
    return (
      <form className="container-sm mb-5">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={this.state.name.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={this.state.email.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phone-number">
            Phone Number
          </label>
          <input
            className="form-control"
            type="text"
            name="phoneNumber"
            id="phone-number"
            value={this.state.phoneNumber.value}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={this.handleClick}
        >
          Update
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.toggleUpdater}
        >
          Close
        </button>
      </form>
    );
  }
}

InfoForm.propTypes = {
  onButtonClicked: PropTypes.func,
  toggleUpdater: PropTypes.func,
};

export default InfoForm;
