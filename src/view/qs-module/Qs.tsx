import React from "react";
import qs from "qs";
import assert from "assert";

export default function Qs() {
  const testResults = [];

  /**
   * @description Document
   * @see https://www.npmjs.com/package/qs
   */

  //第一题
  let obj = qs.parse("a=c");
  try {
    assert.deepEqual(obj, { a: "c" });
    testResults[0] = "true";
  } catch {
    testResults[0] = "false";
  }

  //第二题
  let str = qs.stringify(obj);
  try {
    assert.equal(str, "a=c");
    testResults[1] = "true";
  } catch {
    testResults[1] = "false";
  }

  //第三题
  try {
    assert.deepStrictEqual(qs.parse("foo[bar]=baz"), {
      foo: {
        bar: "baz",
      },
    });
    testResults[2] = "true";
  } catch {
    testResults[2] = "false";
  }

  //第四题 decodeURIComponent
  try {
    assert.deepStrictEqual(qs.parse("q=%E6%94%AF%E4%BB%98%E5%AE%9D"), {
      q: "支付宝",
    });
    testResults[3] = "true";
  } catch {
    testResults[3] = "false";
  }

  return (
    <div>
      <h3>结果</h3>
      <ul>
        {testResults.map((val, index) => (
          <li key={index}>
            {`第${index + 1}题`}:{val}
          </li>
        ))}
      </ul>
    </div>
  );
}
