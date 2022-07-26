import React, { useState } from "react";
import PropTypes from "prop-types";

function InfoDisplay({
  personalInfo,
  openEditor,
  formActive,
  buttonDisabled
}) {

  const [updating, setUpdating] = useState(false);

  return (
    <div className="container-sm mb-5">
      <h4>Contact Information:</h4>
      <div>
        <p>Name: {personalInfo.fullName}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone Number: {personalInfo.phoneNumber}</p>
      </div>
      {!formActive && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            openEditor();
            setUpdating(!updating);
          }}
          disabled={buttonDisabled}
        >
          Edit Info
        </button>
      )}
    </div>
  );
}

InfoDisplay.propTypes = {
  personalInfo: PropTypes.object,
  openEditor: PropTypes.func,
  formActive: PropTypes.bool,
  buttonDisabled: PropTypes.bool
};

export default InfoDisplay;
