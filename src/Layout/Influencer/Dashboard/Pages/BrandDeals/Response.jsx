import { useState } from 'react'
import { DropdownSvg } from '../../../../../Components/Svg/DropDownSvg';
import { motion } from 'framer-motion';
import ScreenSizeDisplay from '../../../../../useCurrentScreenSize';
const Response = () => {

  const navItems = ['All', 'Requested', 'Approved'];

  const dealData = [
    {
      image: '/Media/p1.jpg',
      brandImage: '/Media/p1.jpg',
      brandName: 'PHATOIL',
      brandHandle: '@Phatoiloffical',
      description: 'Our PHAT brand was founded based on our founder’s personal journey exploring with a passion for wellness and nature, began researching essential oil uses from various cultures around the world.',
      categories: ['Life style', 'fun'],
      fee: '10$ per post',
      Status:"Requested"
    },
    {
      image: '/Media/p10.jpg',
      brandImage: '/Media/p12.jpg',
      brandName: 'Rizwan Sabir',
      brandHandle: '@rizwansabir321',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis fugiat nihil nisi iure ut quibusdam soluta. Aliquid animi corporis aut vitae nostrum hic ea, quo incidunt officia! Sunt, nam.',
      categories: ['Life style', 'fun'],
      fee: '10$ per post',
      Status:"Approved"
    },
    // Add more deals as needed
  ];
  return (
    <>
      {/* wrapper of div */}
      <div className="  text-[9px] xs:text-[10px] sm:text-[13px] md:text-[11px]">

        <div className="list-none   w-[200px] xs:w-[400px] ml-10  flex rounded-full mt-5  sm:flex-nowrap gap-x-3  lg:gap-x-4">
          <NavBarItems items={navItems} path={"Dashboard"} />
        </div>


      <div className="mt-10 space-y-10 pb-10 text-[9px] xs:text-[10px] sm:text-[10px] md:text-[11px]">

      {dealData.map((deal, index) => (
              <Deal key={index} deal={deal} />
            ))}
      </div>

      </div>

    

    </>
  )
}



const NavBarItems = ({ items, path }) => {
  const [isHover, setIsHover] = useState(-1);
  const [isActive, setIsActive] = useState(0);


  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="poppins-regular relative  z-50 w-full  text-center py-1 sm:py-2 cursor-pointer   bg-white rounded-full"
          onMouseEnter={() => setIsHover(index)}
          onMouseLeave={() => setIsHover(-1)}
          onClick={() => {
            setIsActive(index);
          }}
        >
          <li className={`${isHover === index ? 'text-primary' : ''}  ${isActive === index ? 'text-white' : ""} `}>
            <p>{item}</p>
            {isActive === index && (
              <motion.div layoutId="1" className="absolute w-full bg-black h-full top-0 left-0  rounded-full -z-10"></motion.div>
            )}
          </li>
        </div>
      ))}
    </>
  );
};




const Deal = ({ deal,  }) => {

  return <>


    <div className="flex   xs:flex-col mdm:flex-row w-[250px]  xs:w-[450px] sm:w-[550px]  mdm:w-[600px] md:w-[700px] lg:w-[900px] mx-auto bg-white  overflow-hidden rounded-xl" >
      {/* Post Image Left side */}
      <div className="   hidden mdm:flex mdm:h-[200px] mdm:w-[500px] md:h-[200px] md:w-[600px] md:items-center justify-center    ">
        <img className=" aspect-square Avatar-v1" src={deal.image} alt="" />
      </div>

      {/* Right Side of the Psit  */}
      <div className="ml-5 pt-2 pr-2" >

        <div className="flex gap-x-2 items-center " >
          <div className="flex items-center size-[35px] sm:size-[50px] ">
            <img className="aspect-square Avatar" src={deal.brandImage} alt="" />
          </div>
          <div className=" poppins-regula  text-[7px] sm:text-[10px] mdm:text-[12px]">
            <p className="poppins-semibold">{deal.brandName}</p>
            <p className="text-black/50 poppins-semibold  ">{deal.brandHandle}</p>
          </div>
        </div>

        <div className="text-black/60 poppins-semibold mt-1">
          <p>{deal.description}</p>
        </div>

        <div className="hidden xs:flex gap-2 mt-2 mb-2 poppins-semibold gap-x-2 ">
          {deal.categories.map((category, index) => (
            <p key={index} className='SilverButtonWithText-v1 cursor-pointer'>{category}</p>
          ))}
        </div>

        <div className="flex justify-between mx-2 items-center pb-2 mt-2 text-center poppins-semibold">
          <div>
            <p>You will receive</p>
            <p className='GreenButtonWithText-v1  py-2    cursor-pointer pt-2'>{deal.fee}</p>
          </div>
          <div className="flex space-x-2">
            <div className={`${deal.Status==="Approved"?"OrangeButtonBorder text-primary":"SilverButtonWithText-v3 "} mt-2 xs:mt-0 flex items-center  cursor-pointer`}><p>{deal.Status}</p></div>
            
          </div>
        </div>



      </div>

    </div>

  </>
}


export default Response