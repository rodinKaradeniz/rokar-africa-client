import React, { useEffect } from "react";
import Faq from "../components/Faq.jsx";
import { Questions } from "../helpers/Questions";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HandshakeIcon from "@mui/icons-material/Handshake";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import "../styles/About.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="aboutIntro">
        <h1> About Us </h1>
        <p>
          We don't just sell products; we share a taste of Tanzania with every
          spice and nut, inviting you to savor the essence of our heritage.
        </p>
      </div>
      <div className="aboutSectionContainer">
        <div className="aboutSection">
          <div className="aboutSectionTitle">
            <h2> Our Mission </h2>
          </div>
          <div className="aboutSectionBody">
            <p>
              At Rokar, we are passionate about bringing the vibrant essence of
              Long Cayenne, the rich allure of Red Diamond, the creamy delight
              of Cashews, and the aromatic warmth of Cloves to your culinary
              adventures. Born from a deep love for the region's finest nuts and
              spices, our journey began with a commitment to deliver premium
              quality and unbeatable taste. Every product we offer is a
              testament to the rich cultural tapestry of Tanzania, ensuring that
              each bite is a celebration of authenticity and tradition.
            </p>
          </div>
        </div>
      </div>
      <div className="historySection">
        <div className="historyInfo">
          <HandshakeIcon />
          <h3>Establishment</h3>
          <p>
            In 2019, our company was founded with a vision to bring the vibrant
            flavors of Tanzanian nuts and spices to the world. Inspired by the
            rich culinary heritage of the region, our mission is to provide
            premium quality products that embody the essence of authenticity and
            tradition.
          </p>
          <p>
            From the very beginning, our founders envisioned a business rooted
            in cultural respect, quality excellence, and a commitment to sharing
            the diverse flavors of Tanzania. Today, our mission remains
            steadfast, driving every decision we make in delivering unparalleled
            culinary experiences.
          </p>
        </div>
        <div className="historyInfo">
          <OutlinedFlagIcon />
          <h3>The Journey</h3>
          <p>
            Our journey began with a modest selection of Long Cayenne, Red
            Diamond, Cashews, and Cloves. Over the years, we have meticulously
            refined our sourcing and production processes to ensure the highest
            standards of freshness and flavor in every product.
          </p>
          <p>
            Experiencing steady growth, we have expanded our market presence
            both locally and internationally. Through strategic partnerships,
            sustainable practices, and a dedication to quality, we have
            cultivated a loyal customer base, solidifying our position as a
            leading provider in the nuts and spices industry.
          </p>
        </div>
        <div className="historyInfo">
          <TrendingUpIcon />
          <h3>What's Next?</h3>
          <p>
            Looking ahead, we aspire to further diversify our product offerings,
            introducing innovative blends and exploring new flavor profiles. Our
            goal is to captivate the evolving tastes of our customers, providing
            them with an ever-expanding range of exceptional culinary choices.
          </p>
          <p>
            Committed to sustainability, our future vision includes initiatives
            to reduce our environmental footprint and enhance our support for
            local communities. We aim to be a trailblazer in ethical business
            practices, setting new standards for the industry and fostering a
            positive impact on both people and the planet.
          </p>
        </div>
      </div>
      <div className="ourValuesSection">
        <h2>Our Values</h2>
        <div className="ourValuesList">
          <div className="valueInfo">
            <h3>Quality</h3>
            <p>
              Our dedication lies in obtaining and delivering nuts and spices of
              the utmost quality, guaranteeing that each product adheres to
              strict criteria regarding freshness, flavor, and authenticity.
            </p>
          </div>
          <div className="valueInfo">
            <h3>Transparency</h3>
            <p>
              We believe in openness and transparency in all our business
              practices. From sourcing to production and distribution, we strive
              to provide clear information about our processes, ensuring trust
              and confidence in our products.
            </p>
          </div>
          <div className="valueInfo">
            <h3>Commitment</h3>
            <p>
              The core of our focus is our customers, driving every aspect of
              our operations. Our aim is to surpass anticipated standards
              through the delivery of outstanding service, responsiveness to
              feedback, and a commitment to continual enhancement to align with
              their changing requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="faqSection">
        <div className="faqSectionTitle">
          <h4 style={{ color: "white" }}> FAQ </h4>
          <h3 style={{ color: "white" }}> Frequently Asked Questions </h3>
        </div>
        <div className="faqContainer">
          {Questions.map((faqItem, key) => {
            return (
              <Faq
                key={key}
                question={faqItem.question}
                answer={faqItem.answer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
