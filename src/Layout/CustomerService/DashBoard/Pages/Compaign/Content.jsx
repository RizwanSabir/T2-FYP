import {useState} from 'react';
import { DropdownSvg } from "../../../../../Components/Svg/DropDownSvg";

const Content = () => {
 return (
   <>
   <Media/>
   
   </>
  )
}


const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState([0, 'All Content']);

  return (
    <div className="flex  items-end  mr-2 mb-2 flex-col poppins-semibold   ">
      <div
        className="p-1 flex justify-center w-[130px] navBgColor rounded-full items-center  text-[10px]"
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


const Media = () => {
  const navItems = ['Published', 'Draft Submission', 'Instruction Sent', 'Deal Request'];
 

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
    } ,{
      PostImageSrc: "/Media/p12.jpg",
      ProfileImage: "/Media/p1.jpg",
      name: "Rizwan Sabir",
      Likes: "2.3K",
      Comments: "2.3K",
      Reach: "4K",
      Engagement: "4K"
    },
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
      PostImageSrc: "/Media/p12.jpg",
      ProfileImage: "/Media/p1.jpg",
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
  ];


  return (
    <div className="bg-white   rounded-3xl mb-10 w-[290px] xs:w-[400px] sm:w-[600px] mdm:w-[800px] lg:w-[900px] mx-auto mt-5  ">
      <div className="px-5 py-5 flex flex-col">
      <div className="flex justify-between">
      <p className="lato-bold text-lg">Media</p>
      <Dropdown items={navItems} />
      </div>
       
          <div className="mt-2 grid xs:grid-cols-2 sm:grid-cols-1    gap-4 sm:grid-cols-2   mdm:grid-cols-4 lg:grid-cols-5 ">
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



const ProfileMedia = ({ PostImageSrc,ProfileImage,name,Likes,Comments,Reach,Engagement }) => {

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



export default Content