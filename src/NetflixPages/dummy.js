return (
  <>
    {/* <AiOutlineArrowRight
        className="absolute text-white  left-8 text-[70px]"
        onClick={nextMovies}
      /> */}

    <div className=" ba overflow-x-auto  bg-black h-96 relative">
      {/* <AiOutlineArrowLeft
            className="absolute z-10 text-3xl fill-blue-700 top-36 border "
            // onClick={slideRight}
          /> */}

      <ul
        responsive={responsive}
        className="flex w-[700vh] z-10 ba overflow-hidden box"
      >
        {urlData.map((Data) => (
          <li
            className="flex-1 hov  relative overflow-x-hidden overflow"
            key={Data.id}
            onClick={() => navigation(`/browse/${Data.id}`)}
          >
            <img
              src={`${base_url}${Data.poster_path}`}
              alt=""
              className="h-96 relative "
            />
            <div className="det bg-[#000000a8] text-white absolute top-[205px] w-[100%] pl-[8px] ">
              <div className="flex pt-[30px]">
                <div className="flex space-x-3">
                  <BsPlayCircleFill
                    className="text-[30px] border p-[5px] rounded-[50%]"
                    onClick={() => {
                      navigation(`/browse/${Data.id}`);
                    }}
                  />
                  <BsPlusLg className="text-[30px] border p-[5px] rounded-[50%]" />
                  <BiLike className="text-[30px] border p-[5px] rounded-[50%]" />
                </div>
                <div className="flex flex-1 justify-end mr-[20px]  ">
                  <AiOutlineDownCircle className="text-[35px] p-[5px] border rounded-[50%]" />
                </div>
              </div>
              <div>
                <h1> Release-{Data.release_date}</h1>
                <h1 className="  mr-[0px]">
                  {Data.adult ? "U/A 18+" : "U/A 7+"}
                </h1>
                <div className="flex">
                  <h1>
                    {Data.original_language === "en" ? "English" : "Spanish"}
                  </h1>
                  <h1 className="flex ml-[65px]">
                    Rating
                    <HiStar className="text-orange-500" />
                    {Data.vote_average}
                  </h1>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
);
