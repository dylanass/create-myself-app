import * as React from "react";
// import PageLoader from "@/components/layouts/PageLoader";
import { Spin } from "antd";

interface LazyLoadProps {
  component: () => Promise<{ default: any }>;
  loader?: React.ReactElement;
  [key: string]: any;
}

export default function LazyLoad({
  component,
  loader = <Spin />,
  ...props
}: LazyLoadProps) {
  return (
    <React.Suspense fallback={loader}>
      {React.createElement(React.lazy<any>(component), props)}
    </React.Suspense>
  );
}
