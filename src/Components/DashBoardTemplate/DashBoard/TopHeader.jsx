import { useLayoutEffect, useState, useEffect, useRef } from 'react'
import { motion, MotionConfig } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
const TopHeader = ({ SideBar, setSideBar, Pages, activeButton }) => {

  //  activeButton give the active location of the page 

  //Removing the / from the Pages so that i can display the Correct Name
  let PageName = Pages.map(path => path.substring(1));

  // If side bar is open Change the color 
  let HandBurger = `h-1 rounded-full  w-[30px] my-1  ${SideBar ? 'bg-white' : 'bg-black'}`

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dropdownRef = useRef(null);
  const handleLogout = () => {
    // Clear the cookie
    Cookies.remove('pC'); // Replace with your actual cookie name
    Cookies.remove('token'); // Replace with your actual cookie name
    Cookies.remove('U'); // Replace with your actual cookie name

    // Perform additional logout actions here, like redirecting the user
     window.location.href = '/Login';

    // Close the dropdown menu
    setIsDropdownOpen(false);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <>
      <div className='w-full h-[60px] bg-white flex items-center   '>     {/* DashBoard Top Heading  */}
        <div className='poppins-semibold mx-10 flex justify-between w-full rounded-full items-center'>
          <div className='flex  items-center '>

            <MotionConfig transition={{ duration: 0.5 }}>

              <div
                className={` md:hidden mr-4 z-20 ${SideBar ? 'text-black' : 'text-white'}`}
                onClick={() => {
                  setSideBar(!SideBar)
                }}>
                {/* Hamburger Three lines and their animtion  */}
                <motion.div style={{ transformOrigin: "left center" }} animate={SideBar ? { rotate: 45, transformOrigin: "left center", x: "-2px" } : ""} className={HandBurger}  ></motion.div>
                <motion.div animate={SideBar ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 }} className={HandBurger}  ></motion.div>
                <motion.div style={{ transformOrigin: "right center" }} animate={SideBar ? { rotate: -45, transformOrigin: "right center ", x: "-11px", y: -17 } : ''} className={HandBurger} ></motion.div>

              </div>

            </MotionConfig>

            {/* Header Name is Display here  */}
            <p>{PageName[activeButton]}</p>

          </div>
          {/* Profile picture and Notification Icon are Displayed Here  */}

          {/* <div className='flex   justify-between w-[100px]'>
            <img src="/Svg/Notification.svg" alt="" />
            <img className='size-[45px]   Avatar' src="/Media/p1.jpg" alt="" /> */}

          <div className='relative'>
            <div className='flex justify-between w-[100px]' onClick={toggleDropdown}>
              <img src="/Svg/Notification.svg" alt="Notification" />
              <img className='w-[45px] h-[45px] Avatar rounded-full' src="/Media/p1.jpg" alt="Avatar" />
            </div>
                 {/* When user on the profile picture a drop down is displayed showing the logout and other values */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                id="dropdownDivider"
                className="z-10 absolute right-0 bg-white divide-y divide-orange-100 rounded-lg shadow w-44 text-black dark:divide-orange-600 border-2  border-[#FB773F] text-[12px] mt-2"
              >
                <ul
                  className="py-2  text-black "
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-orange-100  "
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-orange-100  "              >
                      Settings
                    </a>
                  </li>

                </ul>
                <div className="py-2">
                  <a
                   
                    className="block px-4 py-2 hover:bg-orange-100  "
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}



          </div>




        </div>
      </div>


    </>
  )
}

export default TopHeader