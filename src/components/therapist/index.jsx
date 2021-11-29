import React from "react";
import Header from "../Header/Header";
import { useParams } from "react-router";
import "./index.css";
import TherapistPageImage from "../../static/img/TherapistPageImage.svg";

const Therapist = ({ PTInfo }) => {
  const params = useParams();

  return (
    <div className="therapistWrapper">
      <Header />
      <div className="therapistContentWrapper">
        <img
          className="therapistImg"
          src={TherapistPageImage}
          alt="예약페이지"
        />
        <h1 className="therapistIntro">{params.name} 치료사님 전용 페이지</h1>
        <p className="therapistParagraph">
          예약 스케줄 확인 및 예약시간 조정이 가능한 페이지입니다.
        </p>
        <div className="therapistReschduleBlock">
          <div className="eachReschduleBlock">
            <p>예약 스케쥴 확인하기</p>
            <a
              href="https://calendly.com/app/scheduled_events/user/me"
              className="rescheduleButton"
            >
              예약 확인 >
            </a>
          </div>
          <div className="eachReschduleBlock">
            <p>예약시간 조정하기</p>
            <a
              href="https://calendly.com/app/availability/schedules"
              className="rescheduleButton"
            >
              예약시간 조정 >
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
