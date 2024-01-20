import React from "react";

const Title = ({className, children }: {className?: string, children: React.ReactNode }) => {
  return <div className={`${className} text-[clamp(40px,3vw,70px)] text-center font-medium pt-10`}>{children}</div>;
};

export default Title;
