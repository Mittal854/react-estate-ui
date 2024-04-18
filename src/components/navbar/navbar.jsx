import './navbar.css'
import {useState} from 'react'
function Navbar(){
    const [open, setOpen] = useState(false)

    // const user = true;
    return (
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>LamaEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          <a href="/">Sign In</a>
          {/* { user ? (
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' />
            <span>John Doe</span>
            <link to="/profile">Profile</link>
          </div>
        ) :(<><a href="/">Sign In</a> */}
          <a href="/" className="register">
            Sign Up
          </a>
          {/* </a></>)} */}
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt="menu icon"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;