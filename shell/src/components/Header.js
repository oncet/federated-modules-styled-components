import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledUl = styled.ul`
  border: 1px solid;
`;

const Header = () => (
  <nav>
    <StyledUl>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/foo">Foo</Link>
      </li>
      <li>
        <Link to="/bar">Bar</Link>
      </li>
    </StyledUl>
  </nav>
);

export default Header;
