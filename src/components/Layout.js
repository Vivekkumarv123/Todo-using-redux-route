import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  padding: 20px;
  background-color: #007bff;
  color: white;
  text-align: center;
`;

const Nav = styled.nav`
  margin: 20px 0;
  text-align: center;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <h1>Todo App</h1>
        <Nav>
          <NavLink to="/">Todo List</NavLink>
          <NavLink to="/add">Add Todo</NavLink>
        </Nav>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
