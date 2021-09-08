import * as React from "react";
import BasicSpin from "./BasicSpin";

interface LazyLoadProps {
  component: () => Promise<{ default: any }>;
  loader?: React.ReactElement;
  [key: string]: any;
}

export default function LazyLoad({ component, loader = <BasicSpin />, ...props }: LazyLoadProps) {
  return (
    <React.Suspense fallback={loader}>
      {React.createElement(React.lazy<any>(component), props)}
    </React.Suspense>
  );
}
