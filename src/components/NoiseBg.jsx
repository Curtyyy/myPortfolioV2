import React from "react";

const NoiseBg = () => {
  return (
    <div className={`w-full h-full absolute top-0 left-0 opacity-40`}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="4"
            numOctaves="1"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default NoiseBg;
