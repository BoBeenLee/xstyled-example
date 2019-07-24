import React from "react";
import styled from "@xstyled/styled-components";

const Container = styled.box``;

const ColorBox1 = styled.box`
  color: green600;
`;

const ColorBox2 = styled.box`
  color: gren500;
`;

const ColorBox3 = styled.box`
  color: green550;
`;

const ColorBox4 = styled.box`
  color: green600;
`;

class Colors extends React.Component {
  render() {
    return (
      <Container>
        <ColorBox1>ColorBox1</ColorBox1>
        <ColorBox2>ColorBox2</ColorBox2>
        <ColorBox3>ColorBox3</ColorBox3>
        <ColorBox4>ColorBox4</ColorBox4>
      </Container>
    );
  }
}

export default Colors;
