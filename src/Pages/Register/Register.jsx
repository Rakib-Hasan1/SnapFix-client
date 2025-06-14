import React, { use, useState } from "react";
import lottie_register from "../../assets/Lotties/register.json.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Register = () => {
  const { createUser, updateUser, setUser, googleSignIn } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(photo);

    setErrorMessage('');

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(result.user);
        navigate(from);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            console.log("updated user");
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const handleGoogleRegister = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-8/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center">
        <Lottie
          style={{ width: "300px" }}
          animationData={lottie_register}
          loop={true}
        ></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl row-start-1">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <h3 className="font-bold text-2xl text-center text-accent">
              SnapFix Register
            </h3>

            <button
              onClick={handleGoogleRegister}
              className="btn bg-base-100 text-back dark:text-white border-[#e5e5e5] mt-3"
              type="button"
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
              Register with Google
            </button>

            <div className="divider">OR CONTINUE WITH</div>

            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Type your name"
              required
            />

            <label className="label">Your Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Your photo URL"
              required
            />

            <label className="label">Your Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Type your email"
              required
            />

            <label className="label">Your Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Type your password"
              required
            />

            <label className="label mt-2">
              <input
                type="checkbox"
                name="terms"
                className="checkbox"
                required
              />
              Accept out terms and conditions
            </label>

            {errorMessage && (
              <p className="text-red-500 font-medium mt-2 text-sm">
                {errorMessage}
              </p>
            )}

            <button type="submit" className="btn btn-accent mt-4">
              Register
            </button>

            <div className="mt-3">
              <p className="font-semibold">
                Already have SnapFix account?
                <Link className="text-accent hover:underline" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
