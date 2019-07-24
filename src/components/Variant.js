import React, { Component } from "react";
import styled from "@xstyled/styled-components";

import { buttonVariants, sizeVariants } from "../styles/variant";

const Container = styled.box`
  ${sizeVariants};
  ${buttonVariants};
`;

class Variant extends Component {
  render() {
    return (
      <Container size={"lg"} type={"secondary"}>
        Variant
      </Container>
    );
  }
}

export default Variant;
