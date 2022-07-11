import React, { Component } from 'react';
import './app.css';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import InfoForm from './components/InfoForm';
import InfoDisplay from './components/InfoDisplay'
import ExperienceDisplay from './components/ExperienceDisplay';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalInfo : {
        name: "Arse",
        email: "hole@mail.org",
        phoneNumber: "234.234.2344"
      },
      education: []
      // format //
      /* {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: ""
      }*/,
      experience: [
        {
          companyName: "Place 1",
          positionTitle: "Jobby 1",
          duties: "a description of duties",
          startDate: "2020-01-01",
          endDate: "2021-01-01",
        }
      ]
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
    this.setState({
      experience: [...this.state.experience, obj]
    })
    localStorage.setItem('state', this.state)
  }


  render() {
    return (
      <div className="main">
        <h1>Resume Generator</h1>
        <InfoForm onButtonClicked={this.updateInfo}/>
        <EducationForm />
        <ExperienceForm onButtonClicked={this.addExperience}/>
        <InfoDisplay personalInfo={this.state.personalInfo} />
        <ExperienceDisplay experiences={this.state.experience} />
      </div>
    )
  }
}

export default App;
