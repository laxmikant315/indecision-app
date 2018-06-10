
var count = 0;

var addOne = function addOne() {

  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {

  count--;
  renderCounterApp();
};

var reset = function reset() {

  count = 0;
  renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {

  var ele = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count:",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Reset"
    )
  );
  var appRoot = document.getElementById("app");

  ReactDOM.render(ele, appRoot);
};

renderCounterApp();
