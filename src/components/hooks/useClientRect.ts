import { useState, useCallback } from "react";

/**
 * @typedef {Object} RectItem
 * @property {number} bottom
 * @property {number} height
 * @property {number} left
 * @property {number} right
 * @property {number} top
 * @property {number} width
 * @property {number} x
 * @property {number} y
 */
/**
 * @typedef {Object} Item
 * @property {()=>void} ref
 * @property {RectItem} rect
 */

/**
 * @description 测量 DOM 节点
 * @returns {[...Item]}
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
