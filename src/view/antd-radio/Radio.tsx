import React, { useState, useRef } from "react";
import { Radio } from "antd";
import usePersistFn from "@/components/hooks/usePersistFn";

export default function RadioComponent() {
  const [value, setValue] = useState(null);
  const ref = useRef(null);
  const onChange = usePersistFn((e) => {
    setValue(e.target.value);
  });

  //radio 取消选中项
  const onResetValue = usePersistFn((e) => {
    if (`${e.target.value}` === `${value}`) {
      setValue(undefined);
    }
  });

  return (
    <div onClick={onResetValue}>
      <Radio.Group onChange={onChange} value={value} ref={ref}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    </div>
  );
}
