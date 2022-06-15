import React from "react";

import AppLogo from "./AppLogo";

const AppHeader: React.FC = () => {
  return (
    <div className="sticky top-0 z-10 bg-white backdrop-blur bg-opacity-80">
      <div className="app-container relative w-full py-4">
        {/* dark:bg-slate-800 */}
        <AppLogo />
      </div>
    </div>
  );
};

export default AppHeader;
