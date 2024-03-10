import React from "react";

const keycard = ({ src, alt, title }) => {
  return (
    <div>
      <img className="vsm:w-24 sm:w-48 w-72 m-14" src={src} alt={alt} />
    </div>
  );
};

export default keycard;
