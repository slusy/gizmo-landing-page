import React from "react";

type Props = {
  children?: React.ReactNode;
};

const InnerPageLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="max-w-[1300px] mx-auto h-screen px-4 lg:px-0">
      <div>{children}</div>
    </div>
  );
};

export default InnerPageLayout;
