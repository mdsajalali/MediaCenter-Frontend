import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();

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
       toast.success("Successfully logged in!");
       navigate("/");
     })
     .catch((error) => {
       toast.error(error.message);
     });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md flex-shrink-0 bg-base-100 shadow-2xl">
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
              className="cursor-pointer font-bold text-[#59B210] hover:underline "
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
            onClick={handleGoogleLogin}
            type="button"
            className="btn flex w-full cursor-pointer  items-center justify-between border-[#59B210] bg-white text-black hover:bg-[#0E53A5] hover:text-white "
          >
            Google
            <FcGoogle className="h-8 w-8" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
