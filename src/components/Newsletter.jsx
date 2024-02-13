const Newsletter = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="max-w-[300px] md:max-w-[700px] mx-auto flex   -mt-8">
        <input
          className="border outline-none w-full rounded-l-md px-3 py-3"
          type="text"
          placeholder="Subscribe to our newsletter"
        />
        <button className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-r-md px-2 md:px-5 font-semibold text-white ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
