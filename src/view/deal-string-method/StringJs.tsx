import useClientRect from "@/components/hooks/useClientRect";
import { getSelectedText } from "@/utils";
import React, { useState } from "react";
import S from "string";

export default function StringJs() {
  const [str, setStr] = useState(null);
  const [rect, ref] = useClientRect();
  //下载 npm i string
  //取中间值
  const between = () => S("<a>This is a link</a>").between("<a>", "</a>").s;
  //去掉破折号，下划线，变成驼峰 FooBAr
  const camelize = () => S("---Foo---bAr---").camelize().s;
  //将输入的内容转化为对人友好的形式
  const humanize = () => S("   capitalize dash-CamelCase_underscore trim  ").humanize().s;
  //剥离给定字符串中所有的标点符号
  const stripPunctuation = () => S("My, st[ring] *full* of %punct)").stripPunctuation().s;

  const handleSelect = () => {
    const str = getSelectedText();
    setStr(str);
  };
  return (
    <div>
      <div>
        {"<a>This is a link</a>"}:{between()}
      </div>
      <div>
        {"---Foo---bAr---"}:{camelize()}
      </div>
      <div>
        {"   capitalize dash-CamelCase_underscore trim  "}:{humanize()}
      </div>
      <div>
        {"My, st[ring] *full* of %punct)"}:{stripPunctuation()}
      </div>
      <button onClick={handleSelect}>打印选中文本</button>
      <div ref={ref}>{str}</div>
      <div>height:{Math.round(rect?.height)}</div>
    </div>
  );
}
