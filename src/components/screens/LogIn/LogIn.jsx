import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../global-context/auth-context";
import { useAlertTextContext } from "../../global-context/alert-text-context";
import AlertText from "../../AlertText/AlertText";

const LogIn = () => {
  const { alertText, setAlertText } = useAlertTextContext();

  const [loginFormData, setLoginFormData] = useState({
    userEmail: "",
    userPassword: "",
    persistUser: true,
    showPassword: false,
  });
  const { userEmail, userPassword, persistUser, showPassword } = loginFormData;
  const navigateTo = useNavigate();
  const { setIsUserAuthenticated } = useAuthContext();
  const emailInputRef = useRef();
  useEffect(() => emailInputRef.current.focus(), []);

  const logInService = async (email, password) => {
    try {
      const resp = await axios.post("/api/auth/login", {
        email,
        password,
      });

      return (
        (resp.status === 200 || resp.status === 201) && resp.data.encodedToken
      );
    } catch (error) {
      setAlertText((prevObj) => ({
        ...prevObj,
        isActive: true,
        message:
          error.response.status === 404
            ? "Incorrect username or password"
            : "Something went wrong",
        alertType: "danger",
      }));
    }
  };

  const userLoginHandler = async (userEmail, userPassword, persistUser) => {
    const encToken = await logInService(userEmail, userPassword);

    try {
      if (encToken) {
        persistUser
          ? localStorage.setItem("token", encToken)
          : sessionStorage.setItem("token", encToken);
        setIsUserAuthenticated(true);
        navigateTo("/");
      }
    } catch (error) {
      console.log(error); //ensure proper error handling
    }
  };

  return (
    <div className="modal-container flex-center" id="modal-container-js">
      <div className="modal-content padding-mdm margin-mdm">
        <button
          className="btn btn-outlined btn-sml pos-abs-top-right box-shadow-none red-text-color"
          id="btn-close-modal"
          onClick={() => navigateTo(-1)}
        >
          Close
        </button>
        <h3 className="headline-typography text-align-center">Login</h3>
        <div className="flex-spc-btwn">
          <button
            aria-label="github login"
            className="btn btn-outlined avatar avatar-xsml avatar-text fs-sml dark-txt-light-bg"
          >
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </button>
          <button
            aria-label="google login"
            className="btn btn-outlined avatar avatar-xsml avatar-text fs-sml dark-txt-light-bg"
          >
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </button>
          <button
            aria-label="apple login"
            className="btn btn-outlined avatar avatar-xsml avatar-text fs-sml dark-txt-light-bg"
          >
            <a href="#">
              <i className="fab fa-apple"></i>
            </a>
          </button>
        </div>
        <h4 className="text-align-center">Or</h4>
        <div className="flex-center">{alertText.isActive && <AlertText />}</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            return userLoginHandler(userEmail, userPassword, persistUser);
          }}
        >
          <div className="form-field">
            <label htmlFor="email-input" className="input-lbl">
              Email
            </label>
            <input
              name="email-input"
              className="form-input"
              id="email-input"
              required
              ref={emailInputRef}
              onChange={(e) =>
                setLoginFormData((prevObj) => ({
                  ...prevObj,
                  userEmail: e.target.value,
                }))
              }
              value={userEmail}
              aria-required="true"
              autoComplete="off"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password-input" className="input-lbl">
              Password
            </label>
            <input
              name="password-input"
              className="form-input"
              id="password-input"
              required
              aria-required="true"
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              value={userPassword}
              onChange={(e) =>
                setLoginFormData((prevObj) => ({
                  ...prevObj,
                  userPassword: e.target.value,
                }))
              }
            />
            {userPassword && (
              <button
                className="input-icon-margin"
                title={showPassword ? "Hide Password" : "Show Password"}
                onClick={(e) => {
                  e.preventDefault();
                  setLoginFormData((prevObj) => ({
                    ...prevObj,
                    showPassword: !prevObj.showPassword,
                  }));
                }}
              >
                {showPassword ? (
                  <i className="fa fa-eye-slash" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-eye" aria-hidden="true"></i>
                )}
              </button>
            )}
          </div>
          <div className="flex-spc-btwn">
            <div>
              <input
                type="checkbox"
                className="input-checkbox"
                id="remember-me"
                checked={persistUser}
                onChange={() =>
                  setLoginFormData((prevObj) => ({
                    ...prevObj,
                    persistUser: !prevObj.persistUser,
                  }))
                }
              />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <p>
              <a href="#" className="link cta-text">
                Forgot Password?
              </a>
            </p>
          </div>
          <div className="flex-column">
            <button className="btn btn-cta" type="submit">
              Login
            </button>
            <button
              className="btn btn-outlined"
              onClick={() =>
                setLoginFormData((prevObj) => ({
                  ...prevObj,
                  userEmail: "johndoe@gmail.com",
                  userPassword: "johnDoe123",
                }))
              }
            >
              Add Guest Credentials
            </button>
          </div>
        </form>
        <div className="flex-column">
          <button
            className="text-align-center cta-text-hover"
            onClick={() => navigateTo("/sign-up")}
          >
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
