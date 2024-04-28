import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="footer1">
        <div className="footerLeft">
          <div className="footerMenu">
            <h1 className="fMenuTitle">Company</h1>
            <ul className="fList">
              <li className="fListItem">
                <a href="/about" className="fLink">
                  About Us
                </a>
              </li>

              <li className="fListItem">
                <a href="/contact" className="fLink">
                  Contact Us
                </a>
              </li>
              <li className="fListItem">
                <a href="/about" className="fLink">
                  Careers
                </a>
              </li>
              <li className="fListItem">
                <a href="/about" className="fLink">
                  Services
                </a>
              </li>
              <li className="fListItem">
                <a href="/about" className="fLink">
                  Terms & Conditions
                </a>
              </li>
              {/* <li className="fListItem">Stores</li> */}
            </ul>
          </div>
          <div className="footerMenu">
            <h1 className="fMenuTitle">My Account</h1>
            <ul className="fList">
              <li className="fListItem">Sign In</li>
              <li className="fListItem">Saved Properties</li>
              <li className="fListItem">My Listing</li>
              {/* <li className="fListItem">Track My Order</li> */}
              <li className="fListItem">Help</li>
            </ul>
          </div>
          <div className="footerMenu">
            <h1 className="fMenuTitle">Useful Links</h1>
            <ul className="fList">
              <li className="fListItem">
                <a href="/contact">Support</a>
              </li>
              <li className="fListItem">
                <a href="/contact">Refund</a>
              </li>
              <li className="fListItem">
                <a href="/contact">FAQ</a>
              </li>
              <li className="fListItem">
                <a href="/contact">Feedback</a>
              </li>
              {/* <li className="fListItem">Stories</li> */}
            </ul>
          </div>
          <div className="footerMenu">
            <h1 className="fMenuTitle">Locations</h1>
            <ul className="fList">
              <li className="fListItem">Amritsar</li>
              <li className="fListItem">Chandigarh</li>
              <li className="fListItem">Ludhiana</li>
              <li className="fListItem">Patiala</li>
              <li className="fListItem">Bathinda</li>
              <li className="fListItem">Hoshiarpur</li>
              <li className="fListItem">Pathankot</li>
              <li className="fListItem">Anandpur Sahib</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
