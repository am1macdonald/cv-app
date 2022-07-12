import React from "react";
import PropTypes from "prop-types";

function ExperienceDisplay(props) {
  const experienceArray = props.experiences;

  const handleEdit = () => {
    return 
  }

  const experienceNodes = experienceArray.map((exp) => {
    return (
      <li key={exp.id}>
        <h3>{exp.companyName}</h3>

        <div>
          <p>Position: {exp.positionTitle}</p>

          <p>Description of Duties: {exp.duties}</p>

          <p>Start Date: {exp.startDate}</p>

          <p>End Date: {exp.endDate}</p>
        </div>
        <input type="button" value="delete" onClick={() => props.delete(exp.id)}/>
        <input type="button" value="edit" onClick={handleEdit}/>
      </li>
    );
  });

  return (
    <div>
      <h2>Experience:</h2>
      <ul>{experienceNodes}</ul>
    </div>
  );
}

ExperienceDisplay.propTypes = {
  experiences: PropTypes.array,
  delete: PropTypes.func
};



export default ExperienceDisplay;
