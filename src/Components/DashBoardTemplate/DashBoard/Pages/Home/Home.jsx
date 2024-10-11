import { useState } from 'react'
import { motion } from 'framer-motion';
import './Index.css';
import { DropdownSvg } from '../../../../Svg/DropDownSvg';



const Home = ({ TopMessage, date, navItems ,children}) => {

  let navItems = ['OverView', 'Audience', 'Engagment', 'Spendings', 'Influencers', 'Media']
  return (
    <>
      {/* Setting the Name and Welcome msg  */}
      <div className="px-6 py-3 ">
        <div >

          {/* Setting the Top Message to be displayed on the top of main page */}
          <h1 className="lato-bold text-xl">Welcome, Rizwan Sabir</h1>
          <h1 className="lato-regular text-sm text-black/50">27 March 2024</h1>
        </div>

        {/* all the Nav Items will be display here OverView ,Auidance  */}
        <ul className=" flex text-[10px] justify-end  sm:text-base sm:justify-center  list-none  mt-7">

          <div className=" navBgColor hidden   xs:flex  rounded-full  xs:py-2 xs:px-2   sm:flex-nowrap   md:px-10 md:py-2  lg:gap-x-4">
            <NavItems name={navItems} />
          </div>

          {/* This will be displayed upon the small screen drop down  */}
          <div className="xs:hidden"> <Dropdown items={navItems} /></div>

        </ul>

      </div>
    </>
  )
}


const NavItems = ({ name }) => {
  // If nothing is hovering change the state to -1
  const [IsHover, setIsHover] = useState(-1);
  const [IsActive, setIsActive] = useState(0);

  return (
    <>
      {
        name.map((v, i) => (
          <div key={i}
            className="poppins-semibold relative px-1 z-50 w-full sm:px-2 text-center sm:py-2 cursor-pointer  text-sm"
            onMouseEnter={() => { setIsHover(i) }}
            onMouseLeave={() => { setIsHover(-1) }}
            onClick={() => { setIsActive(i) }}>

            <li className={IsActive === i || IsHover === i ? 'text-primary' : ""}>

              {/* Name of the Nav item will be display here */}
              <p>{v}</p>

              {/* //Show the Back button upon User Click e.g  White background */}
              {IsActive === i && (
                <motion.div layoutId="1" className="absolute w-full bg-white h-full top-0 left-0 p-2 sm:p-5 rounded-full -z-10"></motion.div>
              )}

            </li>
          </div>
        ))
      }
    </>
  );
};





const Dropdown = ({ items }) => {

  // These are the NavItems that will be displayed upon the small screen else.g mobile

  const [isOpen, setIsOpen] = useState([0, 'OverView']);

  return (
    <>

      <div className="flex   items-center flex-col  poppins-semibold">
        <div className=" p-2 flex justify-between w-[100px] navBgColor rounded-full items-center" onClick={() => {setIsOpen([!isOpen[0], isOpen[1]])}}>
       {/* show the drop down only when user click on it  */}
          <div>{isOpen[1]}</div>
          <div> <DropdownSvg /></div>

        </div>

       {/* show the drop down List     */}

        {isOpen[0] ? (
          <ul className=" poppins-regular flex gap-y-2 flex-col mt-2">

            {items.map((item, index) => (
              // Not show the item that is being selected at that time 
              isOpen[1] !== item && <li onClick={() => {setIsOpen([0, item])}
          
            }
                key={index} className="dropdown-item">{item}</li>
            ))}
          </ul>
        ) : ""}

      </div>

    </>
  );
};


export default Home