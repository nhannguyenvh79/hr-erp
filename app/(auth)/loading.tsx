import React from "react";
import ContentLoader from "react-content-loader";

const ThreeDots = (props: any) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <ContentLoader
        viewBox="0 0 400 160"
        height={160}
        width={400}
        backgroundColor="transparent"
        {...props}
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    </div>
  );
};

export default ThreeDots;
