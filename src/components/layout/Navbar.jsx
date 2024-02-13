import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex-none lg:hidden ">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">
        <Link to="/">
          <img className="w-56" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li>
            <Link className="mr-2 text-[18px] font-semibold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="mr-2 text-[18px] font-semibold" to="/">
              Add Product
            </Link>
          </li>
          <li>
            <Link className="mr-2 text-[18px] font-semibold" to="/">
              My Cart
            </Link>
          </li>
          <li>
            <Link className=" text-[18px] font-semibold" to="/">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
