import React, { useState } from "react";
import PropTypes from "prop-types";
import ExperienceForm from "./ExperienceForm";

function ListItem(props) {
  const [editThisItem, toggleEditThisItem] = useState(false);

  const handleEdit = () => {
    if (props.editing && !editThisItem) {
      return;
    }
    props.toggleEditing();
    toggleEditThisItem(!editThisItem);
  };
  const exp = props.exp;

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
          />
          <span className="col-sm-auto"></span>
          <input
            type="button"
            className="btn btn-danger col-sm-2"
            value="Delete"
            onClick={() => props.deleteItem(exp.id)}
          />
        </div>
      )}
      {editThisItem && (
        <ExperienceForm expToEdit={exp} editItem={editThisItem} toggleEditItem={handleEdit} updater={props.updater} />
      )}
    </li>
  );
}

ListItem.propTypes = {
  exp: PropTypes.object,
  deleteItem: PropTypes.func,
  editing: PropTypes.bool,
  toggleEditing: PropTypes.func,
  updater: PropTypes.func,
};

function ExperienceDisplay({
  experiences,
  deleteItem,
  openForm,
  formActive,
  editing,
  toggleEditing,
  updater
}) {
  const experienceArray = experiences;

  const experienceNodes = experienceArray.map((exp) => (
    <ListItem 
    key={exp.id}
    deleteItem={deleteItem}
    exp={exp}
    editing={editing}
    toggleEditing={toggleEditing}
    updater={updater}

    
    />
  ));

  return (
    <div className="container-sm">
      <h4>Experience:</h4>
      <ul className="list-group list-group-flush">{experienceNodes}</ul>
      {!formActive && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={openForm}
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
  deleteItem: PropTypes.func,
  openForm: PropTypes.func,
  editing: PropTypes.bool,
  toggleEditing: PropTypes.func,
  updater: PropTypes.func
};

export default ExperienceDisplay;
