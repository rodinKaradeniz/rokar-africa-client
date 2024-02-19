import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Maps from "../components/Maps";
import "../styles/Contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapContainerStyle = {
    width: "350px",
    height: "250px",
  };

  return (
    <div className="contact">
      <div className="contactHeader">
        <h1> Contact Us </h1>
        <h4>
          If you require support or have any inquiries, please feel free to
          submit your message through the form below.
        </h4>
      </div>
      <div className="contactBody">
        <div className="leftSide">
          <div className="leftSideInfo">
            <h2>Ro-Kar Africa</h2>
            <p>Chole Road, Gate No: 99, Masaki</p>
            <p>Dar Es Salaam, Tanzania</p>
            <p>Phone: +255 752 777 708</p>
            <p>WhatsApp: +255 772 733 303</p>
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
