import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@xstyled/styled-components";

import App from "./App";
import colors from "./styles/colors";

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  colors
};

const Root = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
