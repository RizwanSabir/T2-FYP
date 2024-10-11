import { DropdownSvg } from '../../../../../Components/Svg/DropDownSvg';
import {useState} from 'react';
const Saved = () => {
  

  

  const navItems = ['All Influencer','Favorites', 'My List'];

  
  const dummyData = [
    {
      name: 'Allan Wood',
      img: '/Media/p1.jpg',
      likes: '2 Messages',
      Er: '10.1k',
      Impression: '1300',
      Budget: '%100 after draft',
      Posts: '15$',
    },
    {
      name: 'John Doe',
      img: '/Media/p2.jpg',
      likes: '10 Messages',
      Er: '1.1k',
      Impression: '1100',
      Budget: '50% before after',
      Posts: '30$',
    },
    {
      name: 'John Doe',
      img: '/Media/p3.jpg',
      likes: '0 Messages',
      Er: '12.1k',
      Impression: '120',
      Budget: '50% before after',
      Posts: '10$',
    },
    // Add more dummy data as needed
  ];
  return (

<>


<div className="pt-5  h-screen">
<div className="bg-white xs:w-[500px] sm:w-[600px] mdm:w-[700px]  lg:w-[800px] mx-auto rounded-2xl">



<div className="flex flex-col    gap-y-2 pl-2 borde-b-[1px] pb-2 ">
<div className="flex justify-between text-[9px] sm:text-[10px] mdm:text-[12px] m-5">
<p className="poppins-semibold text-base" >My Network</p>
{/* <div className="w-[70px]  sm:w-[100px] mdm:w-[145px]   ">
  <p className={`OrangeButtonBorder cursor-pointer  text-primary`}  >+ Add Influencer</p>
  </div> */}
  <div className="OrangeButtonWithText-v2 mt-2 xs:mt-0   flex items-center  cursor-pointer"><p>Add Influencer</p></div>
 
</div>

<div className="xs:flex text-[9px] sm:text-[10px] mdm:text-[12px] ">
{/* Left hand side */}
  <ul className='space-y-1 hidden xs:block   w-[200px] ml-5 lato-regular xs:pr-2'>
    <li className="poppins-semibold">All Influencer</li>
    <li className="">Favorites</li>
    <li >My List</li>
  </ul>
  <div className="xs:hidden mb-5">
          <Dropdown items={navItems} />
        </div>

{/* Right hand side */}
  <div className="w-full mr-5">

 <div className="border-[1px] px-2 py-1 flex w-full items-center">
  <p  className="poppins-semibold">All</p>
  <span className="text-[12px] lato-light ml-1">22</span>
 </div>

<div className="flex flex-col items-center xs:items-start   ">

<div className="flex   items-center      mt-2 w-[250px] xs:w-[300px]  relative">
  <img  className="size-[20px]  absolute top-3 left-2" src="/Svg/SearchIcon.svg" alt="" />
<input  className="outline-0  bg-none w-full  h-[40px]   bg-black/5 rounded-lg pl-9" type="text" placeholder="Search" />
 </div>

 <div className="  OrangeButtonWithText-v2 items-center  py-2  w-[150px]  mt-2">
  <p>Send Messages</p>
 </div>
</div>






 <div className="bg-white    ">
{/* 2px border and Bar chart */}
<div className="  rounded-xl lato-regular  mdm:text-base  mt-4  scroll-container   ">

<div className="p-1 rounded-lg text-[9px] sm:text-[10px] mdm:text-[13px]">


<div className=" w-[290px] sm:w-[400px] grid grid-cols-12  auto-rows-fr text-center  border-y-[1px] py-1   ">
{/* //Draw the table here */}
<div className="col-span-3 mt-[2px]">
<div className= "flex justify-center items-center "> 
  <div className="size-[20px] rounded-lg border-2">

    </div>
     </div>

</div>
{/* co1 */}
<div className="col-span-3  text-center">
 <p className="lato-bold ">Influencer</p>

</div>
{/* co1 */}
<div className="col-span-3 text-center">
<p className="lato-bold ">Messages </p>
 
</div>
{/* co1 */}
<div className="col-span-3">
<p className="lato-bold">Followers  </p>

</div>
{/* co1 */}





</div>
{/* //here is the row */}


{dummyData.map((data, index) => (
        <TableRows
          key={index}
          name={data.name}
          img={data.img}
          likes={data.likes}
          Er={data.Er}
          Impression={data.Impression}
          Budget={data.Budget}
          Posts={data.Posts}
          Status={data.Status}
        />
      ))}
</div>


</div>
</div>

  </div>

</div>


</div>

</div>

</div>
</>  )
}



const TableRows = ({ name, img, likes, Er, Impression, Budget, Posts, Status }) => {
  return (
    <div className="w-[290px] sm:w-[400px] grid grid-cols-12  text-center mt-3   border-b-[1px] pb-3 IsBorder text-[9px] sm:text-[10px] mdm:text-[12px]">

<div className="col-span-3 text-center flex justify-center">
<div className= "flex justify-center items-center "> 
  <div className="size-[20px] rounded-lg border-2">

    </div>
     </div>
      </div>

      <div className="col-span-3 text-center">
        <div className="flex items-center justify-center gap-x-3">
          <img className='size-[35px] Avatar' src={img} alt={name} />
          <p>{name}</p>
        </div>
      </div>

      <div className="col-span-3 text-center flex justify-center">
        <div className="flex items-center">
          <p>{likes}</p>
        </div>
      </div>

     <div className="col-span-3    flex justify-center">
     <div className="flex w-[60px] ">
          <img className='size-[25px] p-1 Avatar ' src={`/Images/Instagram.svg`} alt="Instagram" />
          <p>{Er}</p>
        </div>
     </div>

     

      
    </div>
  );
}


const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState([0, 'All Influncer']);

  return (
    <div className="flex items-end mr-3 flex-col poppins-semibold   ">
      <div
        className="p-1 flex justify-center w-[100px] navBgColor rounded-full items-center  text-[10px]"
        onClick={() => setIsOpen([!isOpen[0], isOpen[1]])}>
        <div>{isOpen[1]}</div>
        <DropdownSvg />
      </div>
      {isOpen[0] ? (
        <ul className="poppins-regular flex gap-y-2 flex-col mt-2 text-[10px]">
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



export default Saved