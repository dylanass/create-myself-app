import React from "react";

interface WorkListProps {
  [key: string]: any;
}
const WorkList = ({ ...props }: WorkListProps) => {
  return <div>WorkList</div>;
};

export default React.memo<WorkListProps>(WorkList);
