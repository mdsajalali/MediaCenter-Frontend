import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  return (
    <div className="mx-auto w-full max-w-[1300px]  px-3">
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
            className="inline-block h-6 w-6 stroke-current"
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
      <div className="flex-1  ">
        <Link to="/">
          <img className="w-56" src={logo} alt="" />
        </Link>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>

          {user?.email ? (
            <>
              <li>
                <Link to="/myCart">
                  <button className="flex items-center justify-center gap-2">
                    <FaShoppingCart size={20} />
                    <div className="badge bg-[#59B210] font-semibold text-white">
                      +{cart.length}
                    </div>
                  </button>
                </Link>
              </li>
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="cursor-pointer">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      {user?.photoURL ? (
                        <img src={user?.photoURL} />
                      ) : (
                        <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" />
                      )}
                    </div>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                >
                  <NavLink
                    onClick={logOut}
                    to="/"
                    className="rounded-lg px-4 py-2 hover:bg-base-300"
                  >
                    Logout
                  </NavLink>
                </div>
              </div>
            </>
          ) : (
            <NavLink
              to="/login"
              className="rounded-lg px-4 py-2 hover:bg-base-300"
            >
              Login
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
