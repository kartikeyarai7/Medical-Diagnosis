import React from "react";

const User = ({ onValueChange, onFormSubmit, onGenderChange, onYearChange, onNameChange }) => {
  return (
    <div>
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 white">Online Issue Diagnosis</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" htmlFor="name">
                Name
              </label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" onChange={onNameChange} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" htmlFor="gender">
                Gender
              </label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="gender" id="gender" onChange={onGenderChange} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" htmlFor="age">
                Birth Year
              </label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="age" id="age" onChange={onYearChange} />
            </div>

            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" htmlFor="symptoms">
                Symptoms
              </label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="symptoms" id="symptoms" onChange={onValueChange} />
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--white bg-transparent white grow pointer f6 dib" type="submit" value="Submit" onClick={onFormSubmit} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
