import React, { useEffect } from "react";

import { useAlertTextContext } from "../global-context/alert-text-context";

// Shows alert message and disappears after a few  seconds
const AlertText = () => {
  const { alertText, setAlertText } = useAlertTextContext();
  const { message, alertType } = alertText;

  useEffect(
    () =>
      setTimeout(
        () => setAlertText((prevObj) => ({ ...prevObj, isActive: false })),
        5000
      ),
    []
  );

  return (
    <small className={`alert alert-${alertType} fs-sml padding-sml`}>
      <span>
        <i
          className={`fas ${
            alertType === "success"
              ? "fa-check-circle"
              : "fa-exclamation-circle"
          }`}
        ></i>
      </span>{" "}
      {message}
    </small>
  );
};

export default AlertText;
