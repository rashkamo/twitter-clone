import { DotsHorizontalIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Trending({ result }) {
  console.log(result);
  return (
    <div>
      <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light ">
        <div className="space-y-0.5">
          <p className="text-[#6e767d] text-xs font-medium ">
            {result.heading}
          </p>
          <h6 className="font-bold max-w-[250px] text-sm ">
            {result.description}
          </h6>
          <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
            Trending with{" "}
            {result?.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </p>
        </div>
        {result.img ? (
          <Image
            src={result.img}
            width={50}
            height={50}
            objectFit="cover"
            className="rounded-2xl"
          />
        ) : (
          <div className="icon group">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Trending;
