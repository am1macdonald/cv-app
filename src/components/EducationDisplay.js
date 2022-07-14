import React, { useState } from "react";
import PropTypes from "prop-types";
import EducationForm from "./EducationForm";

function ListItem(props) {
  const [editThisItem, toggleEditThisItem] = useState(false);

  const handleEdit = () => {
    if(props.editing && !editThisItem) {
      return
    }
    props.toggleEditing()
    toggleEditThisItem(!editThisItem);
  };
  const edu = props.edu;
  return (
    <li className="list-group-item">
      <h5>{edu.titleOfStudy}</h5>

      <dl className="row">
        <dt className="col-sm-4">School Name:</dt>
        <dd className="col-sm-8">{edu.schoolName}</dd>
        <dt className="col-sm-4">Graduation Date:</dt>
        <dd className="col-sm-8">{edu.graduationDate}</dd>
        <dt className="col-sm-4">GPA:</dt>
        <dd className="col-sm-8">{edu.gpa}</dd>
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
            className="btn btn-danger mr-2 col-sm-2"
            value="Delete"
            onClick={() => props.deleteItem(edu.id)}
          />
        </div>
      )}

      {editThisItem && <EducationForm eduToEdit={edu} editItem={editThisItem} toggleEditItem={handleEdit} updater={props.updater} />}
    </li>
  );
}

ListItem.propTypes = {
  edu: PropTypes.object,
  deleteItem: PropTypes.func,
  editing: PropTypes.bool,
  toggleEditing: PropTypes.func,
  updater: PropTypes.func
};

function EducationDisplay(props) {
  const eduArray = props.education;

  const eduNodes = eduArray.map((edu) => (
    <ListItem
      key={edu.id}
      deleteItem={props.delete}
      edu={edu}
      editing={props.editing}
      toggleEditing={props.toggleEditing}
      updater={props.updater}
    />
  ));

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
  editing: PropTypes.bool,
  toggleEditing: PropTypes.func,
  updater: PropTypes.func
};

export default EducationDisplay;
