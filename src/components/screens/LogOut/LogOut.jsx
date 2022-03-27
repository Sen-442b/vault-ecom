import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../global-context/auth-context";

const LogOut = () => {
  const navigateTo = useNavigate();
  const { setIsUserAuthenticated } = useAuthContext();
  const logOutHandler = () => {
    localStorage.getItem("token")
      ? localStorage.removeItem("token")
      : sessionStorage.removeItem("token");
    setIsUserAuthenticated(false);

    navigateTo("/");
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
        <h3 className="fs-mdm text-align-center">Log out</h3>
        <h4 className="text-align-center fs-mdm">Are you sure?</h4>
        <div className="flex-center gap-mdm">
          <button className="btn btn-outlined" onClick={logOutHandler}>
            Log Out
          </button>
          <button className="btn btn-cta" onClick={() => navigateTo(-1)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
