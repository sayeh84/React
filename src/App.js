import React, { Component } from "react";

import "./App.css";
import HookTimer from "./ReactHook/HookTimer.js";

export const UserContext = React.createContext();
export const ChanelContext = React.createContext();
class App extends Component {
  render() {
    return (
      <div>
        <HookTimer />
      </div>
    );
  }
}

export default App;
