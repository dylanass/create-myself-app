import React, { useState, useCallback } from "React";

interface RectItem {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}
interface Item {
  ref: () => void;
  rect: RectItem;
}
/**
 * @description 测量 DOM 节点 
 * @returns {Item[]}
 */
function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

export default useClientRect;
