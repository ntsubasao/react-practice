import React from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか</ColofulMessage>
      <ColofulMessage color="pink">元気です！！</ColofulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}; //propsとして、colorを今回は入れる（名前は任意）

export default App; //他のファイルでも使えるようにしている
