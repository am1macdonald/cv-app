import React from "react";
import PropTypes from "prop-types";

function EducationDisplay(props) {
  const eduArray = props.education;

  const handleEdit = () => {
    console.log("edit");
  };
  const eduNodes = eduArray.map((edu) => {
    return (
      <li key={edu.id}>
        <h3>{edu.schoolName}</h3>

        <div>
          <p>School Name: {edu.schoolName}</p>

          <p>Title of Study: {edu.titleOfStudy}</p>

          <p>Graduation Date: {edu.graduationDate}</p>

          <p>GPA: {edu.gpa}</p>
        </div>
        <input
          type="button"
          className="btn btn-danger"
          value="delete"
          onClick={() => props.delete(edu.id)}
        />
        <input
          type="button"
          className="btn btn-warning"
          value="edit"
          onClick={handleEdit}
        />
      </li>
    );
  });

  return (
    <div className="container-sm">
      <h2>Education:</h2>
      <ul>{eduNodes}</ul>
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
  formActive: PropTypes.bool
};

export default EducationDisplay;
