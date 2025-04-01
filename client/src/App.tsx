import './App.css'; 
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar />
      <main className='container pt-5'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
