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
        path: "/all-services",
        loader: () => fetch("http://localhost:3000/all-services"),
        Component: Services,
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
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/add-service",
        Component: AddService,
      },
      {
        path: "/manage-service",
        Component: ManageService,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
        // Component: Bookings,
      },
      {
        path: "/service-todo",
        Component: ServiceToDo,
      },
    ],
  },
]);
