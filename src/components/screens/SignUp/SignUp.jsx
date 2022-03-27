import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../global-context/auth-context";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userFormData, setUserFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    hasError: false,
    message: "",
  });
  const navigateTo = useNavigate();
  const { setIsUserAuthenticated } = useAuthContext();

  const { userName, firstName, lastName, email, password } = userFormData;
  const { hasError, message } = error;

  const userSignUpHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, userFormData);
      // saving the encodedToken in the localStorage
      console.log(response);

      localStorage.setItem("token", response.data.encodedToken);
      setIsUserAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      setError((prevObj) => ({ ...prevObj, hasError: true, message: "check" }));
    }
  };

  return (
    <div className="modal-container flex-center">
      {!hasError && (
        <div className="modal-content padding-mdm margin-mdm">
          <button
            className="btn btn-outlined btn-sml pos-abs-top-right box-shadow-none red-text-color"
            id="btn-close-modal"
          >
            Close
          </button>
          <h1 className="text-align-center">
            <span className="cta-text">
              <i className="fas fa-user-plus"></i>
            </span>
            Sign up
          </h1>
          <form
            className="width-100 box-shadow-none"
            onSubmit={(e) => {
              e.preventDefault();
              return userSignUpHandler();
            }}
          >
            <div className="form-field">
              <label
                htmlFor="username-input"
                className="input-lbl required-field"
              >
                Username
              </label>
              <input
                name="username-input"
                className="form-input"
                id="username-input"
                required
                aria-required="true"
                autoComplete="off"
                type="text"
                placeholder="Kyle3b"
                value={userName}
                onChange={(e) =>
                  setUserFormData((prevObj) => ({
                    ...prevObj,
                    userName: e.target.value,
                  }))
                }
              />
              <small
                className="alert alert-danger fs-sml padding-sml display-none"
                id="username-text-error"
              >
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Username can't be empty
              </small>
              <small
                className="alert alert-success fs-sml padding-sml display-none"
                id="username-text-success"
              >
                <span>
                  <i className="fas fa-check-circle"></i>
                </span>
                Username is Available
              </small>
            </div>
            <div className="form-field">
              <label
                htmlFor="firstname-input"
                className="input-lbl required-field"
              >
                First Name
              </label>
              <input
                name="firstname-input"
                className="form-input"
                id="firstname-input"
                required
                aria-required="true"
                autoComplete="off"
                type="text"
                placeholder="Kyle"
                value={firstName}
                onChange={(e) =>
                  setUserFormData((prevObj) => ({
                    ...prevObj,
                    firstName: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-field">
              <label
                htmlFor="lastname-input"
                className="input-lbl required-field"
              >
                Last Name
              </label>
              <input
                name="lastname-input"
                className="form-input"
                id="lastname-input"
                required
                aria-required="true"
                autoComplete="off"
                type="text"
                placeholder="Simpson"
                value={lastName}
                onChange={(e) =>
                  setUserFormData((prevObj) => ({
                    ...prevObj,
                    lastName: e.target.value,
                  }))
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="email-input" className="input-lbl required-field">
                Email
              </label>
              <input
                name="email-input"
                className="form-input"
                id="email-input"
                required
                aria-required="true"
                autoComplete="off"
                type="email"
                placeholder="beaucarnes123@gmail.com"
                value={email}
                onChange={(e) =>
                  setUserFormData((prevObj) => ({
                    ...prevObj,
                    email: e.target.value,
                  }))
                }
              />
              <small
                className="alert alert-danger fs-sml padding-sml display-none"
                id="email-text-error"
              >
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Email can't be empty
              </small>
              <small
                className="alert alert-danger fs-sml padding-sml display-none"
                id="email-validation-error"
              >
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Enter a Valid Email
              </small>
              <small
                className="alert alert-success fs-sml padding-sml display-none"
                id="email-validation-success"
              >
                <span>
                  <i className="fas fa-check-circle"></i>
                </span>{" "}
                Valid Email
              </small>
            </div>
            <div className="form-field">
              <label
                htmlFor="password-input"
                className="input-lbl required-field"
              >
                Password
              </label>
              <input
                name="password-input"
                className="form-input"
                id="password-input"
                required
                aria-required="true"
                autoComplete="off"
                type="password"
              />
              <small
                className="alert alert-danger fs-sml padding-sml display-none"
                id="password-text-error"
              >
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Password can't be empty.
              </small>
              <small
                className="alert alert-danger fs-sml padding-sml display-none"
                id="password-validation-error"
              >
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Password must at least contain 8 characters with at least 1
                lowercase character, 1 uppercase character, 1 number, and 1
                special character in (!@#$%^&*).
              </small>
              <small
                className="alert alert-success fs-sml padding-sml display-none"
                id="password-validation-success"
              >
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Valid Password.
              </small>
            </div>
            <div className="form-field">
              <label
                htmlFor="password-match-input"
                className="input-lbl required-field"
              >
                Confirm Password
              </label>
              <input
                name="password-match-input"
                className="form-input"
                id="password-match-input"
                required
                aria-required="true"
                autoComplete="off"
                type="password"
                value={password}
                onChange={(e) =>
                  setUserFormData((prevObj) => ({
                    ...prevObj,
                    password: e.target.value,
                  }))
                }
              />
              <small
                className="alert alert-danger fs-sml padding-sml display-none"
                id="password-match-text-error"
              >
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Please fill out this field
              </small>
              <small
                className="alert alert-danger fs-sml padding-sml display-none"
                id="password-match-validation-error"
              >
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Password didn't match
              </small>
              <small
                className="alert alert-success fs-sml padding-sml display-none"
                id="password-match-validation-success"
              >
                <span>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                Password Matched
              </small>
            </div>
            <input
              type="submit"
              className="btn btn-cta"
              id="form-submit"
              value="Submit"
            />
            <div className="flex-f-end">
              <button>
                <Link to="/log-in" className="cta-text-hover">
                  Login Instead
                </Link>
              </button>
            </div>
          </form>
        </div>
      )}
      {hasError && (
        <div className="modal-content padding-mdm margin-mdm flex-center">
          <div className="text-align-center">
            <p>Something Went Wrong</p>
            <div className="alert alert-danger">
              <span className="margin-sml">
                <i className="fas fa-exclamation-circle"></i>
              </span>
              {message}
            </div>
            <button
              className="btn btn-cta"
              onClick={() =>
                setError((prevObj) => ({
                  ...prevObj,
                  hasError: false,
                  message: "",
                }))
              }
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
