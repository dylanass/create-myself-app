import React from "react";

interface TableListProps {
  [key: string]: any;
}
const TableList = ({ ...props }: TableListProps) => {
  return <div>TableList</div>;
};

export default React.memo<TableListProps>(TableList);
