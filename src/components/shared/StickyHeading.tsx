import React from "react";

import TheDivider from "./TheDivider";

interface StickyHeadingProps {
  sticky?: boolean;
  children?: React.ReactNode;
}

const StickyHeading: React.FC<StickyHeadingProps> = ({
  children,
  sticky = false,
}) => {
  return (
    <div
      className={`${
        sticky && " sticky top-16 z-10 "
      }bg-white bg-opacity-80 pb-2 backdrop-blur`}
    >
      {/* dark:bg-slate-800 */}
      <TheDivider />
      <h1 className="my-4 text-xl font-semibold tracking-wider lg:text-2xl ">
        {children}
      </h1>
    </div>
  );
};

export default StickyHeading;
