const Newsletter = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="mx-auto -mt-8 flex max-w-[300px]   md:max-w-[700px]">
        <input
          className="w-full rounded-l-md border px-3 py-3 outline-none"
          type="text"
          placeholder="Subscribe to our newsletter"
        />
        <button className=" rounded-r-md bg-[#59B210] px-2 font-semibold text-white transition-all hover:bg-[#0E53A5] md:px-5 ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
