import React from "react";
import { useLocation, useParams } from "react-router";
import Header from "../Header/Header";
import './index.css'

const Calendly = () => {
  const params = useParams();
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <Header />
      <div className="calendlyHelper">
          <h1 className="therapistName">{state.name} 치료사 예약</h1>

        <a href="https://www.youtube.com/watch?v=6s9pKLqvjlw" className="getHelp">
            <div className="questionMark">?</div>
            <div className="questionTypo">도와줘요</div>
        </a></div>
      <div style={{ height: "800px" }}>
        <iframe
          title="embeded Calendly"
          src={`https://calendly.com/${params.id}`}
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};

export default Calendly;
