import React from "react";
import { useParams } from "react-router";
import Header from "../Header/Header";
import "./index.css";

const Calendly = ({ PTInfo }) => {
  const params = useParams();
  const PTId = PTInfo.filter((PTInfoItem) => {
    if (PTInfoItem.name === params.name) {
      return PTInfoItem.name;
    }
  });

  return (
    <>
      <div className="calendlyWrapper">
        <Header />

        <div className="calendlyHelper">
          {/* <div className="blankSpace"></div> */}
          <h1 className="therapistName">{params.name} 치료사 예약</h1>

          {/* <a
            href="https://www.youtube.com/watch?v=6s9pKLqvjlw"
            className="getHelp"
          >
            <div className="questionMark">?</div>
            <div className="questionTypo">도와줘요</div>
          </a> */}
        </div>
        <iframe
          className="embededCalendly"
          title="embeded Calendly"
          src={`https://calendly.com/${PTId[0].id}`}
        ></iframe>
      </div>
    </>
  );
};

export default Calendly;
