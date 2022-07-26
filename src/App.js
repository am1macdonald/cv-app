import React, { useState } from "react";
import uniqid from "uniqid";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import InfoForm from "./components/InfoForm";
import InfoDisplay from "./components/InfoDisplay";
import ExperienceDisplay from "./components/ExperienceDisplay";
import EducationDisplay from "./components/EducationDisplay";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Joe Dobson",
    email: "joeDobson@mail.org",
    phoneNumber: "123.456.7890",
  });

  const [education, setEducation] = useState([
    {
      schoolName: "College",
      titleOfStudy: "Degree",
      graduationDate: "2015-02-01",
      gpa: "3.7",
      id: uniqid(),
    },
  ]);
  const [experience, setExperience] = useState([
    {
      companyName: "The Box Company",
      positionTitle: "Supervisor",
      duties: "Supervise box making operations",
      startDate: "2020-08-13",
      endDate: "2021-4-11",
      id: uniqid(),
    },
  ]);

  const [updatingInfo, setUpdatingInfo] = useState(false);

  const [updatingExperience, setUpdatingExperience] = useState(false);

  const [updatingEducation, setUpdatingEducation] = useState(false);

  const [editing, setEditing] = useState(false);

  const [formLockout, setFormLockout] = useState(false);

  const updateInfo = ({ fullName, email, phoneNumber }) => {
    setPersonalInfo({
      fullName,
      email,
      phoneNumber,
    });
  };

  const addExperience = (obj) => {
    setExperience([...experience, obj]);
  };

  const deleteExperience = (key) => {
    setExperience(
      experience.filter((exp) => {
        return exp.id !== key;
      })
    );
  };

  const editExperience = (obj) => {
    setExperience(
      experience.map((exp) => {
        if (exp.id === obj.id) {
          return obj;
        }
        return exp;
      })
    );
  };

  const addEducation = (obj) => {
    setEducation([...education, obj]);
  };

  const deleteEducation = (key) => {
    setEducation(
      education.filter((edu) => {
        return edu.id !== key;
      })
    );
  };

  const editEducation = (obj) => {
    setEducation(
      education.map((edu) => {
        if (edu.id === obj.id) {
          return obj;
        }
        return edu;
      })
    );
  };

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
        personalInfo={personalInfo}
        openEditor={() => {
          if (!formLockout) {
            setUpdatingInfo(true);
            setFormLockout(true);
          }
        }}
        formActive={updatingInfo}
      />
      {updatingInfo && (
        <InfoForm
          onButtonClicked={updateInfo}
          closeEditor={() => {
            setUpdatingInfo(false);
            setFormLockout(false);
          }}
          personalInfo={personalInfo}
        />
      )}
      <EducationDisplay
        education={education}
        deleteItem={deleteEducation}
        openForm={() => {
          if (!formLockout) {
            setUpdatingEducation(true);
            setFormLockout(true);
          }
        }}
        formActive={updatingEducation}
        editing={editing}
        startEditing={() => {
          if (!formLockout) {
            setEditing(true);
            setFormLockout(true);
          }
        }}
        endEditing={() => {
          setEditing(false);
          setFormLockout(false);
        }}
        updater={editEducation}
        formLockout={formLockout}
      />
      {updatingEducation && (
        <EducationForm
          onButtonClicked={addEducation}
          closeForm={() => {
            {
              setUpdatingEducation(false);
              setFormLockout(false);
            }
          }}
        />
      )}
      <ExperienceDisplay
        experiences={experience}
        deleteItem={deleteExperience}
        openForm={() => setUpdatingExperience(true)}
        formActive={updatingExperience}
        editing={editing}
        toggleEditing={() => setEditing(!editing)}
        updater={editExperience}
      />
      {updatingExperience && (
        <ExperienceForm
          onButtonClicked={addExperience}
          closeForm={() => setUpdatingExperience(false)}
        />
      )}
    </div>
  );
}

export default App;
