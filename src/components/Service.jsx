import { TfiCrown } from "react-icons/tfi";
import { GrPersonalComputer } from "react-icons/gr";
import { CiMobile4 } from "react-icons/ci";
import { FiBarChart } from "react-icons/fi";

const Service = () => {
  return (
    <div
      name="service"
      className="md:h-screen my-32 flex items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center">
          <div className="w-[70%]">
            <p>Service</p>
            <h2 className="capitalize text-gray-900 text-2xl font-medium py-4">
              what i do
            </h2>
            <p className="text-gray-500 mt-5 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsa, consequuntur a sint cumque sit adipisci aliquid voluptates.
              Qui, culpa!
            </p>
          </div>
          <div className="w-[80%] grid max-[500px]:grid-cols-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-10">
            <div className="group flex flex-col gap-3 h-48 md:w-44 shadow-lg bg-white items-center justify-center border border-gray-100 hover:bg-[#ff7a57] hover:text-white">
              <TfiCrown className="w-9 h-9 text-[#ff7a57] group-hover:text-white" />
              <p className="text-xl">Ui/UX Design</p>
            </div>
            <div className="group flex flex-col gap-3 h-48 md:w-44 shadow-lg bg-white items-center justify-center border border-gray-100 hover:bg-[#ff7a57] hover:text-white">
              <GrPersonalComputer className="w-9 h-9 text-[#ff7a57] group-hover:text-white" />
              <p className="text-xl">Web Design</p>
            </div>
            <div className="group flex flex-col gap-3 h-48 md:w-44 shadow-lg bg-white items-center justify-center border border-gray-100 hover:bg-[#ff7a57] hover:text-white">
              <CiMobile4 className="w-9 h-9 text-[#ff7a57] group-hover:text-white" />
              <p className="text-xl">App Design</p>
            </div>
            <div className="group flex flex-col gap-3 h-48 md:w-44 shadow-lg bg-white items-center justify-center border border-gray-100 hover:bg-[#ff7a57] hover:text-white">
              <FiBarChart className="w-9 h-9 text-[#ff7a57] group-hover:text-white" />
              <p className="text-xl">Seo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
