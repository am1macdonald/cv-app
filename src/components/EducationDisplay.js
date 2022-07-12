import React from "react";
import PropTypes from "prop-types";

function EducationDisplay(props) {
  const eduArray = props.education;

  const handleEdit = () => {
    console.log("edit");
  };
  const eduNodes = eduArray.map((edu) => {
    return (
      <li key={edu.id} className="list-group-item">
        <h5>{edu.titleOfStudy}</h5>

        <dl className="row">
          <dt className="col-sm-4">School Name:</dt>
          <dd className="col-sm-8">{edu.schoolName}</dd>
          <dt className="col-sm-4">Graduation Date:</dt>
          <dd className="col-sm-8">{edu.graduationDate}</dd>
          <dt className="col-sm-4">GPA:</dt>
          <dd className="col-sm-8">{edu.gpa}</dd>
        </dl>
        <div className="row">
          <input
            type="button"
            className="btn btn-secondary col-sm-2"
            value="Edit"
            onClick={handleEdit}
          />
          <span className="col-sm-auto"></span>
          <input
            type="button"
            className="btn btn-danger mr-2 col-sm-2"
            value="Delete"
            onClick={() => props.delete(edu.id)}
          />
        </div>
      </li>
    );
  });

  return (
    <div className="container-sm mb-5">
      <h4>Education:</h4>
      <ul className="list-group list-group-flush">{eduNodes}</ul>
      {!props.formActive && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={props.toggleAdder}
        >
          Add Education
        </button>
      )}
    </div>
  );
}

EducationDisplay.propTypes = {
  education: PropTypes.array,
  delete: PropTypes.func,
  toggleAdder: PropTypes.func,
  formActive: PropTypes.bool,
};

export default EducationDisplay;
