import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";

function Home({ PTInfo }) {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (PTInfo.some((PTinfo) => PTinfo.name === params.name)) {
      return;
    } else {
      navigate("/");
    }
  }, [navigate]);

  const onPTClickHandler = (PTInfoItem) => {
    navigate(`${PTInfoItem.name}/reservation`, { state: PTInfoItem });
  };

  const eachOnPTClickHandler = (PTName) => {
    const selectedPTInfo = PTInfo.filter((item) => item.name === PTName);
    navigate(`../${PTName}/reservation`, {
      state: selectedPTInfo[0],
    });
  };
  return (
    <div className="homeWrapper">
      <div className="serviceSummary">
        30초만에 간단한 <br /> 도수치료 예약 서비스
      </div>
      <div className="homeTypo">지저스 핑거스</div>
      <iframe
        className="tutorial"
        src="https://www.youtube.com/embed/6s9pKLqvjlw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {params.name ? (
        <div className="reservation">
          <button
            className="reservationButton"
            onClick={() => eachOnPTClickHandler(params.name)}
          >
            예약하기
          </button>
        </div>
      ) : (
        <div className="reservation">
          {PTInfo.map((PTInfoItem, idx) => (
            <button
              className="reservationButton"
              onClick={() => onPTClickHandler(PTInfoItem)}
              key={idx}
            >
              {PTInfoItem.name} 치료사
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
