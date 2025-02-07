import { NavLink, Outlet } from "react-router";
import "./startsite.css"
const Startsite = () => {
  return (
    <div className="startsite-container">
      <div className="startsite-header">
      <h1>Multiverse</h1>  
      </div>
      <div className="game-list">
      <NavLink to="/color-game">Color Game</NavLink>  
      <NavLink to="/memory">Memory</NavLink>
      <NavLink to="/jump-and-run">Jump and run</NavLink>
      </div>
     <Outlet />
    </div>
  );
};

export default Startsite;
