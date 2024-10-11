import { useState } from 'react';
import { DropdownSvg } from "../../../../../Components/Svg/DropDownSvg";
import ScreenSizeDisplay from '../../../../../useCurrentScreenSize';

const Workflow = () => {
  const navItems = ['Published', 'Draft Submitted', 'Instruction Sent', 'Payment'];

  return (
    <>


      <div>
        {/* showing all the Influncer here */}
        <div>

          {/* It will have all the Influncer lists ...Wrapper around the List */}

          <div className=" sm:flex justify-center   gap-x-5      m-5 ">
            {/* Heading and outer Wrapper */}

            <div className="bg-white rounded-3xl px-4 py-5 mb-5">



              <div className="flex justify-between">
                <p className="poppins-semibold mt-2 ">Influencer</p>
                <div>
                  <div className="">
                    <Dropdown items={navItems} />
                  </div>
                </div>
              </div>

              {/* List of influencer */}

              <InfluencerList ImageSrc="/Media/p1.jpg" Name="Sana Ali" Time="19 hours" Bio="At last wasted #sad " ColorBorder="GreenButtonWithText" Status="Published" TextColor="text-green-500" />
              <InfluencerList ImageSrc="/Media/p2.jpg" Name="Rizwan Sabir" Time="23 hours" Bio="This is wondorful day #enjoy #beautiful" ColorBorder="OrangeButtonBorder" TextColor="text-primary" Status="Draft Submitted" />
              <InfluencerList ImageSrc="/Media/p7.jpg" Name="Ali khan" Time="2 hours" Bio="Just posting #fun #Enjoyable" ColorBorder="BlueButtonWithText" Status="Instruction Sent" TextColor="text-blue-500" />
              <InfluencerList ImageSrc="/Media/p7.jpg" Name="Ali khan" Time="2 hours" Bio="Just posting #fun #Enjoyable" ColorBorder="SilverButtonWithText" Status="Deal Request" TextColor="text-gray-500" />

            </div>

            {/* Right Bar */}

            <div className="bg-white xs:[w-300px] md:w-[400px] rounded-3xl p-4">

              {/* Top Bar */}

              <div className="grid grid-cols-12 items-center">

                {/* Selected Influencer Profile */}

                <div className="flex justify-self-center self-center size-[35px] sm:size-[45px]   col-span-2">
                  <img className="aspect-square Avatar" src="/Media/p1.jpg" alt="" />
                </div>

                <div className="col-span-6 text-[9px] sm:text-[10px] mdm:text-[12px]">
                  <p className="poppins-semibold">Sana Sabir</p>
                  <p>@sanasabir321</p>
                </div>
                <div className="w-[70px]  sm:w-[100px] mdm:w-[100px] text-center col-span-3 text-[9px] sm:text-[10px] mdm:text-[10px]">
                  <p className={`OrangeButtonWithText cursor-pointer  text-primary`}  >Send Invitation</p>
                </div>
              </div>

              {/* New Target for Influencer */}
              <div>
                {/* Planned */}
                <div className="flex justify-between text-[9px] sm:text-[10px] mdm:text-[10px] items-center mt-5 mx-10">
                  <p className="poppins-semibold text-[13px]">Planned</p>
                  <div className="OrangeButtonWithText mt-2 xs:mt-0  items-center  cursor-pointer"><p>Edit</p></div>
                </div>

                {/* Tasks added by brand  */}
                <div className="border-2 mx-10 mt-3 p-5 text-[9px] sm:text-[10px] mdm:text-[12px] rounded-xl">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between">
                      <p className="poppins-semibold">Task</p>
                      <p className="text-black/50 lato-regular">2 post</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="poppins-semibold">Deadline</p>
                      <p className="text-black/50 lato-regular">29 Dec ,2023</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="poppins-semibold">Draft Submission</p>
                      <p className="text-black/50 lato-regular">2 days before</p>
                    </div>
                  </div>
                </div>

                {/* Payment */}

                <div className="flex justify-between text-[9px] sm:text-[10px] mdm:text-[10px] items-center mt-5 mx-10">
                  <p className="poppins-semibold text-[13px]">Payment</p>
                  <div className="OrangeButtonWithText mt-2 xs:mt-0  items-center  cursor-pointer"><p>Edit</p></div>
                </div>

                <div className=" border-2 mx-10 mt-3 p-5 text-[9px] sm:text-[10px] mdm:text-[12px] rounded-xl">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between">
                      <p className="poppins-semibold">Payment term</p>
                      <p className="text-black/50 lato-regular">50% before and after</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="poppins-semibold">Budget</p>
                      <p className="text-black/50 lato-regular">600$</p>
                    </div>
                  </div>
                </div>

                {/* Link copy */}

                <div className="flex justify-between text-[9px] sm:text-[10px] mdm:text-[10px] items-center mt-5 mx-10">
                  <p className="poppins-semibold text-[13px]">Link</p>
                  <div className="OrangeButtonWithText xs:hidden mt-2 xs:mt-0  items-center  cursor-pointer"><p>Copy</p></div>

                </div>
                <div className=" border-2 mx-10 mt-1 p-1 text-[9px] sm:text-[10px] mdm:text-[12px] rounded-xl">
                  <div className="flex justify-between  items-center ml-1 overflow-hidden">
                    <p>https://Influencerharbor.com/invite/..</p>
                    <div className="OrangeButtonWithText  hidden xs:block    items-center  cursor-pointer"><p>Copy</p></div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

const InfluencerList = ({ ImageSrc, Name, Time, Bio, ColorBorder, Status, TextColor }) => {
  return <>



    <div className=" mt-5">
      <div className="flex     items-center">
        <div className="flex items-center size-[35px] sm:size-[50px]  ">
          <img className="aspect-square Avatar" src={ImageSrc} alt="" />
        </div>

        <div className="grid grid-cols-6 justify-between w-full items-center  text-[9px] sm:text-[10px] mdm:text-[12px] ">
          <div className=" poppins-regular ml-2 mr-2  col-span-4">
            <p className=" poppins-semibold">{Name}</p>
            <p className=" poppins-regular text-black/40">{Time}</p>
            <p>{Bio}</p>
          </div>

          <div className="w-[70px]  sm:w-[80px]  md:w-[120px] text-center col-span-2">
            <p className={`${ColorBorder}  cursor-pointer  ${TextColor}`}  >{Status}</p>
          </div>
        </div>

      </div>
    </div>
  </>
}



const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState([0, 'Overview']);

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
      ) : ""}
    </div>
  );

};


export default Workflow