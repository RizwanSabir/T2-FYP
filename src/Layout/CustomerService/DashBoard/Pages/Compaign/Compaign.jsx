
import { useNavigate } from 'react-router-dom';
import TaskTable from '../../../../../Components/Table/TaskTable';

const Compaign = () => {
  const navigate = useNavigate();


 
  return (
    <>
      {/* Top bar total posted ,active comapign */}
      <div className="pt-5 mx-5  mdm:mx-auto mdm:w-[800px]   overflow-x-auto ">

        {/* Information bar of whole campaign */}

        <div className="px-2 py-3 sm:py-7 rounded-2xl border-2 bg-white  flex justify-around items-center ">

          <div className="mr-1" >
            <p className="text-black/50 poppins-regula text-[7px] sm:text-[10px] mdm:text-[12px]">Total Queries</p>
            <div className="flex justify-between">
              <p className="poppins-semibold text-[7px] sm:text-[10px] mdm:text-[12px]"><span className="text-primary">10,000</span> </p>
            </div>
          </div>

          {/* Left border */}
          <div className=" border-l-2  h-[30px]"></div>

          <div className="pl-1 mdm:pl-10  flex flex-col items-center ">
            <p className="text-black/50 poppins-regular text-[7px] sm:text-[10px] mdm:text-[12px] ">Progress</p>
            <p className="poppins-semibold text-[7px] sm:text-[10px] mdm:text-[12px]">1</p>
          </div>

           {/* Left border */}
          <div className=" border-l-2  h-[30px]"></div>

          <div className=" pl-1 mdm:pl-10 flex flex-col items-center text-[7px] sm:text-[10px] ">
            <p className="text-black/50 poppins-regular  mdm:text-[12px]">Pending</p>
            <p className="poppins-semibold mdm:text-[12px]">10</p>
          </div>

           {/* Left border */}
          <div className=" border-l-2  h-[30px]"></div>

          <div className=" pl-1 mdm:pl-10 flex flex-col items-center text-[7px] sm:text-[10px] mdm:text-[12px]">
            <p className="text-black/50 poppins-regular ">Resolved</p>
            <p className="poppins-semibold  text-green-500">2.5K</p>
          </div>

        </div>

        <p className="lato-bold  mt-5">Queries</p>
   
        <TaskTable/>


       
      </div>

      

    </>
  )
}

export default Compaign