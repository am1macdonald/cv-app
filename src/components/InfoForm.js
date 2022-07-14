import React, { useState } from "react";
import PropTypes from "prop-types";

function InfoForm(props) {
  const [name, setName] = useState(
    props.personalInfo.name ? props.personalInfo.name : ""
  );
  const [email, setEmail] = useState(
    props.personalInfo ? props.personalInfo.email : ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    props.personalInfo ? props.personalInfo.phoneNumber : ""
  );

  function newInfo() {
    return {
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
    };
  }

  function handleClick(e) {
    e.preventDefault();
    props.onButtonClicked(newInfo());
    props.toggleUpdateInfo();
  }

  return (
    <form className="container-sm mb-5">
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={name.value}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          value={email.value}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="phone-number">
          Phone Number
        </label>
        <input
          className="form-control"
          type="tel"
          name="phoneNumber"
          id="phone-number"
          value={phoneNumber.value}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-primary col-sm-2"
          onClick={handleClick}
        >
          Update
        </button>
        <span className="col-md-auto"></span>
        <button
          type="button"
          className="btn btn-secondary col-sm-2"
          onClick={props.toggleUpdateInfo}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

InfoForm.propTypes = {
  onButtonClicked: PropTypes.func,
  toggleUpdateInfo: PropTypes.func,
  personalInfo: PropTypes.object,
};

export default InfoForm;
