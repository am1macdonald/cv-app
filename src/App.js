import React, { Component } from 'react';
import './app.css';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import InfoForm from './components/InfoForm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalInfo : {
        name: "",
        email: "",
        phoneNumber: ""
      },
      education: {} 
      // format //
      /* {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: ""
      }*/,
      experience: {}
      // format //
      /* {
        companyName: "",
        positionTitle: "",
        duties: "",
        datesOfEmployment: ""
      }*/,
    }

    this.updateInfo = this.updateInfo.bind(this);
    this.addExperience = this.addExperience.bind(this)
  }

  updateInfo(name, email, phone) {
    this.setState({
      personalInfo : {
        name: name,
        email: email,
        phoneNumber: phone
      },
      education: this.state.education,
      experience: this.state.experience
    });
  }
  newSchool() {
    return{
      
    }

  }

  addExperience(obj) {
    console.log(obj)
    this.setState(
      {
        experience: this.experience
      }
    )
  }


  render() {
    return (
      <div className="main">
        <h1>Resume Generator</h1>
        <InfoForm onButtonClicked={this.updateInfo}/>
        <EducationForm />
        <ExperienceForm onButtonClicked={this.addExperience}/>
      </div>
    )
  }
}

export default App;
