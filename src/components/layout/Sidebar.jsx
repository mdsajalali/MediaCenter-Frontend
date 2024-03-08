import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  return (
    <div className="my-5 z-[9999]">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="my-2">
        <Link to="/products">Products</Link>
      </li>

      {user?.email ? (
        <div className="flex">
          <li>
            <Link to="/myCart">
              <button className="flex items-center justify-center gap-2">
                <FaShoppingCart size={20} />
                <div className="badge bg-[#59B210] text-white font-semibold">
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
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                onClick={logOut}
                to="/"
                className="px-4 py-2 hover:bg-base-300 rounded-lg"
              >
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <NavLink to="/login" className="px-4 py-2 hover:bg-base-300 rounded-lg">
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Sidebar;
