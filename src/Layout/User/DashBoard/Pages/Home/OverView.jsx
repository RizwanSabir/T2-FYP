import './Index.css';

import React, { useState, useEffect } from 'react';
const OverView = () => {

  const customData = [
    {
    userImage: "/Media/p1.jpg",
    userName: "Rizwan Sabir",
    postTime: "19h",
    postImage: "/Media/h1.jpg",
    likesCount: 29,
    postText: "Next campaign on Beach"
  },
    {
    userImage: "/Media/p10.jpg",
    userName: "Ali khan",
    postTime: "19h",
    postImage: "/Media/p10.jpg",
    likesCount: 29,
    postText: "Next campaign on Beach"
  },
    {
    userImage: "/Media/p7.jpg",
    userName: "Hamza Junaid",
    postTime: "19h",
    postImage: "/Media/h2.jpg",
    likesCount: 29,
    postText: "Next campaign on Beach"
  },
  


];
  
  return (
    <>
      <>

        <div className="max-w-2xl mx-auto mt-2  ">
          <Stories />
          <div className="h-[1px] bg-black"></div>
          {customData.map((customData) => {
           return( <Post  key={customData.userName}
            userImage={customData.userImage}
            userName={customData.userName}
            postTime={customData.postTime}
            postImage={customData.postImage}
            likesCount={customData.likesCount}
            postText={customData.postText}
          />)
          })}
        </div>

      </>


    </>
  )
}



const stories = [
  { id: 1, src: '/Media/p1.jpg', alt: 'User 1' },
  { id: 2, src: '/Media/p9.jpg', alt: 'User 2' },
  { id: 3, src: '/Media/p7.jpg', alt: 'User 3' },
  { id: 4, src: '/Media/p10.jpg', alt: 'User 4' },
  { id: 5, src: '/Media/p1.jpg', alt: 'User 1' },
  { id: 6, src: '/Media/p9.jpg', alt: 'User 2' },
  { id: 7, src: '/Media/p7.jpg', alt: 'User 3' },
  { id: 8, src: '/Media/p10.jpg', alt: 'User 4' },
];

const Stories = () => {
  return (
    <div className="flex space-x-4 p-4  border-b border-gray-200 overflow-x-auto ScrollHidden">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center">
          <div className="bg-white p-[2px] StoryBack  rounded-full">
            <div className="flex size-[60px] xs:size-[80px] sm:size-[100px] md:size-[60px] items-center  border-2 rounded-full">
              <img className=" aspect-square Avatar" src={story.src} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


const Post = ({ userImage, userName, postTime, postImage, likesCount, postText }) => {

  const [imageDimensions, setImageDimensions] = useState({ width: 'auto', height: 'auto' });

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    if (naturalWidth > naturalHeight) {
      setImageDimensions({ width: '100%', height: '300px' });
    } else {
      setImageDimensions({ width: 'auto', height: '300px' });
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg mt-4 text-[9px] xs:text-[10px] sm:text-[13px] md:text-[12px]">
      <div className="flex items-center justify-between space-x-4 mb-2">
        <div className="flex items-center space-x-2">
          <div className="flex size-[60px] xs:size-[80px] sm:size-[100px] md:size-[60px] items-center border-2 p-[1px] rounded-full">
            <img className="aspect-square Avatar" src={userImage} alt="" />
          </div>
          <div>
            <p className="font-bold text-[14px]">{userName}</p>
            <p className="text-[9px] text-gray-500">{postTime}</p>
          </div>
        </div>
        <div>
          <img src="/Svg/More.svg" alt="" />
        </div>
      </div>
      <div className="mx-auto  flex   justify-center" style={{ maxWidth: '500px', maxHeight: '500px' }} >
        <img
          className=" object-right-top object-cover"
          src={postImage}
          alt=""
          style={{ width: imageDimensions.width, height: imageDimensions.height }}
          onLoad={handleImageLoad}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="focus:outline-none">
            <img src="/Svg/Heart2.svg" alt="" />
          </button>
          <button className="focus:outline-none">
            <img src="/Svg/Comment2.svg" alt="" />
          </button>
        </div>
        <button className="focus:outline-none">
          <img src="/Svg/Bookmark2.svg" alt="" />
        </button>
      </div>
      <p className="text-gray-500 text-[10px] mt-[2px]">{likesCount} Likes</p>
      <p className="mt-1 text-gray-700">
        <span className="font-bold">{userName} </span>
        {postText}
      </p>
      <form className="mt-1">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full placeholder:text-[11px] outline-none bg-inherit border-b-2 pb-2 border-black/30 focus:ring-0 text-sm"
        />
      </form>
    </div>
  );
};












export default OverView