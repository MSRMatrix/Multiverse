import { NavLink, Outlet } from "react-router";

const Startsite = () => {
  return (
    <>
      <Outlet />
      <h1>Multiverse</h1>
      <NavLink to="/color-game">Color Game</NavLink>
    </>
  );
};

export default Startsite;
