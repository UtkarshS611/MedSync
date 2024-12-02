import { Link, NavLink } from "react-router-dom";

import {
  MessageCircle,
  Stethoscope,
  Pill,
  SquareMenu
} from "lucide-react";


const Sidebar: React.FC = () => {

  const items = [
    { 
      name: 'Chat',
      icon: <MessageCircle />,
      href: '/dashboard/chat'
    },
    { 
      name: 'Symptoms',
      icon: <Stethoscope />,
      href: '/dashboard/symptoms'
    },
    { 
      name: 'Medications',
      icon: <Pill />,
      href: '/dashboard/medications'
    },
    { 
      name: 'Records',
      icon: <SquareMenu />,
      href: '/dashboard/records'
    },
  ];

  return (
    <div className="w-72 h-full fixed shadow-lg">
      <nav className="flex flex-col p-4">
        <Link to={'/'} className="flex gap-2 items-center mb-10"> 
          <img src="/logo.svg" alt="logo" height={50} width={50}/>
          <h2 className="font-bold text-xl">Medsync</h2>
        </Link>
        {items.map((item ,index) => (
          <NavLink to={item.href} className={({isActive}) => `mt-4 flex items-center gap-2 px-4 py-2 rounded-lg w-full ${isActive? 'bg-blue-500 text-white' : 'bg-gray-200'}`} key={index}>
            <span>{item.icon}</span>
            <h3>{item.name}</h3>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;