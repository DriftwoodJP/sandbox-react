//子コンポーネント
class ChildComopnent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    setInterval(() => {
      this.setState({
        count: ++this.state.count
      });
    }, 1000);
  }
  getCount() {
    return this.state.count;
  }
  render() {
    return (
      <div>
        <p>ChildComopnent</p>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
//親コンポーネント
class ParentComopnent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  getCount() {
    this.setState({
      count: this.refs.MyChildComponent.getCount()
    });
  }
  render() {
    return (
      <div>
        <p onClick={this.getCount.bind(this)}>ParentComopnent</p>
        <p>{this.state.count}</p>
        <ChildComopnent ref="MyChildComponent" />
      </div>
    );
  }
}
//コンポーネントの描画
ReactDOM.render(<ParentComopnent />, document.getElementById("app"));
