var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

document.addEventListener("DOMContentLoaded", function (event) {

  marked.setOptions({
    sanitize: true
  });

  var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
      _classCallCheck(this, Main);

      var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

      var demo = "Heading\r=======\rSub-heading\r-----------\r### Another deeper heading\rParagraphs are separatedby a blank line.\r\rLeave 2 spaces at the end of a line to do a  \rline break\r\rText attributes *italic*, **bold**,`monospace`, ~~strikethrough~~ .\r\rShopping list:\r* apples\r* oranges\r* pears\r\rNumbered list:\r1. apples\r2. oranges\r3. pears\r\rThe rain---not the reign---in Spain.";
      _this.state = { demo: demo, input: demo, output: marked(demo) };
      return _this;
    }

    _createClass(Main, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(
          "div",
          { id: "main", className: "container" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "h4",
              null,
              "Markdown Previewer"
            ),
            React.createElement(
              "button",
              { onClick: function onClick() {
                  return _this2.setState({ input: "", output: marked("") });
                } },
              "Clear"
            ),
            React.createElement(
              "button",
              { onClick: function onClick() {
                  return _this2.setState({ input: _this2.state.demo, output: marked(_this2.state.demo) });
                } },
              "Demo"
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col" },
              React.createElement(
                "div",
                null,
                "Input"
              ),
              React.createElement("textarea", { onChange: function onChange(event) {
                  return _this2.setState({ input: event.target.value, output: marked(event.target.value) });
                }, value: this.state.input, className: "field" })
            ),
            React.createElement(
              "div",
              { className: "col" },
              React.createElement(
                "div",
                null,
                "Output"
              ),
              React.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.output }, className: "field" })
            )
          )
        );
      }
    }]);

    return Main;
  }(React.Component); //end Main class

  // <div dangerouslySetInnerHTML={{ __html: this.state.description }} />

  ReactDOM.render(React.createElement(Main, null), document.getElementById("react-anchor"));
}); //fin DOMContentLoaded


/*
//////////////////////////////////
import React from 'react';

export default ({value, method}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => method(e)}
    />
  )
};


/////////////////////////////////////


import React from 'react';
import { render } from 'react-dom';
import Input from './Input';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'initial value',
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  
  onChangeValue(newVal) {
    this.setState({ value: newVal });
  }
  
  render() {
    return (
    <div style={styles}>
      <Input 
        value={this.state.value} 
        method={this.onChangeValue}
      />
    </div>
    );
  }
}


render(<App />, document.getElementById('root'));




/////////////////////////////////////


 defaultValue={defaultContent}




//GlobalEventHandlers.onchange
  
  //GlobalEventHandlers.oninput
marked('# Marked in browser\n\nRendered by **marked**.');




  var demo = "Heading\r=======\rSub-heading\r-----------\r### Another deeper heading\rParagraphs are separatedby a blank line.\r\rLeave 2 spaces at the end of a line to do a  \rline break\r\rText attributes *italic*, **bold**,`monospace`, ~~strikethrough~~ .\r\rShopping list:\r* apples\r* oranges\r* pears\r\rNumbered list:\r1. apples\r2. oranges\r3. pears\r\rThe rain---not the reign---in Spain."




*/