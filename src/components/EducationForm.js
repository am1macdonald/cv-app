import React, { useState } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";

function EducationForm(props) {
  const [schoolName, setSchoolName] = useState(
    props.eduToEdit ? props.eduToEdit.schoolName : ""
  );
  const [titleOfStudy, setTitleOfStudy] = useState(
    props.eduToEdit ? props.eduToEdit.titleOfStudy : ""
  );
  const [graduationDate, setGraduationDate] = useState(
    props.eduToEdit ? props.eduToEdit.graduationDate : ""
  );
  const [gpa, setGpa] = useState(props.eduToEdit ? props.eduToEdit.gpa : "");

  function newSchool() {
    return {
      schoolName: schoolName,
      titleOfStudy: titleOfStudy,
      graduationDate: graduationDate,
      gpa: gpa,
      id: props.eduToEdit ? props.eduToEdit.id : uniqid(),
    };
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(newSchool())

    if (props.editItem) {
      props.updater(newSchool());
      props.toggleEditItem();
      return;
    }

    props.onButtonClicked(newSchool());
    props.closeForm();
  }

  return (
    <form className="container-sm mb-5">
      <div className="mb-3">
        <label htmlFor="school-name">School Name: </label>
        <input
          className="form-control"
          type="text"
          name="schoolName"
          id="school-name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title-of-study">Title of Studies: </label>
        <input
          className="form-control"
          type="text"
          name="titleOfStudy"
          id="title-of-study"
          value={titleOfStudy}
          onChange={(e) => setTitleOfStudy(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="graduationDate">Graduation Date: </label>
        <input
          className="form-control"
          type="date"
          name="graduationDate"
          id="graduationDate"
          value={graduationDate}
          onChange={(e) => setGraduationDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gpa">GPA: </label>
        <input
          className="form-control"
          type="text"
          name="gpa"
          id="gpa"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
        />
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-primary col-sm-2"
          onClick={handleClick}
        >
          {props.editItem ? "Update" : "Add"}
        </button>
        <span className="col-md-auto"></span>
        <button
          type="button"
          className="btn btn-secondary col-sm-2"
          onClick={props.editItem ? props.toggleEditItem : props.closeForm}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

EducationForm.propTypes = {
  onButtonClicked: PropTypes.func,
  closeForm: PropTypes.func,
  eduToEdit: PropTypes.object,
  editItem: PropTypes.bool,
  toggleEditItem: PropTypes.func,
  updater: PropTypes.func,
};

export default EducationForm;
