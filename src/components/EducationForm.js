import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <form action="">
      <div>
        <label htmlFor="school-name">School Name: </label>
        <input type="text" name="schoolName" id="school-name" />
      </div>
      <div>
        <label htmlFor="title-of-study">Title of Studies: </label>
        <input type="text" name="title-of-study" id="title-of-study" />
      </div>
      <div>
        <label htmlFor="date-of-study">Date of Studies: </label>
        <input type="text" name="date-of-study" id="date-of-study" />
      </div>
        <button type="submit" onClick={this.handleClick}>Submit</button>

    </form>
    )
  }


}

export default EducationForm