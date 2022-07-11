import React, { Component } from "react";
import uniqid from "uniqid";

class InfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
        name: {
          value: '',
          id: uniqid()
        },
        email: {
          value: '',
          id: uniqid()
        },
        phoneNumber: {
          value: '',
          id: uniqid()
        }
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: {
        value: e.target.value,
        id: this.state[e.target.name].id
      }
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
          <input type="text" name="name" id="name" value={this.state.name.value} onChange={this.handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={this.state.email.value} onChange={this.handleChange}/>
        </div>
        <div>
          <label htmlFor="phone-number">Phone Number: </label>
          <input type="text" name="phoneNumber" id="phone-number" value={this.state.phoneNumber.value} onChange={this.handleChange}/>
        </div>
        <button type="submit" onClick={this.handleClick}>Submit</button>

      </form>
    )
  }
}

export default InfoForm