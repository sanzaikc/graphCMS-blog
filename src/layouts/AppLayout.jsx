import { Outlet } from "react-router";

import AppHeader from "../components/AppHeader";

export default function AppLayout() {
  return (
    <div>
      <AppHeader />
      <div className="app-container bg-red-200">
        <Outlet />
      </div>
    </div>
  );
}
