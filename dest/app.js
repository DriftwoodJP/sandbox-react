"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//子コンポーネント
var ChildComopnent = function (_React$Component) {
  _inherits(ChildComopnent, _React$Component);

  function ChildComopnent(props) {
    _classCallCheck(this, ChildComopnent);

    var _this = _possibleConstructorReturn(this, (ChildComopnent.__proto__ || Object.getPrototypeOf(ChildComopnent)).call(this, props));

    _this.state = {
      count: 0
    };
    setInterval(function () {
      _this.setState({
        count: ++_this.state.count
      });
    }, 1000);
    return _this;
  }

  _createClass(ChildComopnent, [{
    key: "getCount",
    value: function getCount() {
      return this.state.count;
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
          "ChildComopnent"
        ),
        React.createElement(
          "p",
          null,
          this.state.count
        )
      );
    }
  }]);

  return ChildComopnent;
}(React.Component);
//親コンポーネント


var ParentComopnent = function (_React$Component2) {
  _inherits(ParentComopnent, _React$Component2);

  function ParentComopnent(props) {
    _classCallCheck(this, ParentComopnent);

    var _this2 = _possibleConstructorReturn(this, (ParentComopnent.__proto__ || Object.getPrototypeOf(ParentComopnent)).call(this, props));

    _this2.state = {
      count: 0
    };
    return _this2;
  }

  _createClass(ParentComopnent, [{
    key: "getCount",
    value: function getCount() {
      this.setState({
        count: this.refs.MyChildComponent.getCount()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          { onClick: this.getCount.bind(this) },
          "ParentComopnent"
        ),
        React.createElement(
          "p",
          null,
          this.state.count
        ),
        React.createElement(ChildComopnent, { ref: "MyChildComponent" })
      );
    }
  }]);

  return ParentComopnent;
}(React.Component);
//コンポーネントの描画


ReactDOM.render(React.createElement(ParentComopnent, null), document.getElementById("app"));