import React, { useState } from "react";
import { CustomButton } from "../buttons/customButton/CustomButton";
import "./form.css";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const emailCheck = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const inputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);

    if (emailCheck(email)) {
      setError("The email is valid ");
    } else {
      setError("Email is invalid");
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form-input-wrap" onSubmit={handleSubmit}>
          {error && <h2 className="error">{error}</h2>}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={inputChange}
            value={email}
          />
          <section className="send-button-container">
            <CustomButton buttonTitle={"send"} />
          </section>
        </form>
      </div>
    </>
  );
};
