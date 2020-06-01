import React, { useState } from "react";

const CustomImg = ({ srcLQ, srcHQ, alt = "", onLoad, runItBefore = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnImageLoaded = () => {
    if (onLoad && runItBefore) onLoad();
    setIsLoaded(true);
    if (onLoad && !runItBefore) onLoad();
  }

  return srcLQ.trim() && srcHQ.trim()
    ? <>
      <img
        src={srcHQ}
        alt={alt}
        onLoad={handleOnImageLoaded}
        style={{ display: isLoaded ? 'initial' : 'none' }}
      />
      {isLoaded
        ? null
        : <img src={srcLQ} alt="" />}
    </>
    : <img src={srcLQ || srcHQ} alt="" />;
};

export default CustomImg;
