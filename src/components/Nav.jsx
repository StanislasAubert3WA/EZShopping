import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';
import {useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector((state) => state.user.user)
  return (
    <NavBar>
      <h1>EZ Shop</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">{user.firstname}</Link>
          </li>
          <li>
            <Link to="/user/cart">Cart</Link>
          </li>
        </ul>
      <Outlet />
    </NavBar>
  )
};

export default Nav;

const NavBar = styled.div`
display: flex;
justify-content: space-between;
padding: 0.5rem 2rem;
align-items: center;
background: gold;
color: black;
  ul{
    display: flex;
  }
  li{
    list-style : none;
    padding: 0.4rem 1rem;
    a{
      text-decoration: none;
      color: black;
      text-transform: uppercase;
    }
  }

`