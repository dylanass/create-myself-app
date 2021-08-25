import React, { useState } from "react";
// 引入编辑器组件
import BraftEditor from "braft-editor";
// // 引入编辑器样式
import "braft-editor/dist/index.css";
import usePersistFn from "@/components/hooks/usePersistFn";
import "./BraftEditor.scss";

interface WrapperComponentProps {
  [key: string]: any;
}
const WrapperComponent = ({ ...props }: WrapperComponentProps) => {
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(null)
  );
  const handleEditorChange = usePersistFn((editorState) => {
    // 将raw格式的数据转换成editorState
    //const rawString = `{"blocks":[{"key":"9hu83","text":"Hello World!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}`;
    //const editorState = BraftEditor.createEditorState(rawString);

    // 将html字符串转换成editorState
    //const htmlString = `<p>Hello <b>World!</b></p>`;
    //const editorState2 = BraftEditor.createEditorState(htmlString);

    setEditorState(editorState);
  });

  const submitContent = usePersistFn((editorState) => {
    const htmlContent = editorState.toHTML();
    const rawJSON = editorState.toRAW(true);
    //用来回显 html
    console.log("htmlContent :>> ", htmlContent);
    //用来存储数据格式
    console.log("rawJSON :>> ", rawJSON);
  });

  return (
    <div className="braft-editor-wrapper">
      <BraftEditor
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
      <p>内容展示区域：</p>
      <div
        className="braft-output-content"
        dangerouslySetInnerHTML={{ __html: editorState.toHTML() }}
      ></div>
    </div>
  );
};

export default React.memo<WrapperComponentProps>(WrapperComponent);
