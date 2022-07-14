import React, { useState } from "react";
import PropTypes from "prop-types";

function InfoDisplay(props) {
  const [updating, setUpdating] = useState(false);

  return (
    <div className="container-sm mb-5">
      <h4>Contact Information:</h4>
      <div>
        <p>Name: {props.personalInfo.name}</p>
        <p>Email: {props.personalInfo.email}</p>
        <p>Phone Number: {props.personalInfo.phoneNumber}</p>
      </div>
      {!props.formActive && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            props.toggleUpdateInfo();
            setUpdating(!updating);
          }}
        >
          Edit Info
        </button>
      )}
    </div>
  );
}

InfoDisplay.propTypes = {
  personalInfo: PropTypes.object,
  toggleUpdateInfo: PropTypes.func,
  formActive: PropTypes.bool,
};

export default InfoDisplay;
