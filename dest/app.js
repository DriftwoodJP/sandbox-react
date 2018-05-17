"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//コンポーネントの作成
var Number = function (_React$Component) {
  _inherits(Number, _React$Component);

  function Number(props) {
    _classCallCheck(this, Number);

    var _this = _possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).call(this, props));

    _this.state = {
      stateVal: 0
    };
    _this.incrementState = _this.incrementState.bind(_this);
    return _this;
  }
  //Stateの加算


  _createClass(Number, [{
    key: "incrementState",
    value: function incrementState() {
      this.setState({
        stateVal: this.state.stateVal + 1
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("componentWillMount(): コンポーネントのマウント前");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("componentDidMount(): コンポーネントのマウント後");
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      console.log("componentWillReceiveProps(): コンポーネントが受け取るpropsが変化");
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      console.log("shouldComponentUpdate(): コンポーネントがアップデートされる前1");
      return true;
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      console.log("componentWillUpdate(): コンポーネントがアップデートされる前2");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("componentDidUpdate(): コンポーネントがアップデートされた後");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("componentWillUnmount(): コンポーネントがアンマウントされた後");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "props:",
          this.props.propVal
        ),
        React.createElement(
          "p",
          null,
          "state:",
          this.state.stateVal
        ),
        React.createElement("input", { type: "button", value: "state\u306E\u52A0\u7B97", onClick: this.incrementState })
      );
    }
  }]);

  return Number;
}(React.Component);

var MyComponent = function (_React$Component2) {
  _inherits(MyComponent, _React$Component2);

  function MyComponent(props) {
    _classCallCheck(this, MyComponent);

    var _this2 = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));

    _this2.state = {
      propVal: 0,
      isComponent: false
    };
    _this2.incrementProps = _this2.incrementProps.bind(_this2);
    _this2.ｍountComponent = _this2.ｍountComponent.bind(_this2);
    return _this2;
  }
  //propsの加算


  _createClass(MyComponent, [{
    key: "incrementProps",
    value: function incrementProps() {
      this.setState({
        propVal: this.state.propVal + 1
      });
    }
  }, {
    key: "\uFF4DountComponent",
    value: function ountComponent() {
      this.setState({
        isComponent: !this.state.isComponent
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        null,
        React.createElement("input", {
          type: "button",
          value: "Number\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30DE\u30A6\u30F3\u30C8\u5207\u308A\u66FF\u3048",
          onClick: this.ｍountComponent
        }),
        React.createElement("br", null),
        function () {
          if (_this3.state.isComponent) {
            return React.createElement(Number, { propVal: _this3.state.propVal });
          } else {
            return null;
          }
        }(),
        React.createElement("input", { type: "button", value: "props\u306E\u52A0\u7B97", onClick: this.incrementProps }),
        React.createElement("br", null)
      );
    }
  }]);

  return MyComponent;
}(React.Component);
//コンポーネントの描画


ReactDOM.render(React.createElement(MyComponent, null), document.getElementById("app"));