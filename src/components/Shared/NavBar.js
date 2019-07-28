import React from 'react';
import styled from 'styled-components';
import logo from '../../imgs/brand.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <NavBarContainer>
      <div id="brand"><img src={logo} alt="brand" /></div>
      <ul className="nav">
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/blog"><li>Blog</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </NavBarContainer>
  )
}


const NavBarContainer = styled.div`
  height: 35vh;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #brand {
    height: 90%;

    img {
      max-height: 100%;
    }
  }

  ul {
    list-style: none;
    display: flex;
    padding: 0;
    position: relative;

    &::after, &::before {
      content: '';
      height: 2px;
      width: 120px;
      position: absolute;
      background: black;
      animation: navSpread 0.5s ease 0.2s forwards;
      transform: scale(0);
    }

    &::before {
      top: 50%;
      right: 100%;
      transform-origin: right;
    }

    &::after {
      top: 50%;
      left: 100%;
      transform-origin: left;
    }

    li {
      margin: 0 1rem;
      color: black;
      letter-spacing: 2px;
      text-decoration: none;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.15);
      }
    }
  }

  @keyframes navSpread {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
`

export default NavBar;
