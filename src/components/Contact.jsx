import { CiLocationOn } from "react-icons/ci";
import { MdPhoneAndroid, MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <div name="contact" className="md:h-screen mt-32 mb-12 md:mb-1 flex items-center justify-center">
      <div className="flex items-center justify-center text-center">
        <div className="sm:px-20 px-10">
          <p>Contact</p>
          <h2 className="capitalize text-gray-900 text-2xl font-medium">
            get in touch with me
          </h2>
          <p className="text-gray-500 mt-5 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa,
            consequuntur a sint cumque sit adipisci aliquid voluptates. Qui,
            culpa!
          </p>
          <div className="shadow-lg flex p-10 gap-20">
            <div className="w-[65%] flex-1">
              <p className="text-gray-500 text-left text-sm">Available 24/7</p>
              <h1 className="capitalize font-medium text-2xl text-left pt-1">
                Get In Touch
              </h1>
              <form onSubmit={submitData} className="flex flex-col gap-2 pt-7">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border outline-none h-10 pl-1 rounded-lg"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border outline-none h-10 pl-1 rounded-lg"
                />
                <textarea
                  type="text"
                  name="msg"
                  id="msg"
                  rows="7"
                  placeholder="Message"
                  className="border outline-none pl-1 rounded-lg resize-none p-1"
                />
                <button
                  type="submit"
                  className="text-white rounded-full py-1 bg-[#ff7a57]"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex-col justify-center gap-3 w-[35%] pl-14 border-l hidden min-[950px]:flex">
              <div className="flex gap-2">
                <CiLocationOn className="mt-1 h-8 w-8 rounded-full p-1 text-[#ff7a57] border border-[#ff7a57]" />
                <div className="flex flex-col text-left">
                  <h1 className="text-gray-600 font-medium">Location</h1>
                  <p className="text-sm text-gray-500 border-b pb-1">
                    1235 Fase St Where Country
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <MdPhoneAndroid className="mt-1 h-8 w-8 rounded-full p-1 text-[#ff7a57] border border-[#ff7a57]" />
                <div className="flex flex-col text-left">
                  <h1 className="text-gray-600 font-medium">Phone Number</h1>
                  <p className="text-sm text-gray-500 border-b pb-1">
                    123-456-789
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <MdOutlineMail className="mt-1 h-8 w-8 rounded-full p-1 text-[#ff7a57] border border-[#ff7a57]" />
                <div className="flex flex-col text-left">
                  <h1 className="text-gray-600 font-medium">Email Address</h1>
                  <p className="text-sm text-gray-500 border-b pb-1">
                    info@website.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
