import React, { Component } from "react";
import PropTypes from 'prop-types'

class InfoDisplay extends Component {
constructor(props){

  super(props);
}

render() {
  return (
    <div className="container-sm">
      <h2>Contact Information:</h2>
      <div>
        <p>Name: {this.props.personalInfo.name}</p>
        <p>Email: {this.props.personalInfo.email}</p>
        <p>Phone Number: {this.props.personalInfo.phoneNumber}</p>
      </div>
    </div>
  )
}

}

InfoDisplay.propTypes = {
  personalInfo: PropTypes.object
}

export default InfoDisplay