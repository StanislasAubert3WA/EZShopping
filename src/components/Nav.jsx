import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/user/basket">Basket</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;