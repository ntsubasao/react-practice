import React, { useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0); //簡単に動的な値を作ることができる(第一引数のところにはnumなど任意の変数名を入れられる(動的に変わるnum)、第2引数numを変更するための関数(numを更新するためのsetnum)）
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか</ColofulMessage>
      <ColofulMessage color="pink">元気です！！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
}; //propsとして、colorを今回は入れる（名前は任意）

export default App; //他のファイルでも使えるようにしている
