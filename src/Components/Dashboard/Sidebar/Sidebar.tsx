import { Link, NavLink } from "react-router-dom";

import {
  MessageCircle,
  Stethoscope,
  Pill,
  SquareMenu,
  AlignJustify,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Sidebar: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      name: "Chat",
      icon: <MessageCircle />,
      href: "/dashboard/chat",
    },
    {
      name: "Symptoms",
      icon: <Stethoscope />,
      href: "/dashboard/symptoms",
    },
    {
      name: "Medications",
      icon: <Pill />,
      href: "/dashboard/medications",
    },
    {
      name: "Records",
      icon: <SquareMenu />,
      href: "/dashboard/records",
    },
  ];

  return (
    <>
      {isLargeScreen ? (
        <div className="w-72 h-full fixed shadow-lg">
          <nav className="flex flex-col p-4">
            <Link to={"/"} className="flex gap-2 items-center mb-10">
              <img src="/logo.svg" alt="logo" height={50} width={50} />
              <h2 className="font-bold text-xl">Medsync</h2>
            </Link>
            {items.map((item, index) => (
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `mt-4 flex items-center gap-2 px-4 py-2 rounded-lg w-full ${
                    isActive ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`
                }
                key={index}
              >
                <span>{item.icon}</span>
                <h3>{item.name}</h3>
              </NavLink>
            ))}
          </nav>
        </div>
      ) : (
        <div className="bg-white shadow-md fixed w-full px-4 py-2 flex items-center justify-between z-[99]">
          <Link to={"/"} className="flex gap-2 items-center">
            <img src="/logo.svg" alt="logo" height={40} width={40} />
            <h2 className="font-bold text-xl">Medsync</h2>
          </Link>
          {isMenuOpen ? (
            <div onClick={handleMenuToggle} className="cursor-pointer">
              <X />
            </div>
          ) : (
            <div onClick={handleMenuToggle} className="cursor-pointer">
              <AlignJustify />
            </div>
          )}
          {isMenuOpen && (
            <div className="bg-white shadow-md absolute top-0 right-0 w-full sm:w-[50%] h-screen">
              <div
                onClick={handleMenuToggle}
                className="absolute right-[1rem] top-[1rem] cursor-pointer"
              >
                <X />
              </div>
              <nav className="px-6 mt-20">
                {items.map((item, index) => (
                  <NavLink
                    to={item.href}
                    onClick={handleMenuToggle}
                    className={({ isActive }) =>
                      `mt-4 flex items-center gap-2 px-4 py-2 rounded-lg w-full ${
                        isActive ? "bg-blue-500 text-white" : "bg-gray-200"
                      }`
                    }
                    key={index}
                  >
                    <span>{item.icon}</span>
                    <h3>{item.name}</h3>
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
