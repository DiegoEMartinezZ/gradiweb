import React from "react";
import { TitleLandingPage } from "../../resources/title-landingPage/TitleLandingPage";
import { ButtonsCarrousel } from "../../resources/buttons/ButtonsCarrousel";
import "./mainTopBar.css";

export const MainTopBar = () => {
  return (
    <div className="main-container">
      <TitleLandingPage />
      <ButtonsCarrousel />
    </div>
  );
};
