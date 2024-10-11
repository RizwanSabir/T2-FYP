
import { useNavigate } from 'react-router-dom';

const Compaign = () => {
  const navigate = useNavigate();


 
  return (
    <>
      {/* Top bar total posted ,active comapign */}
      <div className="pt-5 w-[300px] sm:w-[500px] mdm:w-[700px] mx-auto  h-screen">

        {/* Information bar of whole campaign */}

        <div className="px-2 py-3 sm:py-7 rounded-2xl border-2 bg-white  flex justify-around items-center ">

          <div className="mr-1" >
            <p className="text-black/50 poppins-regula text-[7px] sm:text-[10px] mdm:text-[12px]">Total Posted</p>
            <div className="flex justify-between">
              <p className="poppins-semibold text-[7px] sm:text-[10px] mdm:text-[12px]"><span className="text-primary">10</span> of 19</p>
            </div>
          </div>

          {/* Left border */}
          <div className=" border-l-2  h-[30px]"></div>

          <div className="pl-1 mdm:pl-10  flex flex-col items-center ">
            <p className="text-black/50 poppins-regular text-[7px] sm:text-[10px] mdm:text-[12px] ">Active Campaign</p>
            <p className="poppins-semibold text-[7px] sm:text-[10px] mdm:text-[12px]">1</p>
          </div>

           {/* Left border */}
          <div className=" border-l-2  h-[30px]"></div>

          <div className=" pl-1 mdm:pl-10 flex flex-col items-center text-[7px] sm:text-[10px] ">
            <p className="text-black/50 poppins-regular  mdm:text-[12px]">Total Campaign</p>
            <p className="poppins-semibold mdm:text-[12px]">10</p>
          </div>

           {/* Left border */}
          <div className=" border-l-2  h-[30px]"></div>

          <div className=" pl-1 mdm:pl-10 flex flex-col items-center text-[7px] sm:text-[10px] mdm:text-[12px]">
            <p className="text-black/50 poppins-regular ">Budget Spent</p>
            <p className="poppins-semibold ">2.5K of 5.4K</p>
          </div>

        </div>

        {/* compaign bar and create Campaign button .  */}
        <div className="flex justify-between mt-5">

          <p className="poppins-semibold text-lg">Campaign</p>
          <div className="OrangeButtonWithText mt-2 xs:mt-0  flex items-center sm:text-[12px] lg:text-sm xs:text-[10px] cursor-pointer poppins-regular text-[12px] "><p>+ Create Compaign</p></div>

        </div>

        {/* List of all the Compaigns of the user */}
        <div className="px-2 py-7 rounded-2xl  bg-white bt-10 flex justify-around  mt-5 items-center cursor-pointer" onClick={() => {
          navigate('CurrentCompaign')
        }}>

          <div className="flex gap-x-2 items-center" >
            <div className="flex items-center size-[35px] sm:size-[50px] ">
              <img className="aspect-square Avatar" src="Media/p1.jpg" alt="" />
            </div>
            <div className=" poppins-regula  text-[7px] sm:text-[10px] mdm:text-[12px]">
              <p>Clothing Dec'23</p>
              <div className="flex flex-col sm:flex-row text-black/50">
                <p className="poppins-semibold  ">Nov 20 - Dec 23</p>
                <p className="text-primary poppins-semibold  sm:pl-1">15 influencers</p>
              </div>
            </div>

          </div>

          <div className="pl-10   flex flex-col items-center text-[7px] sm:text-[10px] mdm:text-[12px]">
            <p className=" poppins-regular ">Posted</p>
            <p className="poppins-semibold   text-black/50">19</p>
          </div>


          <div className=" pl-10 flex flex-col items-center text-[7px] sm:text-[10px] mdm:text-[12px]">
            <p className=" poppins-regular ">Budget Spent</p>
            <p className="poppins-semibold  text-black/50">2.5K of 5.4K</p>
          </div>

          <img src="Svg/More.svg" />

        </div>
        <div>
        </div>
      </div>



    </>
  )
}

export default Compaign