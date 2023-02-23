import React from "react";
import { HashLoader } from "react-spinners";

const Loader = ({ isCenter = false }) => {
  if (isCenter)
    return (
      <div className="fixed top-0 right-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-neutral-600">
        <HashLoader color="#36d7b7" />
      </div>
    );

  return <HashLoader color="#36d7b7" size={30} />;
};

export default Loader;
