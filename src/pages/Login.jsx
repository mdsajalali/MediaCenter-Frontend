import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    console.log(userInfo);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center px-4">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
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
              name="password"
            />
          </div>
          <p className="text-center text-sm">
            Don&apos;t have an account ?{" "}
            <NavLink
              to="/register"
              className="text-[#59B210] font-bold hover:underline cursor-pointer "
            >
              Register
            </NavLink>
          </p>
          <div className="form-control mt-2">
            <button
              type="submit"
              className="btn bg-[#59B210] text-white hover:bg-[#0E53A5]"
            >
              Login
            </button>
          </div>
          <div className="divider ">Or, Continue With</div>
          <button
            type="button"
            className="btn bg-white text-black hover:bg-[#0E53A5]  w-full flex justify-between items-center cursor-pointer hover:text-white border-[#59B210] "
          >
            Google
            <FcGoogle className="w-8 h-8" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
