import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'
import { ArrowBackOutlined, Edit, FilterList, SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat';
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Sidebar = ({ whenClicked }) => {
     const [profile, setProfile] = useState(false)

    const showOnlyProfile = () => {
        setProfile(!profile)
    }

    return (
    <>
            {profile ?
                <div className='flex flex-col h-screen min-w-[450px]'>
                <div className="flex    bg-[#1f2c34] p-4 h-[6.8em]  border-r-[1px] border-gray-700">
                        <div className='w-full h-full flex items-end mt-3   '>
                            <div className='flex'>
                                <ArrowBackOutlined
                                    onClick={showOnlyProfile}
                                    className='text-gray-300 m-2' />        
                            <h2 className='text-gray-300 text-xl m-2'>Profile</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex items-center justify-center p-9'>
                        <img
                            src='https://pps.whatsapp.net/v/t61.24694-24/360591378_1234286793920212_5318099753435524228_n.jpg?ccb=11-4&oh=01_AdQcGiJ_gSjOy9c7ZAnMJS0jel8Sb3VZWgC8ZxFZp42N2A&oe=64D6A222'
                            className='rounded-full w-[200px]' />
                    </div>

                    <div className='flex flex-col p-4 plac-content-between h-full'>
                        <div className='flex flex-col '>
                            <h2 className='text-[#008069] text-[0.8em] font-thin'>Your name</h2>
                            <div className='flex place-content-between items-center'>
                                <h2 className='text-gray-100 text-sm'>Cody</h2>
                                <IconButton>
                                    <Edit className='text-gray-400'/>
                                </IconButton>
                            </div>
                            <h2 className='text-gray-400 text-[0.8em] font-light'>
                                This is not your username or pin. This name will be visible to your whatsApp contacts.
                            </h2>

                            <div className='flex flex-col justify-center mt-4'>
                                <h2 className='text-[#008069] text-[0.8em] font-thin'>About</h2>
                                <Edit className='text-gray-400 my-4'/>
                            </div>
                    </div>
                        
                    </div>

                </div>
    :
   <div className="flex flex-col ">
            <div className="flex items-center place-content-between  bg-[#1f2c34] py-2 px-4 min-w-[400px] border-r-[1px] border-gray-700">
                    <Avatar
                        onClick={showOnlyProfile}
                    src='https://pps.whatsapp.net/v/t61.24694-24/360591378_1234286793920212_5318099753435524228_n.jpg?ccb=11-4&oh=01_AdQcGiJ_gSjOy9c7ZAnMJS0jel8Sb3VZWgC8ZxFZp42N2A&oe=64D6A222' className='' />
                <div className="flex ">
                <IconButton>
                <DonutLargeIcon className='text-gray-300' />
                </IconButton>
                <IconButton>
                <ChatIcon  className='text-gray-300'/>
                </IconButton>
                <IconButton>
                <MoreVertIcon  className='text-gray-300'/>
                </IconButton>
                </div>
        </div>
            <div className="flex items-center place-content-between  w-full pl-4 py-2">
            <div className="bg-[#1f2c34]  w-full rounded-lg py-[.4em] px-4">
            <SearchOutlined className='mr-4 text-gray-400' fontSize='small'/>
                    <input
                        className='bg-inherit text-sm outline-none font-light text-white'
                        placeholder="Search or start new chat" type="text" />
                </div>
                <IconButton>
                    <FilterList className='text-gray-400'/>
                </IconButton>
                
        </div>
            <div className="flex   flex-col  overflow-y-scroll   scrollbar-thumb-[#374045] scrollbar-thin  ">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
        </div>
                </div>}
            </>
    )
}

export default Sidebar
