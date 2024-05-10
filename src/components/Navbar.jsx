import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
      };

    const link = [
        {
            id:1,
            nameholder:'About'
        },
        {
            id:2,
            nameholder: 'Portfolio'
        },
        {
            id:3,
            nameholder:'Contact'
        }
    ]

  return (
    
    <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='text-3xl font-bold primary-color ml-4'>Likhitha / Rai</h1>
        <ul className='hidden md:flex'>
            {link.map(({id, nameholder, href}) => (
                <li key={id} className='p-5'><a href={href}>{nameholder}</a></li>
                ) )};
            
        </ul>
          {/* Below div is the hamburger menu icon. For mobile, it will be shown , bigger than 768 px (Hover on md:hidden), It will be hidden */}
        <div onClick={handleNav} className='block md:hidden mr-6'>
            {/* ternary operator */}
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* ---------Mobile navigation--------- */}

        <div className= {nav? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500': 'fixed-left-[-100%]'}>
        <div className='md:hidden absolute'>
        <h1 className='text-3xl primary-color m-4'>Likhitha Rai</h1>
            <ul className='p-8 text-2xl'>

            <li className='p-2'><a href='#home'>Home</a></li>
            <li className='p-2'><a href='#about'>About</a></li>
            <li className='p-2'><a href='#portfolio'>Portfolio</a></li>
            <li className='p-2'><a href='#contact'>Contact</a></li>
            </ul>
        </div>
        </div>
      
    </div>
  )
}

export default Navbar
