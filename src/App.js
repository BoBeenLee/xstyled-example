import React from "react";
import { createGlobalStyle } from "styled-components";

import Colors from "./components/Colors";
import Responsive from "./components/Responsive";
import Variant from "./components/Variant";
import REM from "./components/REM";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 20px;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">Hello World</header>
      <Colors />
      <Responsive />
      <Variant />
      <REM />
    </div>
  );
}

export default App;
