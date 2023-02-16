import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';
import {useDispatch, useSelector } from "react-redux";
import { getTheme, toggleTheme } from "../store/themeSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)
  const theme = useSelector((state) => state.theme)

  

  const toggle = () => {
    dispatch(toggleTheme())
  }
  return (
    <NavBar className={getTheme}>
      <nav>
        <h1>EZ Shop</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">{user.firstname ? user.firstname : "User"}</Link>
          </li>
          <li>
            <Link to="/user/cart">Cart</Link>
          </li>
        </ul>
        <div>
          <button onClick={toggle} >
            {theme !== "light" ? "🌅 Light Mode" : "🌑 Dark Mode"}
          </button>
        </div>
      </nav>
      <Outlet />
    </NavBar>
  )
};

export default Nav;

const NavBar = styled.div`
nav{
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  align-items: center;
}
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