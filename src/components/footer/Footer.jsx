import React from "react";
import "./footer.css";
import { Form } from "../../resources/form/Form";

export const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <section className="footer-txt-wrap">
          <h1 className="footer-txt">
            Join the green revolution without <br className="space-01" />
            commitment
          </h1>
          <section className="form-txt-wrap">
            <h1 className="form-txt">
              If you are missing something and don't want to miss future
              <br className="space-01" />
              promotions or our future <br className="space-02" /> products
            </h1>
          </section>
          <Form />
        </section>
      </footer>
    </>
  );
};
