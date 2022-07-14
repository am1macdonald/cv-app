import React, { useState } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";

function ExperienceForm(props) {
  const [companyName, setCompanyName] = useState(
    props.expToEdit ? props.expToEdit.companyName : ""
  );
  const [positionTitle, setPositionTitle] = useState(
    props.expToEdit ? props.expToEdit.positionTitle : ""
  );
  const [duties, setDuties] = useState(
    props.expToEdit ? props.expToEdit.duties : ""
  );
  const [startDate, setStartDate] = useState(
    props.expToEdit ? props.expToEdit.startDate : ""
  );
  const [endDate, setEndDate] = useState(
    props.expToEdit ? props.expToEdit.endDate : ""
  );

  function newExperience() {
    return {
      companyName: companyName,
      positionTitle: positionTitle,
      duties: duties,
      startDate: startDate,
      endDate: endDate,
      id: props.expToEdit ? props.expToEdit.id : uniqid(),
    };
  }

  function handleClick(e) {
    e.preventDefault();
    if (props.editItem) {
      props.updater(newExperience());
      props.toggleEditItem();
      return;
    }

    props.onButtonClicked(newExperience());
    props.toggleAdder();
  }

  return (
    <form className="container-sm mb-1">
      <div className="mb-3">
        <label htmlFor="company-name">Company Name: </label>
        <input
          className="form-control"
          type="text"
          name="companyName"
          id="company-name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="position-title">Position Title: </label>
        <input
          className="form-control"
          type="text"
          name="positionTitle"
          id="position-title"
          value={positionTitle}
          onChange={(e) => setPositionTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="duties">Duties: </label>
        <input
          className="form-control"
          type="text-area"
          name="duties"
          id="duties"
          value={duties}
          onChange={(e) => setDuties(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="start-of-employment">Start of Employment: </label>
        <input
          className="form-control"
          type="date"
          name="startDate"
          id="start-of-employment"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          max={new Date().toLocaleDateString("en-ca")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="end-of-employment">End of Employment: </label>
        <input
          className="form-control"
          type="date"
          name="endDate"
          id="end-of-employment"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          max={new Date().toLocaleDateString("en-ca")}
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
          onClick={props.editItem ? props.toggleEditItem : props.toggleAdder}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

ExperienceForm.propTypes = {
  onButtonClicked: PropTypes.func,
  toggleAdder: PropTypes.func,
  expToEdit: PropTypes.object,
  editItem: PropTypes.bool,
  toggleEditItem: PropTypes.func,
  updater: PropTypes.func,
};

export default ExperienceForm;
