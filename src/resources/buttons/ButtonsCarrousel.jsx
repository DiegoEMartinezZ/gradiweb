import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./buttonsCarrousel.css";

export const ButtonsCarrousel = () => {
  return (
    <>
      <section className="btns-container">
        <div className="pink-rectangle">
          <button className="circle-btn">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>

        <div className="pink-rectangle">
          <button className="circle-btn">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>
    </>
  );
};
