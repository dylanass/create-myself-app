import React from "react";

interface BasicPageProps {
  [key: string]: any;
}

const BasicPage = (props: BasicPageProps) => {
  return <div>basic</div>;
};

export default React.memo<BasicPageProps>(BasicPage);
