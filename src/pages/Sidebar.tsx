import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

interface SidebarMenuProps {
    isSidebarOpen: boolean;
}

interface NavItemProps {
    to: string;
    icon: JSX.Element;
    text: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isSidebarOpen }) => {
    return (
        <div className={`min-h-screen w-72 bg-white my-4 mr-4 ml-2 rounded-md shadow-lg ${isSidebarOpen ? '' : 'hidden'}`}>
            <ul className="mt-4">
                <NavItem to="/" icon={<AssignmentIcon />} text="Task List" />
                <NavItem to="/add-task" icon={<PlaylistAddIcon />} text="Add Task" />
            </ul>
        </div>
    );
};

const NavItem: React.FC<NavItemProps> = ({ to, icon, text }) => {
    const location = useLocation();
    return (
        <li className="my-3 mx-2">
            <Link
                to={to}
                className={`flex items-center rounded-lg px-3 py-2 text-gray-700 hover:text-red-700 ${location.pathname === to ? 'bg-gray-200 font-semibold' : ''}`}
            >
                <span className="mr-2">{icon}</span> {text}
            </Link>
        </li>
    );
};

export default SidebarMenu;
