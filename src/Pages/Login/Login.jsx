import Lottie from "lottie-react";
import React, { use, useState } from "react";
import login_lottie from "../../assets/Lotties/login.json.json";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
  const { signInUser, googleSignIn, setUser } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    setErrorMessage("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // setUser(user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-8/12 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex items-center">
        <Lottie
          style={{ width: "300px" }}
          animationData={login_lottie}
          loop={true}
        >
          {" "}
        </Lottie>
      </div>
      <div className="row-start-1">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset bg-base-100 max-w-sm rounded-md shadow-2xl p-4">
            <h3 className="font-bold text-2xl text-center text-accent">
              SnapFix Login
            </h3>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn bg-base-100 text-back dark:text-white border-[#e5e5e5] mt-3"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <div className="divider">OR CONTINUE WITH</div>

            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <label className="font-semibold label text-accent hover:underline cursor-pointer">
              Forget Password ?
            </label>

            {errorMessage && (
              <p className="text-red-500 font-medium mt-2 text-sm">
                {errorMessage}
              </p>
            )}

            <button className="btn btn-accent mt-4 text-base-100">Login</button>

            <div className="mt-3">
              <p className="font-semibold">
                New to SnapFix?{" "}
                <Link className="text-accent hover:underline" to="/register">
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
