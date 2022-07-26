import React, { useState } from "react";
import PropTypes from "prop-types";
import ExperienceForm from "./ExperienceForm";

function ListItem({
  exp,
  deleteItem,
  editing,
  updater,
  startEditing,
  endEditing,
  buttonDisabled,
}) {

  
  const [editThisItem, setEditThisItem] = useState(false);

  const handleEdit = () => {
    if (editing && !editThisItem) {
      return;
    }
    startEditing();
    setEditThisItem(true);
  };


  return (
    <li key={exp.id} className="list-group-item">
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
      {!editThisItem && (
        <div className="row">
          <input
            type="button"
            className="btn btn-secondary col-sm-2"
            value="Edit"
            onClick={handleEdit}
            disabled={buttonDisabled}
          />
          <span className="col-sm-auto"></span>
          <input
            type="button"
            className="btn btn-danger col-sm-2"
            value="Delete"
            onClick={() => deleteItem(exp.id)}
            disabled={buttonDisabled}
          />
        </div>
      )}
      {editThisItem && (
        <ExperienceForm
          expToEdit={exp}
          editItem={editThisItem}
          updater={updater}
          endEditing={() => {
            endEditing();
            setEditThisItem(false);
          }}
        />
      )}
    </li>
  );
}

ListItem.propTypes = {
  exp: PropTypes.object,
  deleteItem: PropTypes.func,
  editing: PropTypes.bool,
  updater: PropTypes.func,
  startEditing: PropTypes.func,
  endEditing: PropTypes.func,
  buttonDisabled: PropTypes.bool,
};

function ExperienceDisplay({
  experiences,
  deleteItem,
  openForm,
  formActive,
  editing,
  startEditing,
  endEditing,
  updater,
  buttonDisabled,
}) {
  const experienceArray = experiences;

  const experienceNodes = experienceArray.map((exp) => (
    <ListItem
      key={exp.id}
      deleteItem={deleteItem}
      exp={exp}
      editing={editing}
      startEditing={() => startEditing()}
      endEditing={() => endEditing()}
      updater={updater}
      buttonDisabled={buttonDisabled}
    />
  ));

  return (
    <div className="container-sm mb-5">
      <h4>Experience:</h4>
      <ul className="list-group list-group-flush">{experienceNodes}</ul>
      {!formActive && (
        <button className="btn btn-primary" type="button" onClick={openForm} disabled={buttonDisabled}>
          Add Experience
        </button>
      )}
    </div>
  );
}

ExperienceDisplay.propTypes = {
  experiences: PropTypes.array,
  formActive: PropTypes.bool,
  deleteItem: PropTypes.func,
  openForm: PropTypes.func,
  editing: PropTypes.bool,
  updater: PropTypes.func,
  startEditing: PropTypes.func,
  endEditing: PropTypes.func,
  buttonDisabled: PropTypes.bool,
};

export default ExperienceDisplay;
