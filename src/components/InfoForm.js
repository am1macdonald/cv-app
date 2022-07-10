import React, { Component } from "react";

class InfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalInfo : {
        name: "",
        email: "",
        phoneNumber: ""
      }
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      
    })
  }
  handleClick(e) {
    e.preventDefault()
    console.log(this.props);
  }
  render() {

    return (
      <form action="">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={this.handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onChange={this.handleChange}/>
        </div>
        <div>
          <label htmlFor="phone-number">Phone Number: </label>
          <input type="text" name="phone-number" id="phone-number" onChange={this.handleChange}/>
        </div>
        <button type="submit" onClick={this.handleClick}>Submit</button>

      </form>
    )
  }
}

export default InfoForm