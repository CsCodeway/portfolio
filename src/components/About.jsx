import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <div name="about" className="md:h-screen my-32 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center w-[85%]">
          <div className="col-span-1 flex justify-center">
            <img src={avatar} alt="avatar" className="h-56" />
          </div>
          <div className="col-span-1 md:col-span-2 pl-10 lg:px-0 pt-10 md:py-0">
            <h2 className="font-bold text-4xl text-gray-600">John Doe</h2>
            <p className="py-2 font-mono text-lg text-gray-600">
              Web Developer
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
              dicta, deleniti pariatur iste enim natus illum, delectus quo neque
              nostrum asperiores ipsam provident architecto possimus cumque
              quasi nesciunt ea repellat. Id accusantium molestiae tempora ab
              odio, reprehenderit cupiditate deserunt doloribus! Fugit possimus
              necessitatibus sint, est temporibus, expedita corporis saepe
              dolorem sunt maiores laudantium? Consequatur quam blanditiis
              repudiandae natus animi quod. Doloribus illo, eos sint nisi, iure
              ducimus voluptate deserunt ipsam ex ipsum cum vero, nemo
              dignissimos porro. At iste necessitatibus atque mollitia cum est
              reiciendis commodi molestiae maxime incidunt! Voluptatum?
            </p>
            <button className="mt-10 py-1 px-4 text-white rounded-full bg-[#ff7a57]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
