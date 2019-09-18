import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./Homepage";

function App() {
  return (<div id="app">
    <BrowserRouter>
      <Route exact path="/" component={Homepage}/>
    </BrowserRouter>
  </div>);
}

export default App;
