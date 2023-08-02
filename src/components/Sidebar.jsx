import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'
import { FilterList, SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat';



const Sidebar = () => {
    return (
        <div className="flex flex-col ">
            <div className="flex items-center place-content-between  bg-[#1f2c34] py-2 px-4 min-w-[400px] border-r-[1px] border-gray-700">
                <Avatar
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
        </div>
    )
}

export default Sidebar
