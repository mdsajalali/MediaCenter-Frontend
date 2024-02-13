import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="border my-10 rounded-md">
      <div className="flex items-center  rounded-t-md gap-1 bg-[#59B210] text-white font-semibold py-2 p-10">
        <CgMenuGridO size={25} />
        <h1 className="text-[18px]">All Departments</h1>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all"
          to="/"
        >
          Pages
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all even:bg-gray-100"
          to="/"
        >
          Value of the Day
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all"
          to="/"
        >
          Laptops & Computers
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all even:bg-gray-100"
          to="/"
        >
          Cameras & Photography
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all"
          to="/"
        >
          Smart Phones & Tablets
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all even:bg-gray-100"
          to="/"
        >
          Video Games & Consoles
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all"
          to="/"
        >
          TV & Audio
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all even:bg-gray-100"
          to="/"
        >
          Gadgets
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all"
          to="/"
        >
          Car Electronic & GPS
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all even:bg-gray-100"
          to="/"
        >
          Accessories
        </Link>
        <Link
          className="text-[18px] py-2 px-10 font-semibold hover:bg-[#59B210] hover:text-white transition-all"
          to="/"
        >
          Buy this Theme
        </Link>
      </div>
    </div>
  );
};

export default Category;
