"use strict";

//コンポーネントの作成
function MyH1() {
  return React.createElement(
    "h1",
    null,
    "Hello, world!"
  );
}
function MyH2() {
  return React.createElement(
    "h2",
    null,
    "texttext"
  );
}
function MyComponent() {
  return React.createElement(
    "div",
    null,
    React.createElement(MyH1, null),
    React.createElement(MyH2, null)
  );
}
//コンポーネントの描画
ReactDOM.render(React.createElement(MyComponent, null), document.getElementById("app"));