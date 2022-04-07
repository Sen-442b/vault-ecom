import React from "react";
import { BlackCatFace } from "../../../assets/Images";
const NotFound = () => {
  return (
    <div className="flex-center gap-mdm">
      <div className="flex-column text-align-center content-width">
        <div>
          <img className="image-resp" src={BlackCatFace} alt="404 not found" />
        </div>
        <p className="fs-lrg">404 | Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
