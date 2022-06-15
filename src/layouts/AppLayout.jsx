import { Outlet } from "react-router";

import AppHeader from "../components/header/AppHeader";

export default function AppLayout() {
  return (
    <div>
      <AppHeader />
      <div className="app-container">
        <Outlet />
      </div>
    </div>
  );
}
