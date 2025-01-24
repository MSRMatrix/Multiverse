import { NavLink, Outlet } from "react-router";
const Startsite = () => {
  return (
    <>
      <h1>Multiverse</h1>
      <NavLink to="/color-game">Color Game</NavLink>
      <NavLink to="/memory">Memory</NavLink>
      <Outlet />
    </>
  );
};

export default Startsite;
