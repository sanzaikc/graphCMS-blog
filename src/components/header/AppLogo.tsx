import React from "react";
import { useNavigate } from "react-router";

const AppLogo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer select-none" onClick={() => navigate("/")}>
      <div className="text-lg font-medium tracking-wider">CHAOS.</div>
      <div className="-translate-y-1 transform text-[6px] tracking-wider">
        sanzaikc@gmail.com
      </div>
    </div>
  );
};

export default AppLogo;
