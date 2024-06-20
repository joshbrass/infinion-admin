import "./Sidebar.css";
import Logo from "../../assets/images/svg/arcticons_google-messages.svg";
import { Link } from "react-router-dom";
import newCamIcon from "../../assets/images/svg/sidebarIcons/material-symbols_add.svg";
import HelpIcon from "../../assets/images/svg/sidebarIcons/material-symbols_help-outline.svg";
import { menu } from "../../constants/data";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="header_section">
        <img src={Logo} alt="" />
        <h1>Scrutz</h1>
      </div>
      <div>
        <Link to="/new-campaign" className="new-campaign-btn">
          <img src={newCamIcon} alt="" />
          <span>New campaign</span>
        </Link>
      </div>
      <div className="navigation_section">
        {menu.map((menu, index) => (
          <Link key={index + 1} to={menu.url} className="list-item">
            <img src={menu.icon} alt="" className="icon" />
            <span>{menu.title}</span>
          </Link>
        ))}
      </div>
      <div className="help_section">
        <div className="help-section-inner">
          <img src={HelpIcon} alt="" />
          <h3>Need help</h3>
          <p>We are readily available to provide help</p>
          <button>Get help</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
