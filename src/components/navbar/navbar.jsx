// import "./navbar.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const user = false;
//   function togglePopup() {
//     var popup1 = document.getElementById("popup-1");
//     var popup2 = document.getElementById("popup-2");

//     popup1.classList.toggle("active");
//     if (popup2.classList.contains("active")) {
//       popup2.classList.remove("active");
//     }
//   }

//   function togglePopup1() {
//     var popup1 = document.getElementById("popup-1");
//     var popup2 = document.getElementById("popup-2");

//     popup2.classList.toggle("active");
//     if (popup1.classList.contains("active")) {
//       popup1.classList.remove("active");
//     }
//   }

//   // Register Functionality
//   function register() {
// var name = document.getElementById("registerName").value;
// var phoneNumber = document.getElementById("registerPhoneNumber").value;
// var email = document.getElementById("registerEmail").value;
// var password = document.getElementById("registerPassword").value;

// if (name === "" || phoneNumber === "" || email === "" || password === "") {
//   alert("Please fill in all fields");
//   return;
// }

// var num = /^[789]\d{9}$/;
// if (!phoneNumber.match(num)) {
//   alert("Invalid Phone Number");
//   return false;
// }

// var mailformat = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
// if (!email.match(mailformat)) {
//   alert("Invalid email");
//   return false;
// }

// var userData = {
//   name: name,
//   phoneNumber: phoneNumber,
//   email: email,
//   password: password,
// };

// localStorage.setItem(email, JSON.stringify(userData));

// alert("Registration successful");
// togglePopup();
//   }

//   // Login Functionality
//   function login() {
// var email = document.getElementById("loginEmail").value;
// var password = document.getElementById("loginPassword").value;

// var userData = JSON.parse(localStorage.getItem(email));

// if (userData && userData.password === password) {
//   alert("Login successful");
//   localStorage.setItem("isLoggedIn", "true");
//   document.getElementById("logoutButton").style.display = "inline";
//   document.getElementById("loginBtn").style.display = "none";
// } else {
//   alert("Invalid email or password");
// }
// togglePopup();
//   }

//   // Logout Functionality
//   function logout() {
// document.getElementById("logoutButton").style.display = "none";
// document.getElementById("loginEmail").value = "";
// document.getElementById("loginPassword").value = "";
// document.getElementById("loginBtn").style.display = "inline";
// localStorage.setItem("isLoggedIn", "false");
// alert("You are now logged out!");
// togglePopup();
//   }

//   function initializePage() {
//     var isLoggedIn = localStorage.getItem("isLoggedIn");
//     if (isLoggedIn === "true") {
//       document.getElementById("logoutButton").style.display = "inline";
//       document.getElementById("loginBtn").style.display = "none";
//     } else {
//       document.getElementById("logoutButton").style.display = "none";
//       document.getElementById("loginBtn").style.display = "inline";
//     }
//   }

//   // Call the initialization function when the page loads
//   window.onload = initializePage;

//   return (
//     <nav>
//       <div className="left">
//         <a href="/" className="logo">
//           <img src="/logo.png" alt="" />
//           <span>HomeHaven</span>
//         </a>
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         <a href="/">Contact</a>
//         <a href="/list">Listings</a>
//       </div>
//       <div className="right">
//         {user ? (
//           <div className="user">
//             <img
//               src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//               alt=""
//             />
//             <span>John Doe</span>
//             <Link to="/profile" className="profile">
//               <div className="notification">3</div>
//               <span>Profile</span>
//             </Link>
//           </div>
//         ) : (
//           <>
//             <div id="popup-1" class="popup" style="display: block;">
//               <div class="content">
//                 <div class="close-btn" onclick="togglePopup()">
//                   x
//                 </div>
//                 <p class="log1">
//                   Log In to{" "}
//                   <span style="font-weight: bold; color: #178F7A">
//                     Recipe Realm
//                   </span>
//                 </p>
//                 <div class="input-field">
//                   <input
//                     id="loginEmail"
//                     placeholder="Email"
//                     class="validate"
//                     type="email"
//                   />
//                 </div>
//                 <div class="input-field">
//                   <input
//                     id="loginPassword"
//                     type="password"
//                     placeholder="Password"
//                     class="validate"
//                   />
//                 </div>
//                 <button class="second-button" onclick="login()">
//                   Log In
//                 </button>
//                 <p>
//                   Don't have an account?{" "}
//                   <a onclick="togglePopup1()">
//                     <span style="color: blue; cursor: pointer;text-decoration: underline;">
//                       Register
//                     </span>
//                   </a>
//                 </p>
//               </div>
//             </div>

//             <div class="popup" id="popup-2">
//               <div class="content" style="height: 600px; top: 400px;">
//                 <div class="close-btn" onclick="togglePopup1()">
//                   x
//                 </div>

//                 <p class="log1">
//                   Create Your{" "}
//                   <span style="font-weight: bold; color: #178F7A">
//                     Recipe Realm
//                   </span>{" "}
//                   Account
//                 </p>
//                 <div class="input-field">
//                   <input
//                     id="registerName"
//                     placeholder="Name"
//                     class="validate"
//                   />
//                 </div>
//                 <div class="input-field">
//                   <input
//                     id="registerPhoneNumber"
//                     placeholder="Phone Number"
//                     class="validate"
//                   />
//                 </div>
//                 <div class="input-field">
//                   <input
//                     id="registerEmail"
//                     placeholder="Email"
//                     class="validate"
//                     type="email"
//                     required
//                   />
//                 </div>
//                 <div class="input-field">
//                   <input
//                     id="registerPassword"
//                     placeholder="Password"
//                     class="validate"
//                   />
//                 </div>
//                 <button class="second-button" onclick="register()">
//                   Register
//                 </button>
//                 <p>
//                   Already have an account?{" "}
//                   <a onclick="togglePopup()">
//                     <span style="color: blue; cursor: pointer; text-decoration: underline;">
//                       Login
//                     </span>
//                   </a>
//                 </p>
//               </div>
//             </div>

//             <li>
//               <a
//                 onclick="togglePopup()"
//                 id="loginBtn"
//                 style="margin-left:-30px;cursor: pointer;">
//                 Login
//               </a>
//             </li>
//             <button
//               id="logoutButton"
//               style="display: none;"
//               onclick="logout()"
//               class="logout">
//               Logout
//             </button>
//           </>
//         )}
//         <div className="menuIcon">
//           <img
//             src="/menu.png"
//             alt="menu icon"
//             onClick={() => setOpen((prev) => !prev)}
//           />
//         </div>
//         <div className={open ? "menu active" : "menu"}>
//           <a href="/">Home</a>
//           <a href="/">About</a>
//           <a href="/">Contact</a>
//           <a href="/">Agents</a>
//           <a href="/">Sign In</a>
//           <a href="/">Sign Up</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import "./navbar.css";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false); // State for login popup
//   const [openRegister, setOpenRegister] = useState(false); // State for register popup
//   const [openSideMenu, setOpenSideMenu] = useState(false); // State for side menu
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function togglePopup() {
//     setOpen(!open);
//   }

//   function togglePopupRegister() {
//     setOpenRegister(!openRegister);
//   }

//   function register() {
//     // Your register function implementation
//     var name = document.getElementById("registerName").value;
//     var phoneNumber = document.getElementById("registerPhoneNumber").value;
//     var email = document.getElementById("registerEmail").value;
//     var password = document.getElementById("registerPassword").value;

//     if (name === "" || phoneNumber === "" || email === "" || password === "") {
//       alert("Please fill in all fields");
//       return;
//     }

//     var num = /^[789]\d{9}$/;
//     if (!phoneNumber.match(num)) {
//       alert("Invalid Phone Number");
//       return false;
//     }

//     var mailformat = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
//     if (!email.match(mailformat)) {
//       alert("Invalid email");
//       return false;
//     }

//     var userData = {
//       name: name,
//       phoneNumber: phoneNumber,
//       email: email,
//       password: password,
//     };

//     localStorage.setItem(email, JSON.stringify(userData));

//     alert("Registration successful");
//     togglePopup();
//   }

//   function login() {
//     // Your login function implementation
//     var email = document.getElementById("loginEmail").value;
//     var password = document.getElementById("loginPassword").value;

//     var userData = JSON.parse(localStorage.getItem(email));

//     if (userData && userData.password === password) {
//       alert("Login successful");
//       localStorage.setItem("isLoggedIn", "true");
//       document.getElementById("logoutButton").style.display = "inline";
//       document.getElementById("loginBtn").style.display = "none";
//     } else {
//       alert("Invalid email or password");
//     }
//     togglePopup();
//   }

//   function logout() {
//     // Your logout function implementation
//     document.getElementById("logoutButton").style.display = "none";
//     document.getElementById("loginEmail").value = "";
//     document.getElementById("loginPassword").value = "";
//     document.getElementById("loginBtn").style.display = "inline";
//     localStorage.setItem("isLoggedIn", "false");
//     alert("You are now logged out!");
//     togglePopup();
//   }

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(isLoggedIn);
//   }, []);

//   return (
//     <nav>
//       <div className="left">
//         <a href="/" className="logo">
//           <img src="/logo.png" alt="" />
//           <span>HomeHaven</span>
//         </a>
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         <a href="/contact">Contact</a>
//         <a href="/list">Listings</a>
//       </div>
//       <div className="right">
//         {isLoggedIn ? (
//           <div className="user">
//             <img
//               src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//               alt=""
//             />
//             <span>John Doe</span>
//             <Link to="/profile" className="profile">
//               <div className="notification">3</div>
//               <span>Profile</span>
//             </Link>
//             <button onClick={logout} className="logout">
//               Logout
//             </button>
//           </div>
//         ) : (
//           <>
//             <div className={open ? "popup active" : "popup"} id="popup-1" >
//               <div className="content">
//                 <div className="close-btn" onClick={togglePopup}>
//                   x
//                 </div>
//                 <p className="log1">
//                   Log In to{" "}
//                   <span style={{ fontWeight: "bold", color: "#304e7e" }}>
//                     HomeHaven
//                   </span>
//                 </p>
//                 <div className="input-field">
//                   <input
//                     id="loginEmail"
//                     placeholder="Email"
//                     className="validate"
//                     type="email"
//                   />
//                 </div>
//                 <div className="input-field">
//                   <input
//                     id="loginPassword"
//                     type="password"
//                     placeholder="Password"
//                     className="validate"
//                   />
//                 </div>
//                 <button className="second-button" onClick={login} style={{
//                   cursor: "pointer"
//                 }}>
//                   Log In
//                 </button>
//                 <p style={{
//                   marginRight: "-60px"
//                 }}>
//                   Don't have an account?{" "}
//                   <a onClick={togglePopupRegister}>
//                     <span
//                       style={{
//                         color: "blue",
//                         cursor: "pointer",
//                         textDecoration: "underline",
//                         marginLeft: "-40px"
//                       }}>
//                       Register
//                     </span>
//                   </a>
//                 </p>
//               </div>
//             </div>

//             <div
//               className={openRegister ? "popup active" : "popup"}
//               id="popup-2">
//               <div
//                 className="content"
//                 style={{ height: "600px", top: "400px" }}>
//                 <div className="close-btn" onClick={togglePopupRegister}>
//                   x
//                 </div>

//                 <p className="log1">
//                   Create Your{" "}
//                   <span style={{ fontWeight: "bold", color: "#304e7e" }}>
//                     Home Haven
//                   </span>{" "}
//                   Account
//                 </p>
//                 <div className="input-field">
//                   <input
//                     id="registerName"
//                     placeholder="Name"
//                     className="validate"
//                   />
//                 </div>
//                 <div className="input-field">
//                   <input
//                     id="registerPhoneNumber"
//                     placeholder="Phone Number"
//                     className="validate"
//                   />
//                 </div>
//                 <div className="input-field">
//                   <input
//                     id="registerEmail"
//                     placeholder="Email"
//                     className="validate"
//                     type="email"
//                     required
//                   />
//                 </div>
//                 <div className="input-field">
//                   <input
//                     id="registerPassword"
//                     placeholder="Password"
//                     className="validate"
//                   />
//                 </div>
//                 <button className="second-button" onClick={register} style={{
//                   cursor: "pointer"
//                 }}>
//                   Register
//                 </button>
//                 <p style={{marginRight:"-50px"}}>
//                   Already have an account?{" "}
//                   <a onClick={togglePopup}>
//                     <span
//                       style={{
//                         color: "blue",
//                         cursor: "pointer",
//                         textDecoration: "underline",
//                         marginLeft: "-40px"
//                       }}>
//                       Login
//                     </span>
//                   </a>
//                 </p>
//               </div>
//             </div>
//             <div onClick={togglePopup} id="loginBtn" style={{ marginLeft: "-30px", cursor: "pointer" }}>
//               <img style={{ width: "35px" }} src="/person-icon.png" alt="Person Icon" />
//             </div>

//             <button
//               id="logoutButton"
//               style={{ display: "none" }}
//               onClick={logout}
//               className="logout">
//               Logout
//             </button>
//           </>
//         )}
//         <div className="menuIcon">
//           <img
//             src="/menu.png"
//             alt="menu icon"
//             onClick={() => setOpenSideMenu(!openSideMenu)}
//           />
//         </div>
//         <div className={openSideMenu ? "menu active" : "menu"}>
//           <a href="/">Home</a>
//           <a href="/">About</a>
//           <a href="/">Contact</a>
//           <a href="/">Agents</a>
//           <a href="/">Sign In</a>
//           <a href="/">Sign Up</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import "./navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false); // State for login popup
  const [openRegister, setOpenRegister] = useState(false); // State for register popup
  const [openSideMenu, setOpenSideMenu] = useState(false); // State for side menu
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function togglePopupLogin() {
    setOpen(!open);
  }

  function togglePopupRegister() {
    if (open) {
      // Close the login popup if it's open
      setOpen(false);
    }
    // Open the register popup
    setOpenRegister(!openRegister);
  }

  function register() {
    // Your register function implementation
    var name = document.getElementById("registerName").value;
    var phoneNumber = document.getElementById("registerPhoneNumber").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    if (name === "" || phoneNumber === "" || email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    var num = /^[789]\d{9}$/;
    if (!phoneNumber.match(num)) {
      alert("Invalid Phone Number");
      return false;
    }

    var mailformat = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (!email.match(mailformat)) {
      alert("Invalid email");
      return false;
    }

    var userData = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };

    localStorage.setItem(email, JSON.stringify(userData));

    alert("Registration successful");
    togglePopupRegister();
    togglePopupLogin(); // Close register popup after successful registration
  }

  function login() {
    // Your login function implementation
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
      alert("Login successful");
      localStorage.setItem("isLoggedIn", "true");
      document.getElementById("logoutButton").style.display = "inline";
      document.getElementById("loginBtn").style.display = "none";
      togglePopupLogin();
    } else {
      alert("Invalid email or password");
    }
    
  }

  function logout() {
    // Your logout function implementation
    document.getElementById("logoutButton").style.display = "none";
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
    document.getElementById("loginBtn").style.display = "inline";
    localStorage.setItem("isLoggedIn", "false");
    alert("You are now logged out!");
    togglePopupLogin();
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isLoggedIn);
  }, []);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>HomeHaven</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/list">Listings</a>
      </div>
      <div className="right">
        {isLoggedIn ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
            <button onClick={logout} className="logout">
              Logout
            </button>
          </div>
        ) : (
          <>
            <div className={open ? "popup active" : "popup"} id="popup-1" >
              <div className="content" style={{position: "absolute", zIndex: "101"}}>
                <div className="close-btn" onClick={togglePopupLogin}>
                  x
                </div>
                <p className="log1">
                  Log In to{" "}
                  <span style={{ fontWeight: "bold", color: "#304e7e" }}>
                    HomeHaven
                  </span>
                </p>
                <div className="input-field">
                  <input
                    id="loginEmail"
                    placeholder="Email"
                    className="validate"
                    type="email"
                  />
                </div>
                <div className="input-field">
                  <input
                    id="loginPassword"
                    type="password"
                    placeholder="Password"
                    className="validate"
                  />
                </div>
                <button className="second-button" onClick={login} style={{
                  cursor: "pointer"
                }}>
                  Log In
                </button>
                <p style={{
                  marginRight: "-60px"
                }}>
                  Don't have an account?{" "}
                  <a onClick={togglePopupRegister}>
                    <span
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline",
                        marginLeft: "-40px"
                      }}>
                      Register
                    </span>
                  </a>
                </p>
              </div>
            </div>

            <div
              className={openRegister ? "popup active" : "popup"}
              id="popup-2">
              <div
                className="content"
                style={{ height: "550px", top: "400px", positio: "absolute", zIndex:"101" }}>
                <div className="close-btn" onClick={togglePopupRegister}>
                  x
                </div>

                <p className="log1">
                  Create Your{" "}
                  <span style={{ fontWeight: "bold", color: "#304e7e" }}>
                    Home Haven
                  </span>{" "}
                  Account
                </p>
                <div className="input-field">
                  <input
                    id="registerName"
                    placeholder="Name"
                    className="validate"
                  />
                </div>
                <div className="input-field">
                  <input
                    id="registerPhoneNumber"
                    placeholder="Phone Number"
                    className="validate"
                  />
                </div>
                <div className="input-field">
                  <input
                    id="registerEmail"
                    placeholder="Email"
                    className="validate"
                    type="email"
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    id="registerPassword"
                    placeholder="Password"
                    className="validate"
                  />
                </div>
                <button className="second-button" onClick={register} style={{
                  cursor: "pointer"
                }}>
                  Register
                </button>
                <p style={{marginRight:"-50px"}}>
                  Already have an account?{" "}
                  <a onClick={togglePopupLogin}>
                    <span
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline",
                        marginLeft: "-40px"
                      }}>
                      Login
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div onClick={togglePopupLogin} id="loginBtn" style={{ marginLeft: "-30px", textAlign: "center", justifyContent: "center"}}>
              <img style={{ width: "35px", marginBottom: "-12px" }} src="/person-icon.png" alt="Person Icon" />
              <button className="log" onClick={togglePopupLogin}>Log In</button>
            </div>

            <button
              id="logoutButton"
              style={{ display: "none" }}
              onClick={logout}
              className="logout">
              Logout
            </button>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu icon"
            onClick={() => setOpenSideMenu(!openSideMenu)}
          />
        </div>
        <div className={openSideMenu ? "menu active" : "menu"}>
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
