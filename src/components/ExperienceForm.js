import React from "react";
import { Component } from "react";
import uniqid from "uniqid"
import PropTypes from 'prop-types'

class ExperienceForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companyName: {
        value: "",
        id: uniqid()
      },
      positionTitle: {
        value: "",
        id: uniqid()
      },
      duties: {
        value: "",
        id: uniqid()
      },
      dateOfEmployment: {
        value: "",
        id: uniqid()
      },

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.newExperience = this.newExperience.bind(this)
  }

  handleClick(e) {

    e.preventDefault()
    console.log(this.state  )
    // console.log(this.newExperience());
    // console.log(this.props.onButtonClicked(this.newExperience()))
    // run callback
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  newExperience() {
    return {
      companyName: this.state.companyName.value,
      positionTitle: this.state.positionTitle.value,
      duties: this.state.duties.value,
      dateOfEmployment: this.state.dateOfEmployment.value
    }
  }

  render() {
    return (
      <form action="">
      <div>
        <label htmlFor="company-name">Company Name: </label>
        <input type="text" name="companyName" id="company-name" value={this.state.companyName.value} onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="position-title">Position Title: </label>
        <input type="text" name="positionTitle" id="position-title" value={this.state.positionTitle.value} onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="duties">Duties: </label>
        <input type="text" name="duties" id="duties" value={this.state.duties.value} onChange={this.handleChange} />
      </div>
      <div>
        <label htmlFor="date-of-employment">Date of Employment: </label>
        <input type="date" name="dateOfEmployment" id="date-of-employment" value={this.state.dateOfEmployment.value} onChange={this.handleChange} max={new Date().toLocaleDateString('en-ca')} />
      </div>
        <button type="submit" onClick={this.handleClick}>Submit</button>

    </form>
    )
  }
}

ExperienceForm.propTypes = {
  onButtonClicked: PropTypes.func
}

export default ExperienceForm