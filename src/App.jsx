
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className='flex w-full h-screen lg:p-5  bg-[#121b22]  overflow-y-hidden  overflow-x-auto scrollbar-thin  scrollbar-thumb-[#374045]'>
      <div className="flex  w-full">
        <Sidebar />
        <Routes>
          <Route path='/welcome' element={<Welcome />}  />
          <Route path='' element={<Chat />}  />
        </Routes>
       </div>
    </div>
  );
}

export default App
