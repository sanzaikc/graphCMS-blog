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
      <div className="text-sm font-medium lg:text-lg">
        {!online ? (
          <div>Your network is currently offline.</div>
        ) : (
          <div className="flex items-center space-x-2">
            <div>You are back online!</div>
            <div
              className="cursor-pointer font-normal underline"
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
      className={`fixed inline-block border bg-white px-4 py-3  shadow transition-transform duration-200 ease-in-out lg:left-1/2 lg:-translate-x-1/2 ${
        !show
          ? "top-0 z-0 -translate-y-full"
          : "top-14 z-10 translate-y-0  lg:top-10"
      }`}
    >
      <div className="flex items-center space-x-4">
        <NetworkIcon />
        <NetworkMessage />
      </div>
    </div>
  );
};

export default NetworkStatus;
