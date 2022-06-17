import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";

import AppHeader from "../components/header/AppHeader";
import NetworkStatus from "../components/NetworkStatus";

export default function AppLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="relative">
      <AppHeader />
      <div className="app-container pb-10 lg:pb-16">
        <Outlet />
        <NetworkStatus />
      </div>
    </div>
  );
}
