import { FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12  gap-5">
        <div className=" col-span-12 bg-[#F9F9F9] p-5 md:col-span-4 md:min-h-screen lg:col-span-3 xl:col-span-2  ">
          <div>
            <Link
              to="/"
              className="flex items-center  gap-2 rounded-md  bg-[#59B210] px-5 py-2  text-white transition-all hover:bg-[#0E53A5]"
            >
              <FaShoppingCart size={20} />
              <p className="text-[18px]">Home</p>
            </Link>
          </div>
          <div className="my-5">
            <Link
              to="/dashboard/cart"
              className="flex items-center  gap-2 rounded-md  bg-[#59B210] px-5 py-2  text-white transition-all hover:bg-[#0E53A5]"
            >
              <FaShoppingCart size={20} />
              <p className="text-[18px]">My Cart</p>
            </Link>
          </div>
        </div>
        <div className="col-span-12 w-full md:col-span-8 lg:col-span-9 xl:col-span-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
