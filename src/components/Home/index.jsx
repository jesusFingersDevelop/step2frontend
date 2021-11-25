import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Index() {
  const PTInfo = [
    { name: "최봉수", id: "11t518s20161759" },
    { name: "송영진", id: "jesusfingers12" },
    { name: "임규민", id: "kmlim5122" },
  ];

  const navigate = useNavigate();
  const onPTClickHandler = (PTInfoItem) => {
    // <navigate to="/reservation" replace state={id} />;
    navigate(PTInfoItem.id, {state:PTInfoItem});
  };
  return (
    <div className="homeWrapper">
      <div className="serviceSummary">
        30초만에 간단한 <br /> 도수치료 예약 서비스
      </div>
      <div className="homeTypo">지저스 핑거스</div>
        <iframe className="tutorial"
                src="https://www.youtube.com/embed/6s9pKLqvjlw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        <div className="reservation">
        {PTInfo.map((PTInfoItem, idx) => (
          <button className="reservationButton" onClick={() => onPTClickHandler(PTInfoItem)} key={idx}>
            {PTInfoItem.name} 치료사
          </button>
        ))}
      </div>
      <br />
    </div>
  );
}

export default Index;
