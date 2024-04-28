import "./layout.css";
import Navbar from "../../components/navbar/navbar";
import {Outlet} from 'react-router-dom';
import Footer from "../../components/footer/footer";
function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet/>
      </div>
      <div className="footer1">
        <Footer/>
      </div>
    </div>
  );
}
export default Layout;
