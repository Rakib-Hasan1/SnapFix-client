import { createBrowserRouter } from "react-router";
import Services from "../Pages/Services/Services";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/AddService/AddService";
import ManageService from "../Pages/ManageService/ManageService";
import Bookings from "../Pages/Bookings/Bookings";
import ServiceToDo from "../Pages/ServiceToDo";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import LoadingEffect from "../Components/LoadingEffect/LoadingEffect";
import { Suspense } from "react";
import UpdateService from "../Pages/UpdateService/UpdateService";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/all-services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-services/${params.id}`),
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-services",
        loader: () => fetch("http://localhost:3000/all-services"),
        element: <Services></Services>,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-service",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateService></UpdateService>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/service-todo",
        Component: ServiceToDo,
      },
    ],
  },
]);
