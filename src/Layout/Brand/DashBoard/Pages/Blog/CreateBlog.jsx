import {useLayoutEffect,useEffect,useContext} from 'react'
const CreateBlog = () => {

  

  return (
  <>
  
  <div className=" px-5   sm:w-[600px]  mdm:w-[700px]   lg:w-[1000px] mx-auto text-[9px] xs:text-[10px] sm:text-[13px] md:text-[11px]  h-screen">

<div className="flex justify-between pt-5">
    <p className="poppins-semibold text-xl">Blog Posts</p>
    <div className="OrangeButtonWithText-v2 mt-2 xs:mt-0   flex items-center  cursor-pointer  "><p>Published</p></div>
 
</div>

<div className="border-l-2 border-black/40 pl-2 mt mt-10">
    <p className=" text-2xl  text-black/30 ubuntu-medium ">Title ...</p> 

</div>

<div>
<p className="mt-8 text-xl  text-black/30 ubuntu-medium  ">Tell Your Story ...</p> 
</div>

    
  </div>
  
  
  
  </>
  )
}

export default CreateBlog