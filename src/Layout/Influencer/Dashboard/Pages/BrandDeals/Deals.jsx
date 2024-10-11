import { useState } from 'react'
import { DropdownSvg } from '../../../../../Components/Svg/DropDownSvg';
import ScreenSizeDisplay from '../../../../../useCurrentScreenSize';

const Deals = () => {


  const [ShowDeal, setShowDeal] = useState(0)

  const navItems = ['Category', 'Fashion', 'LifeStyle', 'Clothing'];
  const Fee = ['0-10$', '10-50$', '50-100$', '100$ +'];




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
      {/* Wrapper */}

      {/* It will display the popOver of the Deal the User Select */}
      
      {ShowDeal
        ? <ShowDealPost setShowDeal={setShowDeal} />
        :
        <div className="h-screen text-[9px] xs:text-[10px] sm:text-[10px] md:text-[11px] ">

          {/* Drop Down menus */}
          <div className="flex justify-start mt-5 ml-10 gap-x-3  md:text-[11px]">
            <Dropdown key={1} items={navItems} initialValue="Category" />
            <Dropdown key={2} items={Fee} initialValue="Fee" />
          </div>

          {/* wrapper for all the deals */}
          <div className="mt-5 space-y-10">

            {/* Deal list */}

            {dealData.map((deal, index) => (
              <Deal key={index} deal={deal} onClick={() => {
                setShowDeal(!ShowDeal)
              }} />
            ))}

          </div>
        </div>
      }

    </>
  )
}

const Dropdown = ({ items, initialValue }) => {
  const [isOpen, setIsOpen] = useState([0, initialValue]);

  return (
    <div className="flex items-center flex-col poppins-semibold rounded-xl bg-white relative ">
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


    <div className="flex   xs:flex-col mdm:flex-row w-[250px]  xs:w-[450px] sm:w-[550px]  mdm:w-[600px] md:w-[700px] lg:w-[900px] mx-auto bg-white  overflow-hidden rounded-xl " >
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

        <div className="hidden xs:flex gap-2 mt-2 mb-2 poppins-semibold">
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
            <div className="OrangeButtonBorder text-primary mt-2 xs:mt-0 flex items-center  cursor-pointer" onClick={onClick}><p>View Deal</p></div>
            <div className="OrangeButtonWithText mt-2 xs:mt-0 flex items-center  cursor-pointer"><p>Request Deal</p></div>
          </div>
        </div>



      </div>

    </div>

  </>
}



const ShowDealPost = ({ setShowDeal }) => {



  return (

    <>
      {/* Wrapper */}
      <div className=" bg-white mdm:w-[700px]  md:w-[800px] lg:w-[900px] 
  rounded-xl  mx-auto mt-2 p-2 pr-5   text-[9px] xs:text-[10px] sm:text-[13px] md:text-[12px]">
        {/* Top Header close and Vieew Deal button */}
        <div className="flex justify-end h-[34px] space-x-3">
          <div className="OrangeButtonWithText-v4   flex items-center  cursor-pointer "><p>Request Deal</p></div>
          <img src="/Svg/Close.svg" alt="" className="cursor-pointer" onClick={() => {
            setShowDeal(0)
          }} />
        </div>

        <div className=" mt-10  w-[300px] flex mdm:h-[200px] mdm:w-[500px] md:h-[300px] md:w-[500px] mx-auto  overflow-hidden md:items-center justify-center     ">
          <img className=" aspect-square Avatar-v1" src="/Media/p1.jpg" alt="" />
        </div>


        <div className=" ml-5 xs:ml-10 sm:ml-24    text-[9px] xs:text-[10px] sm:text-[13px] md:text-[12px]">

          <p className="poppins-semibold  mt-5">OverView</p>
          <div className="DealsBorder">
            <p className="text-black/50">Platform</p>
            <p className="font-medium">Instagram</p>
          </div>


          <div className="DealsBorder">
            <p className="text-black/50">Compaign Description</p>
            <p className="font-medium">Our PHATOIL brand was founded based on our founder's personal journey exploring the healing powers of plants.
              With a passion for wellness and nature, began researching essential oil uses from various cultures around the
              world. Our product, PHATOIL Plant Essential Oils, is crafted from natural ingredients, focused on delivering a holistic healing
              experience that nurtures both body and mind.</p>
          </div>

          <div className="DealsBorder">
            <p className="text-black/50">Task Description</p>
            <p className="font-medium">We mainly cooperate in the form of product exchange (we will give you the product as a gift in exchange for a set of photos/3-5 minute
              videos//scrolls and story videos) to introduce your followers to the various benefits and user experience of PHATOIL plant essential oil.
              Suggestions for Video Content 1. Brand introduction. 2. Product use and reviewing. 3. Safe Use and Cautions 4.Purchase and discount
              information. 5. Call to Action Title & Description Requirements: 1. Promotion, affiliate links and discount code will be included in the
              description box. 2. Add the tags #Phatoil #essential oils Copyright: We have the copyright to use the contents for adversting,blog,sitewide
              within 12 months. (We will definitely tag you when we use it)</p>
          </div>

          <p className="poppins-semibold  mt-5 text-[14px]">Influencer Requirements</p>

          {/* Wrapper for grid of 2col and 2 rows */}
          <div className="grid gap-x-11   xs:w-[300px] sm:w-[500px] mx-auto grid-cols-1 xs:grid-cols-2 xs:grid-rows-2">

            <div className="DealsBorder-v1 w-[250px]">
              <p >Influencer Followers</p>
              <p className="font-medium text-black/50">1k+</p>
            </div>
            <div className="DealsBorder-v1 w-[250px]">
              <p >Categories</p>
              <p className="font-medium text-black/50 ">Life Style,Family,Fun</p>
            </div>
            <div className="DealsBorder-v1 w-[250px]">
              <p >Influencer Age</p>
              <p className="font-medium text-black/50 ">19+</p>
            </div>
            <div className="DealsBorder-v1 w-[250px]">
              <p >Influencer Gender</p>
              <p className="font-medium  text-black/50 ">Male</p>
            </div>

          </div>
          <div className="OrangeButtonWithText-v4  w-[250px]  mx-auto py-3 px-2  justify-center mt-10  flex items-center  cursor-pointer "><p>Request Deal</p></div>


        </div>



      </div>

    </>


  )
}


export default Deals