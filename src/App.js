import React, { Component } from "react";
import uniqid from "uniqid";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import InfoForm from "./components/InfoForm";
import InfoDisplay from "./components/InfoDisplay";
import ExperienceDisplay from "./components/ExperienceDisplay";
import EducationDisplay from "./components/EducationDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        name: "Joe",
        email: "joe@mail.org",
        phoneNumber: "234.234.2344",
      },
      education: [
        {
          schoolName: "College",
          titleOfStudy: "Degree",
          graduationDate: "2015-02-01",
          gpa: "3.7",
          id: uniqid(),
        },
      ],
      experience: [
        {
          companyName: "Place 1",
          positionTitle: "Jobby 1",
          duties: "a description of duties",
          startDate: "2020-01-01",
          endDate: "2021-01-01",
          id: uniqid(),
        },
      ],
      updateActive: false,
      experienceFormActive: false,
      educationFormActive: false,
    };

    this.updateInfo = this.updateInfo.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.toggleUpdater = this.toggleUpdater.bind(this);
    this.toggleExperienceForm = this.toggleExperienceForm.bind(this);
    this.toggleEducationForm = this.toggleEducationForm.bind(this);
  }

  updateInfo(obj) {
    this.setState({
      personalInfo: {
        name: obj.name,
        email: obj.email,
        phoneNumber: obj.phoneNumber,
      },
    });
  }
  toggleUpdater() {
    this.setState({
      updateActive: !this.state.updateActive,
      experienceFormActive: false,
      educationFormActive: false,
    });
  }

  addExperience(obj) {
    this.setState({
      experience: [...this.state.experience, obj],
    });
  }
  deleteExperience(key) {
    this.setState({
      experience: this.state.experience.filter((exp) => {
        return exp.id !== key;
      }),
    });
  }
  toggleExperienceForm() {
    this.setState({
      updateActive: false,
      experienceFormActive: !this.state.experienceFormActive,
      educationFormActive: false,
    });
  }

  addEducation(obj) {
    this.setState({
      education: [...this.state.education, obj],
    });
  }
  deleteEducation(key) {
    this.setState({
      education: this.state.education.filter((edu) => {
        return edu.id !== key;
      }),
    });
  }
  toggleEducationForm() {
    this.setState({
      updateActive: false,
      experienceFormActive: false,
      educationFormActive: !this.state.educationFormActive,
    });
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-light">
            <span className="navbar-brand mx-auto h1">Resume Generator</span>
          </nav>
        </div>
        <InfoDisplay
          personalInfo={this.state.personalInfo}
          toggleUpdater={this.toggleUpdater}
          formActive={this.state.updateActive}
        />
        {this.state.updateActive && (
          <InfoForm
            onButtonClicked={this.updateInfo}
            toggleUpdater={this.toggleUpdater}
          />
        )}
        <EducationDisplay
          education={this.state.education}
          delete={this.deleteEducation}
          toggleAdder={this.toggleEducationForm}
          formActive={this.state.educationFormActive}
        />
        {this.state.educationFormActive && (
          <EducationForm
            onButtonClicked={this.addEducation}
            toggleAdder={this.toggleEducationForm}
          />
        )}
        <ExperienceDisplay
          experiences={this.state.experience}
          delete={this.deleteExperience}
          toggleAdder={this.toggleExperienceForm}
          formActive={this.state.experienceFormActive}
        />
        {this.state.experienceFormActive && (
          <ExperienceForm
            onButtonClicked={this.addExperience}
            toggleAdder={this.toggleExperienceForm}
          />
        )}
      </div>
    );
  }
}

export default App;
