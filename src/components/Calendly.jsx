import React from "react";
import { useParams } from "react-router";

const Calendly = () => {
  const params = useParams();
  console.log(params);
  return (
    <div style={{ height: "800px" }}>
      <iframe
        title="embeded Calendly"
        src={`https://calendly.com/${params.id}`}
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      d
      <br />
    </div>
  );
};

export default Calendly;
