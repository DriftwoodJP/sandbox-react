//コンポーネントの作成
function MyH1() {
  return <h1>Hello, world!</h1>;
}
function MyH2() {
  return <h2>texttext</h2>;
}
function MyComponent() {
  return (
    <div>
      <MyH1 />
      <MyH2 />
    </div>
  );
}
//コンポーネントの描画
ReactDOM.render(<MyComponent />, document.getElementById("app"));
