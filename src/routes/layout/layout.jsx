import "./layout.css";
import Navbar from "../../components/navbar/navbar";
function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        {/* <Outlet/> */}
      </div>
    </div>
  );
}
export default Layout;
