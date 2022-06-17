import React from "react";
import { useNavigate } from "react-router";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="text-8xl">404 :(</div>
      <br />
      <div className="cursor-pointer underline" onClick={() => navigate(-1)}>
        Go Back
      </div>
    </div>
  );
};

export default NotFound;
