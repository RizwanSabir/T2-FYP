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


  const navItems = ['Overview', 'Audience', 'Engagement', 'Influencers', 'Media'];

  return (
   <>
   <div className=" sm:grid sm:grid-cols-12 lg:flex lg:w-[900px] lg:mx-auto    ">
   <div className="px-6 py-3 col-span-12 lg:col-span-9 ">
      <ProfileInformation/>
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

const ProfileInformation = ({ ProfileImage, name, UserName, Followers, ER, Instagram, Likes, Comments, Bio, pic1, pic2, pic3, pic4 }) => {

  return (

      <>
          <div className="">
              {/* wrapper div orr background of list  */}
              <div className="bg-white grid grid-cols-12 OverViewBox2  w-[250px] xs:w-[500px]  sm:w-[640px] md:w-[740px] lg:w-[800px] p-1 sm:p-2  mx-auto  rounded-xl">


                  {/* Profile Picture  */}
                  <div className="col-span-2 flex justify-center items-center">
                      <div className="flex size-[60px] xs:size-[80px] sm:size-[100px] md:size-[100px] items-center ">
                          <img className=" aspect-square Avatar" src="/Media/p1.jpg" alt="" />
                      </div>
                  </div>

                  {/* Middle part general information  */}
                  <div className="col-span-7 mt-4 ml-2 ">
                      <p className="poppins-bold text-[9px] xs:text-[10px] sm:text-[13px] md:text-[11px] " >Sana Sabir</p>
                      {/* Id of Influencer  */}
                      <p className="lato-regular text-[9px] xs:text-[10px] sm:text-[13px] md:text-[11px] text-black/50 ">@sanasabir321</p>
                      <p className="poppins-regular mt-2 text-[9px] xs:text-[10px] sm:text-[13px] md:text-[14px]]  ">Embrace the Ashin Aura: Where Tradition Meets Trend.</p>
                      <div className=" hidden xs:flex  gap-2 mt-2 mb-2">
                          <p className='OrangeButtonBorder text-primary text-[9px] sm:text-[12px] lg:text-[11px] xs:text-[10px]  cursor-pointer '>Fashion</p>
                          <p className='OrangeButtonBorder text-primary text-[9px] sm:text-[12px] lg:text-[11px] xs:text-[10px]  cursor-pointer'>Shoppings </p>

                      </div>
                      <div className=" hidden xs:flex  gap-2 mt-2 mb-2">
                          <p className='SilverButtonWithText text-[9px] sm:text-[12px] lg:text-[11px] xs:text-[10px]  cursor-pointer'>+ Edit</p>
                        

                      </div>
                  </div>

                  {/* Right Part with followers and following  */}
                  <div className="col-span-3 justify-self-center  mt-4">

                      <div className="flex items-center  gap-x-1">
                          <img src="/Svg/Instagram.svg" className="Avatar size-[12px] xs:size-[15px] sm:h-[16px]" alt="" />
                          <p className="text-[9px] lato-light  xs:text-[10px] sm:text-[11px]">  2.3K Followers</p>
                      </div>

                      <div className=" hidden  xs:flex justify-center gap-x-3 mt-2">
                          <div className=" flex items-center gap-x-1 ">
                              <img src="/Svg/Heart.svg" className="Avatar   xs:size-[15px] sm:h-[16px]" alt="" />
                              <p className="text-[9px] lato-light  xs:text-[10px] sm:text-[11px]"> 23.1K</p>
                          </div>
                          <div className="flex items-center  gap-x-1">
                              <img src="/Svg/Comment.svg" className="Avatar size-[12px] xs:size-[15px] sm:h-[16px]" alt="" />
                              <p className="text-[9px] lato-light  xs:text-[10px] sm:text-[11px]">  2.3K</p>
                          </div>
                      </div>

                      <div className="flex  gap-2 mt-2 mb-2">
                          <div className='SilverButtonWithText   cursor-pointer'>
                              <img src="/Svg/Saved.svg" className="Avatar  size-[12px] xs:size-[15px] sm:h-[16px]" alt="" />
                          </div>
                          <div className='SilverButtonWithText  cursor-pointer'>
                              <img src="/Svg/message2.svg" className="Avatar size-[12px] xs:size-[15px] sm:h-[16px]" alt="" />
                          </div>

                      </div>

                  </div>

                  {/* End Wrapper div */}
              </div>
              {/* end of influencer List */}
          </div>

      </>
  )

}



export default Home;
