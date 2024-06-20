import './Navbar.css'
import NotificationIcon from '../../assets/images/svg/navbarIcons/ic_outline-notifications.svg'
import BarIcon from '../../assets/images/svg/navbarIcons/Rectangle 8.svg'
import ProfilImg from '../../assets/images/png/Ellipse 1.png'
import DownIcon from '../../assets/images/svg/navbarIcons/mdi_chevron-down.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-wrapper">
        <div className="search">
          <input type="text" placeholder='Search for anything...' />
        </div>
        <div className="nav-items">
          <div className="item"><img src={NotificationIcon} alt="" /></div>
          <div className="item"><img src={BarIcon} alt="" /></div>
          <div className="item">
            <img src={ProfilImg} alt="" />
            <span>Big Tech</span>
            <img src={DownIcon} alt="" />
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar
