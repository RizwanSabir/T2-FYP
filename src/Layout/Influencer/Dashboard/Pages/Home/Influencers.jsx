import SimpleCard from "../../../../../Components/Card/SimpleCard";
import './Index.css';

const Influencers = () => {



  const dummyData = [
    {
      name: 'Allan Wood',
      img: '/Media/p1.jpg',
      likes: '2.3K',
      Er: '5%',
      Impression: '1300',
      Budget: '$1,349',
      Posts: '3',
      Status: 'Approved'
    },
    {
      name: 'John Doe',
      img: '/Media/p2.jpg',
      likes: '1.8K',
      Er: '4%',
      Impression: '1100',
      Budget: '$900',
      Posts: '2',
      Status: 'Pending'
    },
    {
      name: 'John Doe',
      img: '/Media/p3.jpg',
      likes: '232K',
      Er: '5%',
      Impression: '120',
      Budget: '$310',
      Posts: '10',
      Status: 'Pending'
    },
    // Add more dummy data as needed
  ];


  return (
    <>
      <>

        <div className="bg-white w-full   mt-10 rounded-3xl">

          <div className="px-5 py-5 flex flex-col">

            <p className="lato-bold text-lg">Influencers</p>

            <div className="mt-6 ">

<div className="mt-2 grid gap-x-5  gap-y-5 xs:grid-cols-2 xs:grid-rows-1 sm:gap-y-5  md:grid-cols-4 md:grid-rows-1   justify-center items-center">
 <SimpleCard name="Paid" price="11"/>
 <SimpleCard name="Posts" price="12"/>
 <SimpleCard name="Invited" price="20"/>
 <SimpleCard name="Request" price="2"/>
</div>
<p className="lato-regular mt-12 ml-7">Recent Influencer Performance</p>
{/* 2px border and Bar chart */}
<div className="  rounded-xl lato-regular text-[10px]  mdm:text-base pt-3 mt-5  scroll-container ">

<div className="p-1 rounded-lg">


<div className="w-full grid grid-cols-12 gap-x-16 auto-rows-fr text-center  border-b-2 pt-5 pb-3 border-t-2 ">
{/* //Draw the table here */}

{/* co1 */}
<div className="col-span-3  text-center">
 <p className="lato-bold text-lg">Influencer</p>

</div>
{/* co1 */}
<div className="col-span-2 text-center">
<p className="lato-bold text-lg">Platform </p>
 
</div>
{/* co1 */}
<div className="col-span-1">
<p className="lato-bold text-lg">%ER </p>

</div>
{/* co1 */}

{/* co1 */}
<div className="col-span-2">
<p className="lato-bold text-lg">Budget </p>


</div>

{/* co1 */}
<div className="col-span-1">
<p className="lato-bold text-lg">Posts</p>

</div>
<div>
<p className="lato-bold text-lg">Status</p>

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
        </div>

      </>


    </>
  )
}


const TableRows = ({ name, img, likes, Er, Impression, Budget, Posts, Status }) => {
  return (
    <div className="w-full grid grid-cols-12 auto-rows-fr text-center mt-5 gap-x-16  border-b-2 pb-2 IsBorder">
      <div className="col-span-3 text-center">
        <div className="flex items-center justify-center gap-x-3">
          <img className='size-[35px] Avatar' src={img} alt={name} />
          <p>{name}</p>
        </div>
      </div>

      <div className="col-span-2 text-center">
        <div className="flex items-center">
          <img className='size-[35px] p-1 Avatar' src={`/Images/Instagram.svg`} alt="Instagram" />
          <p>{likes}</p>
        </div>
      </div>

      <div className="col-span-1">
        <p className="p-1">{Er}</p>
      </div>

     

      <div className="col-span-2">
        <p className="p-1">{Budget}</p>
      </div>

      <div className="col-span-1">
        <p className="p-1">{Posts}</p>
      </div>

      <div className="col-span-1 pr-2">
        <p className="p-1">{Status}</p>
      </div>
    </div>
  );
}




export default Influencers