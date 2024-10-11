import ScreenSizeDisplay from "../../../../../useCurrentScreenSize";
import './Index.css'
const Payment = () => {

  const dummyData = [
    {
      name: 'Allan Wood',
      img: '/Media/p1.jpg',
      likes: '2/2/2023',
      Er: '20$',
      Impression: '1300',
      Budget: '%100 after draft',
      Posts: '15$',
    },
    {
      name: 'John Doe',
      img: '/Media/p2.jpg',
      likes: '18/7/2023',
      Er: '230$',
      Impression: '1100',
      Budget: '50% before after',
      Posts: '30$',
    },
    {
      name: 'John Doe',
      img: '/Media/p3.jpg',
      likes: '23/4/2023',
      Er: '30$',
      Impression: '120',
      Budget: '50% before after',
      Posts: '10$',
    },
    // Add more dummy data as needed
  ];

  return (
   <>
   {/* <ScreenSizeDisplay/> */}
   {/* xs:w-[550px] sm:w-[600px]  mdm:w-[700px] lg:w-[900px] */}
   <div className="h-screen">
   <div className="  bg-white  mx-auto  mt-10 rounded-3xl  px-2  w-[300px] xs:w-[550px] sm:w-[600px]  mdm:w-[700px] lg:w-[900px]">
  <p className="lato-bold pt-8 ml-7">Payment</p>
{/* 2px border and Bar chart */}
<div className="  rounded-xl lato-regular  mdm:text-base  mt-4  scroll-container   ">

<div className="p-1 rounded-lg text-[9px] sm:text-[10px] mdm:text-[13px]">


<div className="w-[900px] grid grid-cols-12  auto-rows-fr text-center  border-b-2 pt-1 pb-1 border-t-[1px]  ">
{/* //Draw the table here */}

{/* co1 */}
<div className="col-span-3  text-center">
 <p className="lato-bold ">Influencer</p>

</div>
{/* co1 */}
<div className="col-span-2 text-center">
<p className="lato-bold ">Date </p>
 
</div>
{/* co1 */}
<div className="col-span-1">
<p className="lato-bold">Payment  </p>

</div>
{/* co1 */}

{/* co1 */}
<div className="col-span-2">
<p className="lato-bold   ">Payment Details </p>


</div>

{/* co1 */}
<div className="col-span-2">
<p className="lato-bold   ">Total Paid</p>

</div>
<div>
<p className="lato-bold   ">Cancel</p>

</div>

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

   </>
  )
}

const TableRows = ({ name, img, likes, Er, Impression, Budget, Posts, Status }) => {
  return (
    <div className="w-[900px] grid grid-cols-12  text-center mt-3   border-b-[1px] pb-3 IsBorder">
      <div className="col-span-3 text-center">
        <div className="flex items-center justify-center gap-x-3">
          <img className='size-[35px] Avatar' src={img} alt={name} />
          <p>{name}</p>
        </div>
      </div>

      <div className="col-span-2 text-center flex justify-center">
        <div className="flex items-center">
          <p>{likes}</p>
        </div>
      </div>

      <div className="col-span-1">
        <p className="p-1">{Er}</p>
      </div>

     

      <div className="col-span-2">
        <p className="p-1">{Budget}</p>
      </div>

      <div className="col-span-2">
        <p className="p-1">{Posts}</p>
      </div>

      <div className="col-span-1 pr-2 flex justify-center cursor-pointer">
        <p className="p-1 size-[30px]"><img src="/Svg/Close.svg" alt="" /></p>
      </div>
    </div>
  );
}

export default Payment