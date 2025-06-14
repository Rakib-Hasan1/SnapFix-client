import React, { use } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { VscSignOut } from "react-icons/vsc";
import Swal from "sweetalert2";

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
            console.log("sign out user");
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while signing out.",
              icon: "error",
            });
          });
      }
    });
  };

  const isDashboardActive = [
    "/add-service",
    "/manage-service",
    "/bookings",
    "/service-todo",
  ].includes(location.pathname);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold"
              : "font-semibold hover:text-success"
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
              ? "text-accent font-bold"
              : "font-semibold hover:text-success"
          }
        >
          All Services
        </NavLink>
      </li>

      {user && (
        <li className="dropdown dropdown-hover dropdown-bottom dropdown-start">
          <span
            className={`${
              isDashboardActive
                ? "text-accent font-bold"
                : "font-semibold hover:text-success"
            }`}
            tabIndex={0}
          >
            Dashboard
          </span>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/add-service">Add Service</NavLink>
            </li>
            <li>
              <NavLink to="/manage-service">Manage Service</NavLink>
            </li>
            <li>
              <NavLink to="/bookings">Booked-Services</NavLink>
            </li>
            <li>
              <NavLink to="/service-todo">Service-To-Do</NavLink>
            </li>
          </ul>
        </li>
      )}
    </>
  );

  return (
    <div className="px-0 lg:px-14 shadow-md">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn-ghost font-bold text-2xl text-accent">
            SnapFix
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
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
                <VscSignOut size={40} />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-accent">
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
