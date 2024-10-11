import { DropdownSvg } from "../../../../../Components/Svg/DropDownSvg";
import {useState} from 'react';
import WorkDetails from "./WorkDetails";
const WorkOverView = () => {

  const navItems = ['All', 'Instruction', 'New Post', 'Drafted'];
  return (
    <>
    <div className="mt-10">

      
    <div className="  mx-10 mt-2 grid gap-y-4  grid-cols-2  grid-rows-3 xs:grid-cols-3 xs:grid-rows-2   md:grid-cols-6 md:grid-rows-1   justify-center items-center ">
        <SimpleCard name="Total Brand" price="20" newPosts="+2 posts" />
        <SimpleCard name="Total Posts" price="6" newPosts="+3 posts" />
        <SimpleCard name="New Posts" price="6" newPosts="+1 posts" />
        <SimpleCard name="Totol Earned" price="$600" />
        <SimpleCard name="Draft Content" price="1" />
        <SimpleCard name="Instruction" price="1" />
      </div>

      <WorkDetails/>
    </div>
    
    
    </>
  )
}

const SimpleCard = ({ name, price, newPosts = "" }) => {
  return (
    <>
      <div className=" text-[10px] w-[100px] h-[80px] mdm:w-[120px] mdm:h-[80px] bg-white rounded-2xl flex flex-col  OverViewBox1 justify-self-center">
        <div className=" px-3 py-1   mdm:py-2 lato-regular ">
          <p className="lato-regular text-[14px]">{name}</p>
          <p className=" text-sm mdm:text-[12px]  ">{price}</p>
          <p className="text-primary text-[12px]">{newPosts}</p>
        </div>
      </div>
    </>
  )
}


export default WorkOverView