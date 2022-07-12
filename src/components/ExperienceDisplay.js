import React from "react";
import PropTypes from "prop-types";

function ExperienceDisplay(props) {
  const experienceArray = props.experiences;

  const handleEdit = () => {
    return;
  };

  const experienceNodes = experienceArray.map((exp) => {
    return (
      <li key={exp.id}>
        <h5>{exp.positionTitle}</h5>

        <dl className="row">
          <dt className="col-sm-4">Company:</dt>
          <dd className="col-sm-8">{exp.companyName}</dd>
          <dt className="col-sm-4">Description of Duties:</dt>
          <dd className="col-sm-8">{exp.duties}</dd>
          <dt className="col-sm-4">Start date:</dt>
          <dd className="col-sm-8">{exp.startDate}</dd>
          <dt className="col-sm-4">End date:</dt>
          <dd className="col-sm-8">{exp.endDate}</dd>
        </dl>
        <div className="row">
          <input
            type="button"
            className="btn btn-danger col-sm-2"
            value="Delete"
            onClick={() => props.delete(exp.id)}
          />
          <span className="col-sm-auto"></span>
          <input
            type="button"
            className="btn btn-warning col-sm-2"
            value="Edit"
            onClick={handleEdit}
          />
        </div>
      </li>
    );
  });

  return (
    <div className="container-sm">
      <h4>Experience:</h4>
      <ul className="list-unstyled">{experienceNodes}</ul>
      {!props.formActive && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={props.toggleAdder}
        >
          Add Experience
        </button>
      )}
    </div>
  );
}

ExperienceDisplay.propTypes = {
  experiences: PropTypes.array,
  formActive: PropTypes.bool,
  delete: PropTypes.func,
  toggleAdder: PropTypes.func,
};

export default ExperienceDisplay;
