import './App.css';
import Navbar from './components/navbar/Navbar';
import SideBar from './components/sideBar/SideBar';
function App() {
  return (
    
    <div className="wrapper">
     
     <div className="sideBar">
      <SideBar/>
     </div>

     <div className="navbar">
     <Navbar/>
     </div>

     
     <div className="widgets">
     widgets
     </div>

     <div className="contents">
     contents
     </div>

     <div className="table">
     table
     </div>
    </div>
  );
}

export default App;
