import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center px-4">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <p className="text-center text-sm">
            Already have an account ?{" "}
            <NavLink
              to="/login"
              className="text-[#59B210] font-bold hover:underline cursor-pointer "
            >
              Login
            </NavLink>
          </p>
          <div className="form-control mt-2">
            <button
              type="submit"
              className="btn bg-[#59B210] text-white hover:bg-[#0E53A5]"
            >
              Register
            </button>
          </div>
          <div className="divider ">Or, Continue With</div>
          <button
            type="button"
            className="btn bg-white text-black hover:bg-[#0E53A5]  w-full flex justify-between items-center cursor-pointer hover:text-white border-[#59B210]"
          >
            Google
            <FcGoogle className="w-8 h-8" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
