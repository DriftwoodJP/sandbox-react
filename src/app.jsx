//コンポーネントの作成
class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateVal: 0
    };
    this.incrementState = this.incrementState.bind(this);
  }
  //Stateの加算
  incrementState() {
    this.setState({
      stateVal: this.state.stateVal + 1
    });
  }
  componentWillMount() {
    console.log("componentWillMount(): コンポーネントのマウント前");
  }
  componentDidMount() {
    console.log("componentDidMount(): コンポーネントのマウント後");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps(): コンポーネントが受け取るpropsが変化");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate(): コンポーネントがアップデートされる前1");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate(): コンポーネントがアップデートされる前2");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate(): コンポーネントがアップデートされた後");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount(): コンポーネントがアンマウントされた後");
  }
  render() {
    return (
      <div>
        <p>props:{this.props.propVal}</p>
        <p>state:{this.state.stateVal}</p>
        <input type="button" value="stateの加算" onClick={this.incrementState} />
      </div>
    );
  }
}
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propVal: 0,
      isComponent: false
    };
    this.incrementProps = this.incrementProps.bind(this);
    this.ｍountComponent = this.ｍountComponent.bind(this);
  }
  //propsの加算
  incrementProps() {
    this.setState({
      propVal: this.state.propVal + 1
    });
  }

  ｍountComponent() {
    this.setState({
      isComponent: !this.state.isComponent
    });
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="Numberコンポーネントのマウント切り替え"
          onClick={this.ｍountComponent}
        />
        <br />
        {(() => {
          if (this.state.isComponent) {
            return <Number propVal={this.state.propVal} />;
          } else {
            return null;
          }
        })()}
        <input type="button" value="propsの加算" onClick={this.incrementProps} />
        <br />
      </div>
    );
  }
}
//コンポーネントの描画
ReactDOM.render(<MyComponent />, document.getElementById("app"));
