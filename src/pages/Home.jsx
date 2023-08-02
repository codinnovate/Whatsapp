
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';

function Home() {
  return (
    <div className='flex w-full h-screen lg:p-5  bg-[#121b22]  overflow-y-hidden  overflow-x-auto scrollbar-thin  scrollbar-thumb-[#374045]'>
      <div className="flex  w-full">
        <Sidebar />
        <Routes>
          <Route path='/welcome' element={<Welcome />}  />
          <Route path='' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
       </div>
    </div>
  );
}

export default Home
