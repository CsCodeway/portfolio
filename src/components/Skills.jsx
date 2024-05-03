import ProgressBar from "./functions/ProgressBar";

const Skills = () => {
  return (
    <div
      name="skills"
      className="md:h-screen my-32 flex items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <div className="text-center lg:w-[70%] flex flex-col items-center justify-center">
          <div className="w-[70%]">
            <p>Skills</p>
            <h2 className="capitalize text-gray-900 text-2xl font-medium">
              why choose me
            </h2>
            <p className="text-gray-500 mt-5 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsa, consequuntur a sint cumque sit adipisci aliquid voluptates.
              Qui, culpa!
            </p>
          </div>
          <div className="w-[80%] grid max-[575px]:grid-cols-1 grid-cols-2 items-center justify-center text-center gap-10">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg">Ui/UX Design</p>
              <ProgressBar progress={80} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg">Web Design</p>
              <ProgressBar progress={90} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg">App Design</p>
              <ProgressBar progress={70} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg">Seo</p>
              <ProgressBar progress={85} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
