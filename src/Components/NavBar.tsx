import { FaRegBell } from "react-icons/fa6";
import ProfileMenu from "./ProfileMenu";


const navLinks = [
    {
        id: '1',
        name: 'Overview'
    },
    {
        id: '2',
        name: 'Reports'
    },
    {
        id: '3',
        name: 'Settings'
    }
]

function NavBar() {
  return (
    <div className="flex fixed top-0 left-0 z-10 bg-white dark:bg-[#21364A] justify-between w-full shadow-md items-center px-4 py-2">
        <div className="flex  items-center space-x-2 ">
            <img src="/static/logo.png" alt="LOGO" className="w-5" />
            <span className="font-bold text-[18px] dark:text-gray-300">INFOSIGHT</span>
        </div>
        <div className="flex  space-x-44 items-center">
            <div className="flex space-x-8">
                {
                    navLinks.map( link => (
                        <span className="font-medium text-lg cursor-pointer hover:text-[#088738] dark:text-gray-300 transition-colors duration-75" key={link.id}>{link.name}</span>
                    ))
                }
            </div>
            <div className="flex items-center space-x-6 px-4">
                <div className="p-1 rounded  hover:shadow hover:border-none transition-shadow duration-100 cursor-pointer">
                    <FaRegBell size={28} className="dark:text-gray-300" />
                </div>
                <ProfileMenu />
            </div>
        </div>

    </div>
  )
}

export default NavBar