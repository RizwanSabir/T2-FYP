import Card from "../../../../../Components/Card/Card";
import CardWithImage from "../../../../../Components/Card/CardWithImage";
import SimpleCard from "../../../../../Components/Card/SimpleCard";
import SimpleAreaChart from "../../../../../Components/Charts/SimpleAreaChart";
import SimpleBarChart from "../../../../../Components/Charts/SimpleBarChart";
import './Index.css';

const Spendings = () => {
  return (
    <>
      <>

        <div className="bg-white w-full   mt-10 rounded-3xl">

          <div className="px-5 py-5 flex flex-col">

            <p className="lato-bold text-lg">Spendings</p>

            
<div className="lg:flex lg:items-center  ">

<div >
                <CardWithImage Heading="Budget Spent" totalNumbers="30,412" Percentage="1.5" time="LastMonth"  ImageSource="card2.png"/>

</div>



<div className="w-full border-2 mt-10 md:border-none md:mt-0">
<div className="flex justify-between  w-[200px] mx-auto mb-5 ">

<div className="text-center">
<p className="lg:text-2xl lato-bold">$350</p>
<p>Budget Spent on Nur</p>

</div>
</div>
<div className="w-full h-[200px] overflow-scroll scroll-container">
<div className="w-[900px] h-full  md:w-full">

<SimpleAreaChart/>
  </div>
</div>

</div>
</div>

{/* 2px border and Bar chart */}








            
          </div>
        </div>

      </>


    </>
  )
}






export default Spendings