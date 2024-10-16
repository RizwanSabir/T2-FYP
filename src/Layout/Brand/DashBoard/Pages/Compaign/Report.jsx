import Card from "../../../../../Components/Card/Card"
import CardWithImage from "../../../../../Components/Card/CardWithImage"

const Report = () => {
  return (
  <>
   
   <div className="bg-white mx-auto w-[300px] xs:w-[550px] sm:w-[600px]  mdm:w-[700px] lg:w-[900px]  mt-10 rounded-3xl ">

<div className="px-5 py-3 flex flex-col ">

  <p className="lato-bold ">OverView</p>


  {/* <div className="mt-6  bg-red-500 xs:bg-green-500 mdm:bg-red-500 md:bg-blue-500 lg:bg-red-500"> */}
  <div className="mt-6 ">

    <div className="mt-2 grid xs:grid-cols-2 xs:grid-rows-3 gap-y-5  md:grid-cols-3 md:grid-rows-2  gap-y-5 ">
      <Card Heading="Total Views" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={1} />
      <Card Heading="Total Likes" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={0} />
      <Card Heading="Total Comments" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={1} />

    {/* </div>
    <div className="flex  justify-between flex-wrap"> */}
      <CardWithImage Heading="Total Engagment" totalNumbers="30,412" Percentage="1.5" time="LastMonth" ImageSource="card1.png" />
      <Card Heading="ER" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={1} />
      <CardWithImage Heading="Budget Spent" totalNumbers="30,412" Percentage="1.5" time="LastMonth"  ImageSource="card2.png"/>

    </div>

  </div>

</div>
</div>
  
  </>
  )
}

export default Report