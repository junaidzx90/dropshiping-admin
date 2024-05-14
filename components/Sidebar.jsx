/* eslint-disable @next/next/no-img-element */
'use client'
import "@/css/sidebar.css";
import { Logout } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCartFlatbed } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import InfoModel from "./InfoModel";
import { useState } from "react";
import { MdPayments } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { ContextData } from "@/contexts/dataStorage";

function Sidebar() {
  const [attention, setAttention] = useState(false);
  const pathname = usePathname();
  const {collapse} = ContextData();
  const menuObj = [
    {id: 1, label: 'Dashboard', icon: LuLayoutDashboard, path: '/dashboard'},
    {id: 2, label: 'Products', icon: FaCartFlatbed, path: '/products'},
    {id: 3, label: 'Orders', icon: TbTruckReturn, path: '/orders'},
    {id: 4, label: 'Users', icon: ImUsers, path: '/users'},
    {id: 5, label: 'Requests', icon: MdPayments, path: '/requests'},
  ];
  
  return (
    <>
      <div className={["sticky top-0 md:w-[250px] w-full bg-gray-800 h-screen shadow flex flex-col justify-between transition-all", collapse ? "!w-[75px] collapsedMenu": "translate-x-0"].join(" ")}>
        <div className="menuList">
          <div className="flex justify-center bg-gray-700 shadow mb-2 py-1 h-[45px]">
            <a href="https://easeare.com" target="_blank" className="block decoration-transparent w-[100px] h-full">
              <img className="w-full h-full object-contain object-center" src="https://easeare.com/storage/2023/05/cropped-Easeare-3-e1685002345624-180x40.png" alt="easeare" />
            </a>
          </div>
          
          <ul className="m-0 p-0">
            {menuObj.map(menu => {
              return <li key={menu.id} className="px-2 mb-2">
              <Link title={collapse ? menu.label: ""} className={["relative flex w-full max-h-[40px] py-2 px-5 menuBtn group hover:bg-[#ffffff08] rounded-md", pathname === menu.path ? "bg-gray-700 after:bg-blue-400 after:inline-block after:h-[25px] after:w-[8px] after:absolute after:left-0 after:rounded-r-md": ""].join(" ")} href={menu.path}>
                {<menu.icon className={["text-[18px] mr-2 text-blue-400", pathname === menu.path ? "!text-white": ""].join(" ")}/>}
                <span className={["text-[14px] mnutxt", pathname === menu.path ? "text-white": ""].join(" ")}>{menu.label}</span>
              </Link>
            </li>
            })}
          </ul>
        </div>

        <div className="signout px-1">
          <button className="menuBtn" onClick={() => setAttention(!attention)}><LiaSignOutAltSolid className="text-[24px] mr-2"/> <span className="mnutxt">Logout</span></button>
        </div>
      </div>
      
      <InfoModel 
        show={attention} 
        content={'Are you sure you want to SignOut?'} 
        actionBtn={'Yes, I\'m sure'} 
        closeBtn={'No, cancel'}
        onAction={() => Logout()} 
        onClose={() => setAttention(false)}
      />
    </>
  )
}

export default Sidebar