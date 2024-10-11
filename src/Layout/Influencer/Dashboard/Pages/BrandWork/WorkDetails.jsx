import { useState } from 'react'
import { DropdownSvg } from '../../../../../Components/Svg/DropDownSvg';
import {useNavigate} from 'react-router-dom';
const WorkDetails = () => {

    const navItems = ['All', 'Instruction', 'New Post', 'Drafted'];
const navigate=useNavigate()

    const dealData = [
        {
            image: '/Media/p1.jpg',
            brandImage: '/Media/p1.jpg',
            brandName: 'PHATOIL',
            brandHandle: '@Phatoiloffical',
            description: 'Our PHAT brand was founded based on our founder’s personal journey exploring with a passion for wellness and nature, began researching essential oil uses from various cultures around the world.',
            categories: ['Life style', 'fun'],
            fee: '10$ per post',
        },
        {
            image: '/Media/p10.jpg',
            brandImage: '/Media/p12.jpg',
            brandName: 'Rizwan Sabir',
            brandHandle: '@rizwansabir321',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis fugiat nihil nisi iure ut quibusdam soluta. Aliquid animi corporis aut vitae nostrum hic ea, quo incidunt officia! Sunt, nam.',
            categories: ['Life style', 'fun'],
            fee: '10$ per post',
        },
        // Add more deals as needed
    ];


    return (
        <>
            <div className="mt-10 pb-5" >
                <div className="flex justify-start mt-5 ml-10 gap-x-3  ">
                    <Dropdown key={1} items={navItems} initialValue="All" />
                </div>

                <div className="mt-5 space-y-10 text-[9px] xs:text-[10px] sm:text-[10px] md:text-[11px] ">

                    {/* Deal list */}

                    {dealData.map((deal, index) => (
                        <Deal key={index} deal={deal} onClick={() => {navigate('/BrandWork/content')}} /> 
                         ))}

                </div>
            </div>
        </>
    )
}

const Dropdown = ({ items, initialValue }) => {
    const [isOpen, setIsOpen] = useState([0, initialValue]);

    return (
        <div className="flex items-center flex-col poppins-semibold rounded-xl bg-white relative  text-[9px] xs:text-[10px] sm:text-[13px] md:text-[14px]">
            <div
                className=" px-2 py-1 sm:p-2 flex justify-between w-[100px] sm:w-[120px]   items-center relative "
                onClick={() => setIsOpen([!isOpen[0], isOpen[1]])}>
                <div>{isOpen[1]}</div>
                <DropdownSvg />
            </div>
            {isOpen[0] ? (
                <ul className="poppins-regular flex gap-y-2 flex-col mt-2 absolute top-10 bg-white w-full p-2 rounded-xl">
                    {items.map((item, index) =>
                        isOpen[1] !== item ? (
                            <li key={index} className="dropdown-item" onClick={() => setIsOpen([0, item])}>
                                {item}
                            </li>
                        ) : null
                    )}
                </ul>
            ) : ""}
        </div>
    );
};

const Deal = ({ deal, onClick }) => {

    return <>


        <div className="flex   xs:flex-col mdm:flex-row w-[250px]  xs:w-[450px] sm:w-[550px]  mdm:w-[600px] md:w-[700px] lg:w-[900px] mx-auto bg-white  overflow-hidden rounded-xl  " >
            {/* Post Image Left side */}
            <div className="   hidden mdm:flex mdm:h-[200px] mdm:w-[500px] md:h-[200px] md:w-[500px] md:items-center justify-center    ">
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

               

               <div className="  flex flex-wrap pb-2 xs:w-full xs:flex gap-x-3 mt-5">
              <div className="flex   gap-x-3">
              <div className="OrangeButtonBorder-v1 text-primary mt-2 xs:mt-0 flex items-center  cursor-pointer" onClick={onClick}><p>+2 new Posts</p></div>
              <div className="BlueButtonWithText-v1 text-primary mt-2 xs:mt-0 flex items-center  cursor-pointer" onClick={onClick}><p>+2 Instructed Post</p></div>
              </div>
               <div className="GreenButtonWithText-v2 text-primary mt-2 xs:mt-0 flex items-center  cursor-pointer" onClick={onClick}><p>+2 Drafted</p></div>
               </div>



            </div>

        </div>

    </>
}


export default WorkDetails