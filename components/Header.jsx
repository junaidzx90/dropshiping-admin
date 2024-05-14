/* eslint-disable @next/next/no-img-element */
'use client'
import { ContextData } from "@/contexts/dataStorage";
import { FiMenu } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

function Header() {
    const {handleMenuPanel, userData} = ContextData();
    
    return (
        <div className="hidden md:flex justify-between py-2 px-5 sticky top-0 bg-white shadow h-[45px] z-10">
            <button onClick={handleMenuPanel} className="bg-transparent">
                <FiMenu className="text-[24px] text-black-normal"/>
            </button>

            <div className="flex items-center">
                <div className="notification mr-5">
                    <IoNotificationsOutline className="text-[24px] text-black-normal"/>
                </div>
                <div className="profileImg">
                    <div className="relative w-[28px] h-[28px] overflow-hidden bg-gray-100 rounded-full ring-2 ring-gray-300">
                        {userData ? <img src={userData?.avatar} alt="avatar" /> : <svg className="absolute z-10 w-[36px] h-[36px] text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header