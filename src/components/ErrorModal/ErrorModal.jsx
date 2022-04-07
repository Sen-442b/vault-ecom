import React from "react";
import { useErrorContext } from "../global-context/error-context";

const ErrorModal = () => {
  const { error, setError } = useErrorContext();
  const { message } = error;
  return (
    <>
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
    </>
  );
};

export default ErrorModal;
