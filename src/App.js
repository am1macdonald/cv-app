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
      editing: false,
    };

    this.updateInfo = this.updateInfo.bind(this);
    this.toggleUpdateInfo = this.toggleUpdateInfo.bind(this);

    this.addEducation = this.addEducation.bind(this);
    this.toggleEducationForm = this.toggleEducationForm.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);

    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);

    this.toggleExperienceForm = this.toggleExperienceForm.bind(this);

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  updateInfo(obj) {
    if (this.state.editing) {
      return;
    }
    this.setState({
      personalInfo: {
        name: obj.name,
        email: obj.email,
        phoneNumber: obj.phoneNumber,
      },
    });
  }
  toggleUpdateInfo() {
    this.setState({
      updateActive: !this.state.updateActive,
      experienceFormActive: false,
      educationFormActive: false,
    });
  }
  addExperience(obj) {
    if (this.state.editing) {
      return;
    }
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
    if (this.state.editing) {
      return;
    }
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

  editEducation(obj) {
    console.log(obj)
    this.setState({
      education: this.state.education.map((edu) => {
        if (edu.id === obj.id) {
          return obj;
        }
        return edu;
      })
    });
  }
  toggleEducationForm() {
    if (this.state.editing) {
      return;
    }
    this.setState({
      updateActive: false,
      experienceFormActive: false,
      educationFormActive: !this.state.educationFormActive,
    });
  }
  toggleEditing() {
    this.setState({
      editing: !this.state.editing,
    });

    console.log("editing: ", this.state.editing);
  }
  render() {
    return (
      <div className="main">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-light">
            <span className="navbar-brand mx-auto display-1">
              Resume Generator
            </span>
          </nav>
        </div>
        <InfoDisplay
          personalInfo={this.state.personalInfo}
          toggleUpdateInfo={this.toggleUpdateInfo}
          formActive={this.state.updateActive}
        />
        {this.state.updateActive && (
          <InfoForm
            onButtonClicked={this.updateInfo}
            toggleUpdateInfo={this.toggleUpdateInfo}
            personalInfo={this.state.personalInfo}
          />
        )}
        <EducationDisplay
          education={this.state.education}
          delete={this.deleteEducation}
          toggleAdder={this.toggleEducationForm}
          formActive={this.state.educationFormActive}
          editing={this.state.editing}
          toggleEditing={this.toggleEditing}
          updater={this.editEducation}
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
          toggleEditing={this.toggleEditing}
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
