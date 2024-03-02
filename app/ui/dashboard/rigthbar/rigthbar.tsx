import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

function Rigthbar() {
  return (
    <div className="sticky top-3">
      <div className="relative bg-gradient-to-b from-gray-700 to-gray-800 p-5 rounded-xl mb-5">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image
            src="/astronaut.png"
            alt=""
            fill
            className="opacity-15 bg-contain"
          />
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-bold">🔥Available Now</span>
          <h3 className="font-[700]">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-xs text-gray-400 font-[600]">
            Takes 4 minutes to learn
          </span>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-3 flex items-center gap-3 bg-[#5d57c9] rounded-md cursor-pointer w-max text-sm">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-700 to-gray-800 p-5 rounded-xl mb-5">
        <div className="flex flex-col gap-5">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="font-[700]">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="text-xs text-gray-400 font-[600]">
            Boost your productivity
          </span>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-3 flex items-center gap-3 bg-[#5d57c9] rounded-md cursor-pointer w-max text-sm">
            <MdPlayCircleFilled />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rigthbar;
