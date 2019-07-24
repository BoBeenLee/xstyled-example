import { breakpoints } from "@xstyled/system";
import React, { Component } from "react";

import styled, { css } from "styled-components";

const Container = styled.div(
  breakpoints({
    xs: css`
      color: red;
    `,
    md: css`
      color: blue;
    `,
    lg: css`
      color: green;
    `
  })
);

class Responsive extends Component {
  render() {
    return <Container>Responsive</Container>;
  }
}

export default Responsive;
