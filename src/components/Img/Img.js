import React, { useState } from "react";

const CustomImg = ({ srcLQ, srcHQ }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return srcLQ.trim() && srcHQ.trim()
    ? <>
      <img
        src={srcHQ}
        alt=""
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? 'initial' : 'none' }}
      />
      {isLoaded
        ? null
        : <img src={srcLQ} alt="" />}
    </>
    : <img src={srcLQ || srcHQ} alt="" />;
};

export default CustomImg;
