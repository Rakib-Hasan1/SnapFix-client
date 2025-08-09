import React, { use } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { TbLogout } from "react-icons/tb";
import Swal from "sweetalert2";
import navbar_logo from "../../assets/Images/SnapFix.svg.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const location = useLocation();

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be signed out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Signed Out!",
              text: "You have been successfully signed out.",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while signing out.",
              icon: "error",
            });
          });
      }
    });
  };

  const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    };

    return (
      <button
        onClick={toggleTheme}
        className="btn btn-circle btn-outline border border-accent w-8 h-8 font-normal tooltip tooltip-bottom mr-2"
        data-tip={theme === "light" ? "Switch to Dark" : "Switch to Light"}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    );
  };


  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold text-lg"
              : "font-bold hover:text-success text-lg"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/all-services"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold text-lg"
              : "font-bold hover:text-success text-lg"
          }
        >
          All Services
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold text-lg"
              : "font-bold hover:text-success text-lg"
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>

      {
        user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-bold text-lg"
                    : "font-bold hover:text-success text-lg"
                }
                to="/add-service"
              >
                Add Service
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-bold text-lg"
                    : "font-bold hover:text-success text-lg"
                }
                to="/manage-service"
              >
                Manage Service
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-bold text-lg"
                    : "font-bold hover:text-success text-lg"
                }
                to="/bookings"
              >
                Booked-Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-bold text-lg"
                    : "font-bold hover:text-success text-lg"
                }
                to="/service-todo"
              >
                Service-To-Do
              </NavLink>
            </li>
          </>
        )
      }

    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100 px-0 lg:px-14 shadow-md">
      <div className="navbar bg-base-100 flex items-center justify-between">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow share-tech"
            >
              {links}
            </ul>
          </div>

          <Link
            to="/"
            className="btn-ghost font-bold text-2xl text-accent flex gap-2"
          >
            <img src={navbar_logo} className="w-8 h-8 object-cover" alt="" />

            <p className="oswald">SnapFix</p>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 share-tech">{links}</ul>
        </div>
        <div className="flex flex-row items-center">
          <div>
            <ThemeToggle className="border-none"></ThemeToggle>
          </div>
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom inline-block"
                data-tip={user?.displayName}
              >
                <img
                  className="w-9 h-9 object-cover rounded-full border border-accent cursor-pointer mr-3"
                  src={user?.photoURL}
                  alt="user Image"
                />
              </div>

              <button
                onClick={handleSignOut}
                className="cursor-pointer hover:text-success tooltip tooltip-bottom"
                data-tip="Logout"
              >
                <TbLogout size={40} />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-accent btn-md rounded-2xl">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
