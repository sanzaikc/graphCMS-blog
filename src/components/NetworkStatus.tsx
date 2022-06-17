import React, { useEffect, useState } from "react";

import { ReactComponent as WifiOn } from "../assets/wifi-on.svg";
import { ReactComponent as WifiOff } from "../assets/wifi-off.svg";

import { useNetworkStatus } from "../hooks/useNetworkStatus";

const NetworkStatus: React.FC = () => {
  const { online } = useNetworkStatus();
  const [show, setShow] = useState(false);

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (!online) setShow(true);
  }, [online]);

  const NetworkIcon = () => {
    return (
      <div className="h-5 w-5">
        {!online ? (
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
        {!online ? (
          <div>Your network is currently offline</div>
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
  );
};

export default NetworkStatus;
