import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="my-10 rounded-md border">
      <div className="flex items-center  gap-1 rounded-t-md bg-[#59B210] p-10 py-2 font-semibold text-white">
        <CgMenuGridO size={25} />
        <h1 className="text-[18px]">All Departments</h1>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Pages
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all even:bg-gray-100 hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Value of the Day
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Laptops & Computers
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all even:bg-gray-100 hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Cameras & Photography
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Smart Phones & Tablets
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all even:bg-gray-100 hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Video Games & Consoles
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          TV & Audio
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all even:bg-gray-100 hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Gadgets
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Car Electronic & GPS
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all even:bg-gray-100 hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Accessories
        </Link>
        <Link
          className="px-10 py-2 text-[18px] font-semibold transition-all hover:bg-[#59B210] hover:text-white"
          to="/"
        >
          Buy this Theme
        </Link>
      </div>
    </div>
  );
};

export default Category;
