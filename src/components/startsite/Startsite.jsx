import { NavLink, Outlet, useNavigate } from "react-router";
import "./startsite.css";
import { useState } from "react";
import example from "../../assets/example.png"

const Startsite = () => {
  const [phone, setPhone] = useState([
    { name: "Color Game", url: "color-game", icon: example },
    { name: "Memory", url: "memory", icon: example },
    { name: "Jump N Run", url: "jump-and-run", icon: example },
    { name: "Settings", url: "settings", icon: example },
  ]);
  
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = () => {
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
    navigate("/");
  };

  return (
    <div className={`multiverse-phone ${isFullscreen ? "fullscreen" : ""}`}>
      <div className="phone-top">
        <div className="camera-notch"></div>
      </div>
      <div className="phone-screen">
        <div className="apps">
          {!isFullscreen
            ? phone.map((app, index) => (
                <div key={index} className="app-div">
                  <NavLink onClick={enterFullscreen} to={`/${app.url}`}>
                    <img src={app.icon} alt={app.name} />
                  </NavLink>
                  <NavLink onClick={enterFullscreen} to={`/${app.url}`}>
                    {app.name}
                  </NavLink>
                </div>
              ))
            : ""}
        </div>
        <Outlet />
      </div>
      <div onClick={exitFullscreen} className="home-button"></div>
    </div>
  );
};

export default Startsite;
