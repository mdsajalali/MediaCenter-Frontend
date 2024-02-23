import { FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12  gap-5">
        <div className=" xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-12 bg-[#F9F9F9] md:min-h-screen p-5  ">
          <div>
            <Link
              to="/"
              className="flex items-center  gap-2 bg-[#59B210]  px-5 py-2 text-white  hover:bg-[#0E53A5] transition-all rounded-md"
            >
              <FaShoppingCart size={20} />
              <p className="text-[18px]">Home</p>
            </Link>
          </div>
          <div className="my-5">
            <Link
              to="/dashboard/cart"
              className="flex items-center  gap-2 bg-[#59B210]  px-5 py-2 text-white  hover:bg-[#0E53A5] transition-all rounded-md"
            >
              <FaShoppingCart size={20} />
              <p className="text-[18px]">My Cart</p>
            </Link>
          </div>
        </div>
        <div className="w-full xl:col-span-10 lg:col-span-9 md:col-span-8 col-span-12">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
