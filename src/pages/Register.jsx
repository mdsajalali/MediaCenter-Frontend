import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { createUser, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password };
    console.log(userInfo);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success(
          `${name} your account has been created successfully! Welcome Home Page!`,
        );
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
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
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
            Already have an account ?{" "}
            <NavLink
              to="/login"
              className="cursor-pointer font-bold text-[#59B210] hover:underline "
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
            onClick={handleGoogleLogin}
            type="button"
            className="btn flex w-full cursor-pointer  items-center justify-between border-[#59B210] bg-white text-black hover:bg-[#0E53A5] hover:text-white"
          >
            Google
            <FcGoogle className="h-8 w-8" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
