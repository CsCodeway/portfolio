import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";

const Blogs = () => {
  return (
    <div name="blogs" className="md:h-screen my-32 flex items-center justify-center">
      <div className="flex items-center justify-center ">
        <div className="text-center flex flex-col items-center justify-center">
          <div className="w-[70%]">
            <p>My Blogs</p>
            <h2 className="capitalize text-gray-900 text-2xl font-medium">
              latest news
            </h2>
            <p className="text-gray-500 mt-5 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsa, consequuntur a sint cumque sit adipisci aliquid voluptates.
              Qui, culpa!
            </p>
          </div>
          <div className="w-[70%] xl:w-[60%] mt-4 grid max-[500px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10">
            <div className="shadow-lg rounded-lg">
              <img src={blog1} alt="" className="rounded-t-lg" />
              <h2 className="text-left px-4 font-medium text-xl pt-2">
                Design for Everyone
              </h2>
              <div className="flex flex-col text-sm px-4 text-left py-2">
                <div className="flex justify-between text-gray-500  pb-2">
                  <p>Posted By: Admin</p>
                  <div className="flex items-center gap-2">
                    <AiOutlineLike /> <span>456</span>
                    <FaRegCommentAlt /> <span>123</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic voluptatibus enim voluptatum earum repellat.
                </p>
              </div>
            </div>
            <div className="shadow-lg rounded-lg">
              <img src={blog2} alt="" className="rounded-t-lg" />
              <h2 className="capitalize text-left px-4 font-medium text-xl pt-2">
                Web Layouts
              </h2>
              <div className="flex flex-col text-sm px-4 text-left py-2">
                <div className="flex justify-between text-gray-500 w-full pb-2">
                  <p>Posted By: Admin</p>
                  <div className="flex items-center gap-2">
                    <AiOutlineLike /> <span>456</span>
                    <FaRegCommentAlt /> <span>123</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic voluptatibus enim voluptatum earum repellat.
                </p>
              </div>
            </div>
            <div className="shadow-lg rounded-lg">
              <img src={blog3} alt="" className="rounded-t-lg" />
              <h2 className="capitalize text-left px-4 font-medium text-xl pt-2">
                Bootstrap Framework
              </h2>
              <div className="flex flex-col text-sm px-4 text-left py-2">
                <div className="flex justify-between text-gray-500 w-full pb-2">
                  <p>Posted By: Admin</p>
                  <div className="flex items-center gap-2">
                    <AiOutlineLike /> <span>456</span>
                    <FaRegCommentAlt /> <span>123</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic voluptatibus enim voluptatum earum repellat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
