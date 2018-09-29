import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0;
`;

const Logo = styled.img`
  height: 30px;
`;

export default class Credit extends Component {
  render() {
    return (
      <Container>
        <Logo src="static/assets/Logo.png" />
      </Container>
    );
  }
}
