import  { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined,  InsertEmoticon, Add } from '@material-ui/icons'
import './Chat.css'
import MicIcon from '@material-ui/icons/Mic'
import You from '../components/You';
import Receiver from '../components/Receiver';


const Chat = () => {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        }, [])
 return (
        <div className=" w-full h-full relative ">
            <div className="flex  items-center place-content-between  bg-[#1f2c34] py-2 px-4 min-w-[400px] border-r-[1px] border-gray-700">
             <div className='w-full items-center flex  '>
             <Avatar src={`https://avatars.dicebear.com/api/human/
        b${seed}.svg`}
                     
                 />
        <div className="flex flex-col ml-3 ">
            <h3 className='text-white'>Room Name</h3>
            <p className='text-sm text-green-900'>Last seen just now...</p>
        </div>
             </div>  
        <div className="flex items-center">
            <IconButton>
                <SearchOutlined className='text-gray-400'/>
            </IconButton>
            <IconButton>
                 <AttachFile className='text-gray-400'/>
            </IconButton>
            <IconButton>
                <MoreVert className='text-gray-400'/>
            </IconButton>
        </div>
         </div>

         <div className="chat__body w-full  h-[80%]">
             <div className='flex flex-col  w-full   h-full bg-[#0b141b]/90 '>
                 <div className=' h-full  flex flex-col mx-auto max-w-6xl space-y-2 m-1 items-center p-4 '>
                 <div className='rounded-lg bg-[#182329] p-2 flex items-center justify-center w-[5em]'>
                     <p className='text-gray-400 font-thin text-sm'>MONDAY</p>
                 </div>
                     
                     <div className='bg-[#182329] p-2  flex justify-center items-center  rounded-lg'>
                         <p className='text-[#ffd279] font-thin text-xs text-center'>Messages are not end-to-end encrypted. No one outside this chat, can read or listen to them, except cody !! 😂</p>
                     </div>
           
                                {/* WORK GANGAN */}
                     <div className='flex flex-col'>
                         
                         <You />
                         <Receiver />
                     </div>

                 </div>
             
            
              
            
         </div>
        </div>


         <div className="flex absolute w-full bottom-0 z-50 items-center place-content-between  bg-[#1f2c34] py-2 px-4 min-w-[400px] border-r-[1px] border-gray-700">
             <IconButton>
             <InsertEmoticon fontSize='medium' className='text-gray-400' />    
             </IconButton>
             <IconButton>
             <Add  className='text-gray-400'/>    
            </IconButton>
                <form className='bg-[#2b3942] w-full flex px-5 py-[.7em] rounded-lg mx-2'>
                <input
                placeholder="Type a message"
                     type="text"
                     className='bg-inherit text-sm font-light w-full outline-none text-white '
                />
             </form>
             <IconButton>
                <MicIcon className='text-gray-400'/> 
             </IconButton>
        </div>
 </div>
 )
}
export default Chat