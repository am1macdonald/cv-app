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
      education: [] 
      // format //
      /* {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: ""
      }*/,
      experience: []
      // format //
      /* {
        companyName: "",
        positionTitle: "",
        duties: "",
        datesOfEmployment: ""
      }*/,
    }

    this.updateInfo = this.updateInfo.bind(this);
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

  }

  newExperience(companyName, positionTitle) {
    return {
      companyName: `${companyName}`,
      positionTitle: `${positionTitle}`,
      duties: "",
      datesOfEmployment: ""
    }
  }

  render() {
    return (
      <div className="main">
        <h1>Resume Generator</h1>
        <InfoForm onButtonClicked={this.updateInfo}/>
        <EducationForm />
        <ExperienceForm />
      </div>
    )
  }
}

export default App;
