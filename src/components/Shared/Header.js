import React from 'react';
import styled from 'styled-components';

const Header = ({title}) => {
  return (
    <HeaderContainer>
      <h2>{title}</h2>
      <hr />
    </HeaderContainer>

  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16px 0;

  h2 {
    text-transform: uppercase;
    font-size: 1.75rem;
    letter-spacing: 1px;
  }

  hr {
    width: 10%;
    height: 2px;
    border: none;
    background: black;
  }
`

export default Header;
