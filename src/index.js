import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./component/Home";
import Wallets from "./component/Wallets";
import Exchanges from "./component/Exchanges";
import Mining from "./component/Mining";
import Footer from "./component/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/wallets" component={Wallets}></Route>
            <Route path="/exchanges" component={Exchanges}></Route>
            <Route path="/mining" component={Mining}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));