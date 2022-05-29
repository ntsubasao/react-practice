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
