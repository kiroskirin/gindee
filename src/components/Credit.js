import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Logo = styled.img`
  height: 30px;
`;

export default class Credit extends Component {
  render() {
    return (
      <Container>
        <span>Product of </span>
        <Logo src="static/assets/Logo.png" />
      </Container>
    );
  }
}
