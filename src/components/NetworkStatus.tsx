import React, { useEffect, useState } from "react";

import { ReactComponent as WifiOn } from "../assets/wifi-on.svg";
import { ReactComponent as WifiOff } from "../assets/wifi-off.svg";
import { ReactComponent as Close } from "../assets/close-circle.svg";

const NetworkStatus: React.FC = () => {
  const [show, setShow] = useState(true);
  const [offline, setOffline] = useState(true);

  const reloadPage = () => {
    alert("Reload");
  };

  useEffect(() => {
    setShow(true);
  }, [offline]);

  const NetworkIcon = () => {
    return (
      <div className="h-5 w-5">
        {offline ? (
          <WifiOff className="text-red-400" />
        ) : (
          <WifiOn className="text-green-500" />
        )}
      </div>
    );
  };

  const NetworkMessage = () => {
    return (
      <div className="text-lg font-medium">
        {offline ? (
          <div className="flex space-x-2 items-center">
            <div>Your network is currently offline</div>
            <div className="cursor-pointer " onClick={() => setShow(false)}>
              <Close className="h-6 w-6" />
            </div>
          </div>
        ) : (
          <div className="flex space-x-4 items-center">
            <div>You are back online!</div>
            <div
              className="underline font-normal cursor-pointer"
              onClick={reloadPage}
            >
              Reload Page
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div
        className={`fixed inline-block border  bg-white px-4 py-3 transition-transform ease-in-out duration-200 ${
          !show ? "translate-y-full bottom-0" : "translate-y-0 bottom-10"
        }`}
      >
        <div className="flex space-x-4 items-center">
          <NetworkIcon />
          <NetworkMessage />
        </div>
      </div>

      <button
        className="fixed bottom-10 left-0"
        onClick={() => setOffline(!offline)}
      >
        Toggle
      </button>
    </>
  );
};

export default NetworkStatus;
