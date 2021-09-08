import React from "react";
import { Spin } from "antd";

const spinStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

interface BasicSpinProps {
  tip?: string;
  size?: "small" | "default" | "large";
  spinning?: boolean;
  delay?: number;
  indicator?: React.ReactElement<HTMLElement, string | React.JSXElementConstructor<any>>;
  wrapperClassName?: string;
}

export default function BasicSpin({
  size = "large",
  tip = "Loading...",
  ...props
}: BasicSpinProps) {
  return (
    <div style={spinStyles}>
      <Spin size={size} tip={tip} {...props}></Spin>
    </div>
  );
}
