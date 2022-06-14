import React from "react";

export const ArticleGrid = ({ children }: React.PropsWithChildren) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};
