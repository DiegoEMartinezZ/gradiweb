import React from "react";
import "./customButton.css";

export const CustomButton = ({ buttonTitle }) => {
  return (
    <>
      <button className="general-button-wrap" type="submit">
        <h2 className="general-button-txt"> {buttonTitle}</h2>
      </button>
    </>
  );
};
