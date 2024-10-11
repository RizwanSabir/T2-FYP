import { useState ,useEffect} from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import './Index.css';
import { DropdownSvg } from '../../../../../Components/Svg/DropDownSvg';
import NavBarItems from '../../../../../Components/NavBar/NavBarItems';
import RightSideBar from '../../../../../Components/DashBoardTemplate/DashBoard/RightSideBar/RightSideBar';

const Home = () => {
  const navigate=useNavigate()

useEffect(() => {
  navigate('/Dashboard/OverView')
}, [])


  const navItems = ['Overview', 'Audience', 'Engagement', 'Spendings', 'Influencers', 'Media'];

  return (
   <>
   <div className=" sm:grid sm:grid-cols-12   ">
   <div className="px-6 py-3 col-span-12 lg:col-span-9">
      <div>
        <h1 className="lato-bold text-xl">Welcome, Rizwan Sabir</h1>
        <h1 className="lato-regular text-sm text-black/50">27 March 2024</h1>
      </div>
      <ul className="flex text-[10px] justify-end xs:justify-center sm:text-base sm:justify-center list-none mt-7">
        <div className="navBgColor hidden xs:flex rounded-full xs:py-2 xs:px-2 sm:flex-nowrap md:px-10 lg:gap-x-4">
          <NavBarItems items={navItems} path={"Dashboard"} />
        </div>

        {/* //This will display on sm screen only  */}
        <div className="xs:hidden">
          <Dropdown items={navItems} />
        </div>
      </ul>
      <div>
       <Outlet/>
      </div>
    </div>

      <RightSideBar/>

   </div>
   
   </>
  );
};



const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState([0, 'Overview']);

  return (
    <div className="flex items-center flex-col poppins-semibold">
      <div
        className="p-2 flex justify-between w-[100px] navBgColor rounded-full items-center"
        onClick={() => setIsOpen([!isOpen[0], isOpen[1]])}
      >
        <div>{isOpen[1]}</div>
        <DropdownSvg />
      </div>
      {isOpen[0] ? (
        <ul className="poppins-regular flex gap-y-2 flex-col mt-2">
          {items.map((item, index) =>
            isOpen[1] !== item ? (
              <li key={index} className="dropdown-item" onClick={() => setIsOpen([0, item])}>
                {item}
              </li>
            ) : null
          )}
        </ul>
      ):""}
    </div>
  );
};



export default Home;
