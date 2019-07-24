import React, { Component } from "react";
import styled from "@xstyled/styled-components";

const Container = styled.h1`
  font-size: 20rpx;
  line-height: 24rpx;
`;

class REM extends Component {
  render() {
    return <Container>Hello World</Container>;
  }
}

export default REM;
