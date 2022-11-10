import React, { useRef } from 'react';
import './join.scss';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <div className="Join">
      <div className="left-j" id="oo">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span className="h3">level up</span>
        </div>
        <div>
          <span className="h3">your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="riht-j">
        <form ref={form} onSubmit={sendEmail} className="email-container" action="">
          <input type="email" name="user_email" placeholder="Entet your Email address" />
          <button className="btn btn-j">Join us</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
