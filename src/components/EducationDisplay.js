import React from "react";
import PropTypes from "prop-types";

function EducationDisplay(props) {
  const eduArray = props.education;

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
      </li>
    );
  });

  return (
    <div>
      <h2>Education:</h2>
      <ul>{eduNodes}</ul>
    </div>
  );
}

EducationDisplay.propTypes = {
  education: PropTypes.array,
};

export default EducationDisplay;
