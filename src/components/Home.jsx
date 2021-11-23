import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const PTInfo = [
    { name: "최봉수", id: "11t518s20161759" },
    { name: "송영진", id: "jesusfingers12" },
    { name: "임규민", id: "kmlim5122" },
  ];

  const navigate = useNavigate();
  const onPTClickHandler = (id) => {
    // <navigate to="/reservation" replace state={id} />;
    navigate(id);
  };
  return (
    <>
      <div>
        {PTInfo.map((PTInfoItem, idx) => (
          <h1 onClick={() => onPTClickHandler(PTInfoItem.id)} key={idx}>
            {PTInfoItem.name}
          </h1>
        ))}
      </div>
      <br />
    </>
  );
}

export default Home;
