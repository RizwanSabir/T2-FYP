
const Dashbaord = () => {
  return (
    <>
      {/* Simple cards will be display here */}
      <div className="  mx-10 mt-2 grid gap-y-4  grid-cols-2  grid-rows-3 xs:grid-cols-3 xs:grid-rows-2   md:grid-cols-6 md:grid-rows-1   justify-center items-center">
        <SimpleCard name="Published" price="20" newPosts="+2 posts" />
        <SimpleCard name="Paid" price="6" newPosts="+2 posts" />
        <SimpleCard name="Budget" price="$600" />
        <SimpleCard name="Invited" price="1" />
        <SimpleCard name="Accepted" price="1" />
        <SimpleCard name="Request" price="1" />
      </div>



      <div>
        {/* showing all the Influncer here */}
        <div>

          {/* It will have all the Influncer lists ...Wrapper around the List */}

          <div className=" sm:flex justify-center   gap-x-5      m-5 ">
            {/* Heading and outer Wrapper */}
            <div className="bg-white rounded-3xl px-4 py-5 mb-5">
              <p className="poppins-semibold mt-2 ">Influencer</p>

              {/* List of influencer */}

              <InfluencerList ImageSrc="/Media/p1.jpg" Name="Sana Ali" Time="19 hours" Bio="At last wasted #sad " ColorBorder="GreenButtonWithText" Status="Published" TextColor="text-green-500" />
              <InfluencerList ImageSrc="/Media/p2.jpg" Name="Rizwan Sabir" Time="23 hours" Bio="This is wondorful day #enjoy #beautiful" ColorBorder="OrangeButtonBorder" TextColor="text-primary" Status="Draft Submitted" />
              <InfluencerList ImageSrc="/Media/p7.jpg" Name="Ali khan" Time="2 hours" Bio="Just posting #fun #Enjoyable" ColorBorder="BlueButtonWithText" Status="Instruction Sent" TextColor="text-blue-500" />
              <InfluencerList ImageSrc="/Media/p7.jpg" Name="Ali khan" Time="2 hours" Bio="Just posting #fun #Enjoyable" ColorBorder="SilverButtonWithText" Status="Deal Request" TextColor="text-gray-500" />

            </div>


            {/* Media */}

            <Media />
          </div>

        </div>

      </div>

    </>
  )
}



const SimpleCard = ({ name, price, newPosts = "" }) => {
  return (
    <>
      <div className=" text-[10px] w-[100px] h-[80px] mdm:w-[120px] mdm:h-[80px] bg-white rounded-2xl flex flex-col  OverViewBox1 justify-self-center">
        <div className=" px-3 py-1   mdm:py-2 lato-regular ">
          <p className="lato-regular text-[14px]">{name}</p>
          <p className=" text-sm mdm:text-[12px]  ">{price}</p>
          <p className="text-primary text-[12px]">{newPosts}</p>
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

          <div className="w-[70px]  sm:w-[100px] mdm:w-[120px] text-center col-span-2">
            <p className={`${ColorBorder}  cursor-pointer  ${TextColor}`}  >{Status}</p>
          </div>
        </div>

      </div>
    </div>
  </>
}


const Media = () => {
  const mediaData = [
    {
      PostImageSrc: "/Media/p6.jpg",
      ProfileImage: "/Media/p10.jpg",
      name: "Rizwan Sabir",
      Likes: "2.3K",
      Comments: "2.3K",
      Reach: "4K",
      Engagement: "4K"
    },
    {
      PostImageSrc: "/Media/p7.jpg",
      ProfileImage: "/Media/p2.jpg",
      name: "Rizwan Sabir",
      Likes: "2.3K",
      Comments: "2.3K",
      Reach: "4K",
      Engagement: "4K"
    },
    {
      PostImageSrc: "/Media/p12.jpg",
      ProfileImage: "/Media/p1.jpg",
      name: "Rizwan Sabir",
      Likes: "2.3K",
      Comments: "2.3K",
      Reach: "4K",
      Engagement: "4K"
    },
    {
      PostImageSrc: "/Media/p1.jpg",
      ProfileImage: "/Media/p3.jpg",
      name: "Rizwan Sabir",
      Likes: "2.3K",
      Comments: "2.3K",
      Reach: "4K",
      Engagement: "4K"
    }
  ];


  return (
    <div className="bg-white   rounded-3xl mb-10">
      <div className="px-5 py-5 flex flex-col">
        <p className="lato-bold text-lg">Media</p>

        <div className="mt-2 grid xs:grid-cols-2 sm:grid-cols-1    gap-4  mdm:grid-cols-2 ">
          {mediaData.map((media, index) => (

            <ProfileMedia
              key={index}
              PostImageSrc={media.PostImageSrc}
              ProfileImage={media.ProfileImage}
              name={media.name}
              Likes={media.Likes}
              Comments={media.Comments}
              Reach={media.Reach}
              Engagement={media.Engagement}
            />

          ))}
        </div>

      </div>
    </div>
  );
}

const ProfileMedia = ({ PostImageSrc, ProfileImage, name, Likes, Comments, Reach, Engagement }) => {

  return (
    <>

      <div className=" text-[10px] lg:text-[12px]  sm:w-[250px] sm:h-[370px] mdm:w-[150px] mdm:h-[250px] bg-white rounded-2xl flex flex-col  OverViewBox1 justify-self-center">
        <div className="w-[150px]   rounded-xl overflow-hidden ">

          <div className="h-[150px] rounded-lg flex items-center  ">
            <img className="aspect-square  ProfileMedia" src={PostImageSrc} alt="" />
          </div>

          <div className="mt-3 ml-3 flex items-center ">
            <img src={ProfileImage} className="Avatar size-[25px]" alt="" />

            <div className="ml-2  flex justify-center flex-col text-[10px] ">
              <p className="font-bold">{name}</p>
              <div className=" flex gap-x-3  text-[10px]">
                <p className=" flex items-center gap-x-1 ">
                  <img src="/Svg/Heart.svg" className="Avatar size-[10px]" alt="" />
                  <p > {Likes}</p>
                </p>
                <p className="flex items-center  gap-x-1">
                  <img src="/Svg/Comment.svg" className="Avatar size-[10px]" alt="" />
                  <p >  {Comments}</p>
                </p>



              </div>
            </div>


          </div>

          <div className="ml-3 pb-2 text-[10px] mt-2 px-2">
            <p >This is a wondorful day  <span className="lato-bold"> #enjoy #weather #beautiful</span></p>
          </div>

        </div>

      </div>

    </>
  )
}


export default Dashbaord