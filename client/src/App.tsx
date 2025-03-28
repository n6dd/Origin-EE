import './App.css'; // Make sure this line is included at the top
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <SideNav />
      <main className="container pt-5">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
