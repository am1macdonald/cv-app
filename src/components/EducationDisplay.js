import React, { useState } from "react";
import PropTypes from "prop-types";
import EducationForm from "./EducationForm";

function ListItem(props) {
  const [editThisItem, toggleEditThisItem] = useState(false);

  const handleEdit = () => {
    if (props.formLockout) {
      return;
    }
    if (props.editing && !editThisItem) {
      return;
    }
    props.startEditing();
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

      {editThisItem && (
        <EducationForm
          eduToEdit={edu}
          editItem={editThisItem}
          updater={props.updater}
          endEditing={() => {
            props.endEditing();
            toggleEditThisItem(false);
          }}
        />
      )}
    </li>
  );
}

ListItem.propTypes = {
  edu: PropTypes.object,
  deleteItem: PropTypes.func,
  editing: PropTypes.bool,
  updater: PropTypes.func,
  startEditing: PropTypes.func,
  endEditing: PropTypes.func,
  formLockout: PropTypes.bool,
};

function EducationDisplay({
  education,
  deleteItem,
  openForm,
  formActive,
  editing,
  updater,
  formLockout,
  startEditing,
  endEditing,
}) {
  const eduArray = education;

  const eduNodes = eduArray.map((edu) => (
    <ListItem
      key={edu.id}
      deleteItem={deleteItem}
      edu={edu}
      editing={editing}
      startEditing={() => {
        if (!formLockout) {
          startEditing();
        }
      }}
      endEditing={() => {
        endEditing();
      }}
      formLockout={formLockout}
      updater={updater}
    />
  ));

  return (
    <div className="container-sm mb-5">
      <h4>Education:</h4>
      <ul className="list-group list-group-flush">{eduNodes}</ul>
      {!formActive && (
        <button className="btn btn-primary" type="button" onClick={openForm}>
          Add Education
        </button>
      )}
    </div>
  );
}

EducationDisplay.propTypes = {
  education: PropTypes.array,
  deleteItem: PropTypes.func,
  openForm: PropTypes.func,
  updater: PropTypes.func,
  startEditing: PropTypes.func,
  endEditing: PropTypes.func,
  formActive: PropTypes.bool,
  editing: PropTypes.bool,
  formLockout: PropTypes.bool,
};

export default EducationDisplay;
