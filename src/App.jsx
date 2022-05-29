import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true); //左がFalseの場合、右側の処理をやってくれる(論理演算子を使わないと再レンダリングでエラーがおきる)
      } else {
        faceShowFlag && setFaceShowFlag(false); //左がTrueの場合、右側を返す
      }
    }
  }, [num]); //一回だけ表示させて再レンダリングしたくない場合は、第2引数の[]配列を空にする(よく使うらしい),値を入れた場合はその値にだけ関心をもつ(今回ならnum)

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか</ColofulMessage>
      <ColofulMessage color="pink">元気です！！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(*´ω｀*)</p>}
    </>
  );
}; //propsとして、colorを今回は入れる（名前は任意）
//&&(かつ)左の要素がTrueのとき、右を返すという機能がある(FaceShowFlagがTrueのとき,絵文字をレンダリングする)

export default App; //他のファイルでも使えるようにしている
