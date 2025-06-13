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
        path: "/services",
        Component: Services,
      },
      {
        path: "/login",
        Component: Login,
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
        Component: Bookings,
      },
      {
        path: "/service-todo",
        Component: ServiceToDo,
      },
    ],
  },
]);
