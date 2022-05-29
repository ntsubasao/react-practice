import React from "react";

const ColorfulMeassage = (props) => {
  const { color, children } = props; //分割代入(毎回コードを書く必要がなくなる)
  const contentStyle = {
    color: color,
    fontSize: "18px" //font-sizeとCSSでは書かないといけないが、Reactではキャメルケースで書く
  };

  return <p style={contentStyle}>{children}</p>;
}; //引数.message(任意の名前のprops)→今回ならprops.messageになる

export default ColorfulMeassage;

//exportの書き方(変数の前にかける)
// 通常のexportの場合には、分割代入してimportする必要がある
// →例えば、import {ColofulMessage} from "./components/ColorfulMessage";みたいな書き方もできる
//defacult exportは、名前を打ち間違えた場合、エラーはでないが、普通のexportはエラーがでてくれる。

// export const ColorfulMeassage = (props) => {
//   const { color, children } = props; //分割代入(毎回コードを書く必要がなくなる)
//   const contentStyle = {
//     color: color,
//     fontSize: "18px" //font-sizeとCSSでは書かないといけないが、Reactではキャメルケースで書く
//   };

//   return <p style={contentStyle}>{children}</p>;
// }; //引数.message(任意の名前のprops)→今回ならprops.messageになる
