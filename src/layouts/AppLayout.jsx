import { Outlet } from "react-router";

import AppHeader from "../components/header/AppHeader";
import NetworkStatus from "../components/NetworkStatus";

export default function AppLayout() {
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
