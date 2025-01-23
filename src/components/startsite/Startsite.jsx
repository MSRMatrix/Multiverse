import { NavLink, Outlet } from "react-router";
import HomeButton from "../homeButton/HomeButton";
import { useState } from "react";

const Startsite = () => {
    const [backButton, setBackButton] = useState(false)
  return (
    <>
      <h1>Multiverse</h1>
      <NavLink to="/color-game">Color Game</NavLink>
      <Outlet />
      {backButton ? <HomeButton /> : ""}
    </>
  );
};

export default Startsite;
