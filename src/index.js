import React from "react"; //React17ではJSXを使用するだけの場合、Reactのimportは必須ではない
import ReactDOM from "react-dom";
import App from "./App"; //他のファイルからインポートことで、コンポーネント化して使うことができる(.カレントディレクトリ内の/Appってことかな？)

ReactDOM.render(<App />, document.getElementById("root"));
