import { SearchIcon, UserAddIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
import Image from "next/image";

function Widget({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[300px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full w-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0]  rounded-full focus:bg-black focus:shadow-lg"
          />
        </div>
      </div>
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-full xl:w-9/12 ">
        <h4 className="font-bold text-xl px-2 ">What's happening</h4>
        {trendingResults.map((result, index) => (
          <Trending key={index} result={result} />
        ))}
        <button className="hover:bg-white hover:bg-opacity-[0.03] cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light p-[10px] ">
          Show more
        </button>
      </div>
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12 ">
        <h4 className="font-bold text-xl px-2 ">What's happening</h4>
        {trendingResults.map((result, index) => (
          <Trending key={index} result={result} />
        ))}
        <button className="hover:bg-white hover:bg-opacity-[0.03] cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light p-[10px] ">
          Show more
        </button>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 px-1.5 rounded-xl w-full xl:w-9/12 ">
        <h4 className="font-bold text-xl px-2 ">Who to Follow</h4>
        {followResults.map((result, index) => (
          <div
            key={index}
            className="hover:bg-white hover:bg-opacity-[0.03] cursor-pointer transition duration-200 ease-out flex items-center"
          >
            <Image
              src={result?.userImg}
              width={40}
              height={40}
              objectFit="cover"
              className="rounded-full"
            />

            <div className="ml-4 leading-5 group">
              <h4 className="font-bold text-[12px] group-hover:underline">
                {result.username}
              </h4>
              <h5 className="text-gray-500 text-[15px]">{result.tag}</h5>
            </div>
            <button className="ml-auto bg-white text-black rounded-full text-[12px] font-bold py-1 px-3">
              Follow
            </button>
          </div>
        ))}
        <button className="hover:bg-white hover:bg-opacity-[0.03] cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light p-[10px]">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widget;
