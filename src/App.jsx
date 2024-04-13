import Navbar from "./navbar";
import './layout.css';

function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      
      <div className="content">
      <homePage/>
      </div>
    </div>
  );
}

export default App