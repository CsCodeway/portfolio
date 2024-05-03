const Testimonial = ({ img, p1, p2, h2 }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-10 shadow-lg border border-gray-200 w-[700px] h-[300px]">
          <img src={img} alt="" className="rounded-full" width={60} />
          <p className="text-gray-500 py-5 ">{p1}</p>
          <h2 className="text-xl font-medium text-gray-700">{h2}</h2>
          <p className="text-lg text-gray-600">{p2}</p>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
