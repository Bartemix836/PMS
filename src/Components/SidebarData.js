import React from 'react'; 
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from "react-icons/fi";


export const SidebarData = [

    {
        title:'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Processes',
        path: '/processes',
        icon: <FiIcons.FiFileMinus/>,
        cName:'nav-text'
    },
    {
        title:'Employees',
        path: '/employees',
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title:'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
]
