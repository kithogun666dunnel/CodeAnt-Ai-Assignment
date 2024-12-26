import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Bars4Icon,
  ChevronDownIcon,
  HomeIcon,
  CodeBracketIcon,
  CloudIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  PhoneIcon,
  ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";
import codeAntLogo from '../assets/codeAnt-logo.png';

export default function Sidebar() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileLocal = width < 768;
      if (isMobileLocal) {
        setIsMobile(true);
        isMobileRef.current = true;
      } else {
        setIsMobile(false);
        isMobileRef.current = false;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex flex-col bg-white border-r w-full md:w-64 md:h-screen">
      <div className="flex justify-between md:justify-around items-center px-4 w-full">
        <div className="flex justify-center items-center gap-4 h-16">
          <img src={codeAntLogo} alt="logo" className="w-6" />
          <h1 className="font-semibold text-lg">CodeAnt AI</h1>
        </div>

        <div className="flex md:hidden">
          <button onClick={() => setIsSideBarVisible(prev => !prev)}>
            <Bars4Icon className="size-5" />
          </button>
        </div>
      </div>

      <div
        className="bottom-0 md:static absolute flex bg-black/10 w-full h-screen md:h-full transition-all translate-y-full md:translate-y-0 overflow-hidden"
        style={{
          height: isMobile ? (isSideBarVisible ? 'calc(100vh - 64px)' : '0px') : '100%',
        }}
      >
        <div className="flex flex-col bg-white w-full h-fit md:h-full">
          <div className="flex flex-col items-center py-4">
            <span className="flex items-center gap-2 mt-2 p-2 border rounded-xl text-sm">
              <span>kithogun666dunnel</span>
              <ChevronDownIcon className="w-5" />
            </span>
          </div>

          <nav className="flex-1 space-y-2 px-4 py-2">
            <NavLink
              to="/repositories"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive
                  ? 'bg-[#1570EF] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <HomeIcon className="w-6" />
              <span className="ml-3 font-light">Repositories</span>
            </NavLink>

            <NavLink
              to="/code-review"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive
                  ? 'bg-[#1570EF] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <CodeBracketIcon className="w-6" />
              <span className="ml-3 font-light">AI Code Review</span>
            </NavLink>

            <NavLink
              to="/cloud-security"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive
                  ? 'bg-[#1570EF] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <CloudIcon className="w-6" />
              <span className="ml-3 font-light">Cloud Security</span>
            </NavLink>

            <NavLink
              to="/how-to-use"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive
                  ? 'bg-[#1570EF] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <BookOpenIcon className="w-6" />
              <span className="ml-3 font-light">How to Use</span>
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive
                  ? 'bg-[#1570EF] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Cog6ToothIcon className="w-6" />
              <span className="ml-3 font-light">Settings</span>
            </NavLink>
          </nav>

          <div className="px-4 py-4">
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive
                  ? 'bg-[#1570EF] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <PhoneIcon className="w-5" />
              <span className="ml-3 font-light">Support</span>
            </NavLink>

            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive
                  ? 'bg-[#1570EF] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <ArrowRightStartOnRectangleIcon className="w-5" />
              <span className="ml-3">Logout</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}