import React from "react";

import AppLogo from "./AppLogo";

const AppHeader: React.FC = () => {
  return (
    <div>
      <div className="app-container">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white py-4 ">
          {/* dark:bg-slate-800 */}
          <AppLogo />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
