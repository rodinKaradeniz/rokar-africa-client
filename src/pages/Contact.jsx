import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Maps from "../components/Maps";
import "../styles/Contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapContainerStyle = {
    width: "500px",
    height: "300px",
  };

  return (
    <div className="contact">
      <div className="contactHeader">
        <h1> Contact Us </h1>
        <p>
          If you require support or have any inquiries, please feel free to
          submit the form below.
        </p>
      </div>
      <div className="contactBody">
        <div className="leftSide">
          <div className="leftSideInfo">
            <h2>Ro-Kar Africa</h2>
            <p>Enter Address Here</p>
            <p>Enter Phone Number Here</p>
            <p>rokarafrica@gmail.com</p>
          </div>
          <div className="mapsContainer">
            <Maps data={mapContainerStyle} />
          </div>
        </div>
        <div className="rightSide">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
