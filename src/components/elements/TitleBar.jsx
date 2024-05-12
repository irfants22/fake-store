import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function TitleBar({ children }) {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="w-full flex items-center p-4 mb-10">
      <div
        className="flex items-center cursor-pointer"
        onClick={handleBackButton}
      >
        <IoArrowBack className="text-3xl" />
      </div>
      <div className="m-auto flex items-center">
        <h2 className="text-3xl font-normal capitalize">{children}</h2>
      </div>
    </div>
  );
}

export default TitleBar;
