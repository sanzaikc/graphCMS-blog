import React from "react";
import { useNavigate } from "react-router";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="text-8xl">404 :(</div>
      <br />
      <div className="underline cursor-pointer" onClick={() => navigate(-1)}>
        Go Back
      </div>
    </div>
  );
};

export default NotFound;
