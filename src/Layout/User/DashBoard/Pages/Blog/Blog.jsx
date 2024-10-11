import { useContext, useLayoutEffect, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import ScreenSizeDisplay from '../../../../../useCurrentScreenSize';

const Blog = () => {

  const posts = [
    {
      Title: "Shoulder bags that will keep you company from morning till night",
      Body: "An intense way to learn about the process and practice your design skills — My 1st hackathon Hackathons have been on ...",
      Time: "3 mins ago",
      Image: "Media/p1.jpg"
    },
    {
      Title: "Another interesting post title",
      Body: "Details about another post. This can be a summary or snippet of the post content.",
      Time: "10 mins ago",
      Image: "Media/p2.jpg"
    },
    {
      Title: "A third blog post example",
      Body: "Summary or snippet of the third post content. It should give the reader an idea of what the post is about.",
      Time: "20 mins ago",
      Image: "Media/p3.jpg"
    }
  ];


  const navigate = useNavigate()
 

  return (
    <>
    
      <div className="sm:w-[500px]  mdm:w-[600px] lg:w-[900px] mx-auto pt-5  h-screen">
      
        <div className="space-y-5">
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              Title={post.Title}
              Body={post.Body}
              Time={post.Time}
              Image={post.Image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const BlogPost = ({ Title, Body, Time, Image }) => {
  return (
    <div className="bg-white mx-auto sm:w-[500px]  mdm:w-[600px] lg:w-[700px] rounded-xl p-2 text-[9px] xs:text-[10px] sm:text-[13px] md:text-[11px]">
      <div className="p-2 grid grid-cols-12">
        <div className="col-span-9">
          <p className="text-[12px] mdm:text-lg lato-bold">{Title}</p>
          <p className="poppins-regular mt-1">{Body}</p>
          <div className="flex justify-between mt-2">
            <p className="text-black/50">{Time}</p>
            <div>
              <img src="/Svg/More.svg" alt="More" />
            </div>
          </div>
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <div className="flex size-[60px] xs:size-[80px] sm:size-[100px] md:size-[100px] items-center rounded-lg overflow-hidden">
            <img className="aspect-square Avatar-v1" src={Image} alt="Blog Post" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
