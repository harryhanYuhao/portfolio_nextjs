import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-6xl text-center font-medium pt-10">{children}</div>;
};

export default Title;
