import  { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'


const SidebarChat = () => {
 const [seed, setSeed] = useState("")
 useEffect(() => {
 setSeed(Math.floor(Math.random() * 5000))
 }, [])
    return (
        <div className=" flex items-center cursor-pointer w-full hover:bg-[#2b3942] ">
                <Avatar
                    fontSize="small"
                    src={`https://avatars.dicebear.com/api/human/ 
            b${seed}.svg`}
            className='m-3 ring-[#007b65] ring-2 p-2' />
            <div className='flex my-[.8em] mr-5  h-full items-center border-b-[1px] border-gray-700 w-full place-content-between'>
            <div className="flex  flex-col ml-4 ">
            <h2 className=' text-white'>Tomi Grouby Boss</h2>
            <h2 className='text-sm text-gray-400 '>Last message...</h2>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-sm font-thin   text-[#02a882]'>10:14PM</p>
                </div>
            </div>
        </div>
 )
}
export default SidebarChat