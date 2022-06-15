import React from "react";
import { useNavigate } from "react-router";

const AppLogo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer select-none inline-block"
      onClick={() => navigate("/")}
    >
      <div className="flex flex-col items-center">
        <div className="text-lg font-semibold tracking-wider">CHAOS.</div>
        <div className="-translate-y-1 transform text-[7px] tracking-wider">
          sanzaikc@gmail.com
        </div>
      </div>
    </div>
  );
};

export default AppLogo;
