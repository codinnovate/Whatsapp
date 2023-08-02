
const Receiver = () => {
    return (
             <div className="absolute right-5 mt-4">
            {/* <span className="font-bold text-[#a52b7a] text-sm ">You</span> */}
            <div className='flex flex-col bg-[#005d4b] p-2 rounded-lg w-fit h-fit lg:max-w-[25em]'>
              <div className=" flex flex-col  items-center  w-full h-full z-40 ">
                    <div className="flex w-full h-full items-center ">
                    <p className="text-gray-200 font-thin text-sm ">This is a message,  you really should take note </p>
                    </div>

                    <div className="flex  w-full h-full  justify-end items-end ">
                     <p className='text-xs font-thin  text-gray-400'>10:32AM</p>     
                    </div>
             </div>
             </div>
        </div>
    )
}

export default Receiver
