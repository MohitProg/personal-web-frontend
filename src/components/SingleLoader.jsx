import React from "react";
import { BeatLoader, PulseLoader } from "react-spinners";

const SingleLoader = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <PulseLoader
          color="#d78330"
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default SingleLoader;
