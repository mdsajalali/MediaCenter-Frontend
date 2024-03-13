import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  return (
    <div className="z-[9999] my-5">
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
        </div>
      ) : (
        <NavLink to="/login" className="rounded-lg px-4 py-2 hover:bg-base-300">
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Sidebar;
