
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import { useState } from 'react';


function App() {
  const [profile, setProfile] = useState(false)

  const showOnlyProfile = () => {
  setProfile(!profile)
  }

  return (
    <div className='flex w-full h-screen lg:p-5  bg-[#121b22]  overflow-y-hidden  overflow-x-auto scrollbar-thin  scrollbar-thumb-[#374045]'>
      <div className="flex  w-full">
        <Sidebar whenClicked={showOnlyProfile}/>
        <Routes>
          <Route path='/welcome' element={<Welcome />}  />
          <Route path='' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
       </div>
    </div>
  );
}

export default App
