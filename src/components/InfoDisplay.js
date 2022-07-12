import React, { Component } from "react";
import PropTypes from "prop-types";

class InfoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
    };
  }

  toggleUpdating() {
    this.setState({
      updating: !this.state.updating,
    });
  }

  render() {
    return (
      <div className="container-sm">
        <h4>Contact Information:</h4>
        <div>
          <p>Name: {this.props.personalInfo.name}</p>
          <p>Email: {this.props.personalInfo.email}</p>
          <p>Phone Number: {this.props.personalInfo.phoneNumber}</p>
        </div>
        {!this.props.formActive && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              this.props.toggleUpdater();
              this.toggleUpdating();
            }}
          >
            Edit
          </button>
        )}
      </div>
    );
  }
}

InfoDisplay.propTypes = {
  personalInfo: PropTypes.object,
  toggleUpdater: PropTypes.func,
  formActive: PropTypes.bool,
};

export default InfoDisplay;
