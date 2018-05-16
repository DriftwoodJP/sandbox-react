"use strict";

//コンポーネントの作成
function MyComponent(props) {
  return React.createElement(
    "div",
    null,
    "props1 : ",
    props.myPropsName1,
    "props2 : ",
    props.myPropsName2
  );
}

//コンポーネントの描画
ReactDOM.render(React.createElement(MyComponent, { myPropsName1: "string", myPropsName2: 1 }), document.getElementById("app"));