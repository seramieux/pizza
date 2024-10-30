import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#F5F5F5"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="65" rx="10" ry="10" width="285" height="260" />
    <rect x="0" y="350" rx="10" ry="10" width="257" height="30" />
    <rect x="0" y="400" rx="10" ry="10" width="285" height="10" />
    <rect x="0" y="420" rx="10" ry="10" width="270" height="10" />
    <rect x="0" y="440" rx="10" ry="10" width="100" height="10" />
  </ContentLoader>
);

export default Skeleton;
