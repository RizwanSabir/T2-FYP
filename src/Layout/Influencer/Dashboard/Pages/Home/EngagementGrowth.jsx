import SimpleLineChart from "../../../../../Components/Charts/SimpleLineChart";
import './Index.css';

const EngagementGrowth = () => {
  return (
    <>
      <>

        <div className="bg-white w-full   mt-10 rounded-3xl">

          <div className="px-5 py-5 flex flex-col">

            <p className="lato-bold text-lg">Auidence Growth </p>


            <div className="mt-6  poppins-regular text-[10px] md:text-base">

              <p>Net Average growth Overtime</p>


             <div className="flex mdm:justify-end gap-x-7">
      

      <p><span className="text-green-500 text-xl font-bold"> &#8593;</span> <span className="text-green-500 text-sm">1 %</span>
      <span className="text-gray-400 "> vs Last Year</span>
    </p>
<div className="flex justify-center  gap-x-2 mdm:block">
<div className="flex items-center gap-x-2">
<div className="size-[10px] bg-blue-500 rounded-full"></div>
<p>Likes</p>
</div>
<div className="flex items-center gap-x-2">
<div className="size-[10px] bg-green-500 rounded-full"></div>
<p>Comments</p>
</div>
</div>
      </div>
          

              <div className="  h-[150px]   md:w-full mdm:h-[220px] mt-7      scroll-container" >
            <div className="w-[900px] h-full  md:w-full">
            <SimpleLineChart/>
            </div>
              </div>

            </div>
          </div>
        </div>

      </>


    </>
  )
}






export default EngagementGrowth