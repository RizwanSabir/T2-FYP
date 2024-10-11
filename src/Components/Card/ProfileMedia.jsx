const ProfileMedia = ({ PostImageSrc,ProfileImage,name,Likes,Comments,Reach,Engagement }) => {

    return (
        <>

            <div className=" text-[10px] lg:text-[12px] w-[250px] h-[370px] mdm:w-[250px] mdm:h-[370px] bg-white rounded-2xl flex flex-col  OverViewBox1 justify-self-center">
                <div className="w-[250px]   rounded-xl overflow-hidden ">

                    <div className="h-[250px] rounded-lg flex items-center ">
                        <img className="aspect-square  ProfileMedia" src={PostImageSrc} alt="" />
                    </div>

                    <div className="mt-3 ml-3 flex items-center">
                        <img src={ProfileImage} className="Avatar size-[45px]" alt="" />

                        <div className="ml-2 flex justify-center flex-col">
                            <p>{name}</p>
                            <div className=" flex gap-x-3">
                                <p className=" flex items-center gap-x-1 marker:">
                                    <img src="/Svg/Heart.svg" className="Avatar size-[15px]" alt="" />
                                    <p> {Likes}</p>
                                </p>
                                <p className="flex items-center  gap-x-1">
                                    <img src="/Svg/Comment.svg" className="Avatar size-[15px]" alt="" />
                                    <p>  {Comments}</p>
                                </p>



                            </div>
                        </div>


                    </div>

                    <div className="ml-3 mt-1">
                        <div className="flex justify-between mr-3">
                            <p>Reach</p>
                            <p>{Reach}</p>
                        </div>
                        <div className="flex justify-between mr-3">
                            <p>Engagement</p>
                            <p>{Engagement}</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}


export default ProfileMedia