import React from "react";

const Gif = ({ id }) => {
  return <img src={`https://media2.giphy.com/media/${id}/giphy.gif`} alt="" />;
};

export default Gif;