import Navbar from "./navbar";
import HomePage from "./homePage";
import './layout.css';

function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      
      <div className="content">
      <HomePage/>
      </div>
    </div>
  );
}

export default App