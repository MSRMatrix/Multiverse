import { NavLink, Outlet, useNavigate } from "react-router";
import "./startsite.css";
import { useState } from "react";
import example from "../../assets/example.png"

const Startsite = () => {
  const [phone, setPhone] = useState([
    { name: "color-game", icon: example },
    { name: "memory", icon: example },
    { name: "jump-and-run", icon: example },
  ]);

  const navigate = useNavigate()

  return (
    <div className="multiverse-phone">
      <div className="phone-top">
        <div className="camera-notch"></div>
      </div>
      <div className="phone-screen">
        <div className="phone-name">Multiverse</div>
        <div className="apps">
          {phone.map((app, index) => (
            <div key={index} className="app-div">
              <NavLink to={`/${app.name}`}><img src={app.icon} alt={app.name.split("-").join(" ")}/></NavLink> 
              <NavLink to={`/${app.name.split("-").join(" ")}`}>{app.name}</NavLink>
            </div>
          ))}
        </div><Outlet />
      </div>
      <div onClick={() => navigate("/")} className="home-button"></div>
      
    </div>
  );
};

export default Startsite;
