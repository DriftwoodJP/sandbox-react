// @flow
//コンポーネントの作成
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myState: 1
    };
    //1秒ごとにStateを更新する
    setInterval(() => {
      this.setState({
        myState: this.state.myState + 1
      });
    }, 1000);
  }

  render() {
    return <div>myState : {this.state.myState}</div>;
  }
}
//コンポーネントの描画
ReactDOM.render(<MyComponent />, document.getElementById("app"));
