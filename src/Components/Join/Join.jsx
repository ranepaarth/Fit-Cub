import React, { useRef } from "react";
import "./Join.scss";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef(); //allows us to refer to the form

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h161vmd",
        "template_xu95sxl",
        form.current,
        "tzwoR0CYbNq3L3IvC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div className="join-header">
          <span className="stroke-text">Ready to</span>
          <span>level up</span>
        </div>
        <div className="join-header">
          <span>Your Body</span>
          <span className="stroke-text">With us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="text"
            name="user-email"
            placeholder="Enter your Email address"
          />
          {/* btn.btn{Join Now} === Shortcut for creating a button with class btn which displays "Join Now" can be done with any element like div,spanh1,a,etc */}
          <button className="btn btn-join">
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
