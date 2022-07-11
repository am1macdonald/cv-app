import React, { Component } from "react";
import "./app.css";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import InfoForm from "./components/InfoForm";
import InfoDisplay from "./components/InfoDisplay";
import ExperienceDisplay from "./components/ExperienceDisplay";
import uniqid from "uniqid";
import EducationDisplay from "./components/EducationDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        name: "Arse",
        email: "hole@mail.org",
        phoneNumber: "234.234.2344",
      },
      education: [
        {
          schoolName: "College",
          titleOfStudy: "Degree",
          graduationDate: "2015-02-01",
          gpa: "3.7",
          id: uniqid()
        },
      ],
      // format //
      /* {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: ""
      }*/ experience: [
        {
          companyName: "Place 1",
          positionTitle: "Jobby 1",
          duties: "a description of duties",
          startDate: "2020-01-01",
          endDate: "2021-01-01",
          id: uniqid(),
        },
      ],
    };

    this.updateInfo = this.updateInfo.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  updateInfo(obj) {
    this.setState({
      personalInfo: {
        name: obj.name,
        email: obj.email,
        phoneNumber: obj.phoneNumber,
      }
    });
  }

  addExperience(obj) {
    this.setState({
      experience: [...this.state.experience, obj],
    });
  }

  addEducation(obj) {
    this.setState({
      education: [...this.state.education, obj],
    });
  }

  render() {
    return (
      <div className="main">
        <h1>Resume Generator</h1>
        <InfoForm onButtonClicked={this.updateInfo} />
        <EducationForm onButtonClicked={this.addEducation} />
        <ExperienceForm onButtonClicked={this.addExperience} />
        <InfoDisplay personalInfo={this.state.personalInfo} />
        <ExperienceDisplay experiences={this.state.experience} />
        <EducationDisplay education={this.state.education} />
      </div>
    );
  }
}

export default App;
