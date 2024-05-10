import React from 'react';
import {FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
// import {BsFillPersonLinesFill} from 'react-icons/bs';

const Social = () => {

    const links = [
        {
            id:1,
            child:(
                <> 
                 <FaLinkedin size={30} /> LinkedIn
            </>
            ),
            href: 'https://www.linkedin.com/in/likhitha-rai/',
            style:'rounded-tl-md'
        },
        {
            id:2,
            child:(
                <> 
                 <FaGithub size={30} /> GitHub
            </>
            ),
            href: 'https://github.com/likhitharai',
            
        },
        {
            id:3,
            child:(
                <> 
                 <HiOutlineMail size={30} /> Mail
            </>
            ),
            href: 'mailto:likhitharai.lr12@gmail.com',
            
        },
        {
            id:1,
            child:(
                <> 
                 <FaYoutube size={30} /> Youtube
            </>
            ),
            href: 'https://www.youtube.com/@likhitharai5247/',
            
        }
    ]

  return (
    <div className='flex-col top-[35%] right-0 fixed'>
    <ul>

    {links.map(({id, child, href})=>(
        <li key = {id} className= 'flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-br from-blue-400 to-purple-800
        mr-[-100px] hover:ml-[-100px] hover:rounded-lg  duration-300 mt-2 hover:bg-gray-100'>

        <a href={href} className='flex justify-between items-center w-full  text-white' target='_blank' rel='noreferrer'>
            {child}
            
        </a>
        </li>
    ))}
        
    </ul>
    </div>
  )
}

export default Social
