import Card from "../../../../../Components/Card/Card";
import SimpleBarChart from "../../../../../Components/Charts/SimpleBarChart";
import './Index.css';

const Engagement = () => {
  return (
    <>
      <>

        <div className="bg-white w-full   mt-10 rounded-3xl">

          <div className="px-5 py-5 flex flex-col">

            <p className="lato-bold text-lg">Engagement</p>

            <div className="mt-6 ">

<div className="mt-2 grid xs:grid-cols-2 xs:grid-rows-1 gap-y-5  md:grid-cols-3 md:grid-rows-1  gap-y-5 ">
  <Card Heading="Total Views" totalxzNumbers="30,412" Percentage="1.5" time="LastMonth" Status={0} />
  <Card Heading="Total Likes" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={1} />
  <Card Heading="Total Comments" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={0} />

</div>
<p className="lato-regular mt-12 ml-7">Total Likes and Comments</p>
{/* 2px border and Bar chart */}
<div className="  border-2 rounded-xl lato-regular text-[10px]  mdm:text-base">

<div className="flex justify-between mx-10 w-[200px] mx-auto mb-5 mt-5 ">

<div className="flex items-center gap-x-2">
<div className="size-[10px] bg-blue-500 rounded-full"></div>
<p>Likes</p>
</div>
<div className="flex items-center gap-x-2">
<div className="size-[10px] bg-green-500 rounded-full"></div>
<p>Comments</p>
</div>

</div>
<div className="w-full h-[200px] overflow-scroll  scroll-container ">
<div className=" w-[900px] h-full  md:w-full">

<SimpleBarChart/>
  </div>
</div>

</div>

</div>


            
          </div>
        </div>

      </>


    </>
  )
}






export default Engagement