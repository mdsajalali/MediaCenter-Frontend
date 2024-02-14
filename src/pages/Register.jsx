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
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center px-4">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
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
            onClick={handleGoogleLogin}
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
