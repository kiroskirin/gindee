import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: flex;
`;

const Logo = styled.img`
  height: 50px;
`;

export default class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <Logo src="static/assets/Logo.png" />
      </Container>
    );
  }
}
