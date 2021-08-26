import React from "react";
import v from "voca";

export default function Voca() {
  const camelCase = (str) => v.camelCase(str);
  const isAlphaDigit = (str) => v.isAlphaDigit(str);
  return (
    <div>
      <div>
        {"foo Bar =>"}
        {camelCase("foo Bar")}
      </div>
      <div>
        {"FooBar =>"}
        {camelCase("FooBar")}
      </div>
      <div>
        {"---Foo---bAr--- =>"}
        {camelCase("---Foo---bAr---")}
      </div>
      <div>
        {"year2020 =>"}
        {isAlphaDigit("year2020") && <span>true</span>}
      </div>
    </div>
  );
}
