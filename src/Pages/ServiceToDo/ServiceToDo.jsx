import React, { useEffect, useState, use } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";
import { Helmet } from "react-helmet-async";

const ServiceToDo = () => {
  const { user } = use(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://snap-fix-server.vercel.app/bookings/provider?email=${user.email}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((res) => setBookings(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleStatusChange = (id, newStatus) => {
    axios
      .put(`https://snap-fix-server.vercel.app/bookings/status/${id}`, {
        serviceStatus: newStatus,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Updated!", "Status updated successfully", "success");
          setBookings((prev) =>
            prev.map((b) =>
              b._id === id ? { ...b, serviceStatus: newStatus } : b
            )
          );
        }
      });
  };

  if (!bookings.length) {
    return (
      <div className="text-center my-20 text-lg font-semibold text-error">
        No one booked your service yet
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-2xl font-bold text-accent text-center mb-6 oswald">
        Update Status of Booked Services
      </h2>

      <Helmet>
        <title>Services ToDo | SnapFix</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 share-tech">
        {bookings.map((booking) => (
          <div key={booking._id} className="card bg-base-100 shadow p-4">
            <img
              src={booking.service_image}
              alt={booking.service_name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-bold mt-2 text-accent">
              {booking.service_name}
            </h3>
            <p className="text-sm">
              <span className="font-semibold">Price:</span> $
              {booking.service_price}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Area:</span>{" "}
              {booking.service_area}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Date:</span>{" "}
              {booking.service_taking_date}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Instructions:</span>{" "}
              {booking.Special_instruction || "None"}
            </p>

            <div className="flex items-center gap-3 mt-3">
              <label className="font-semibold">Status:</label>
              <select
                className="select select-bordered select-accent select-sm w-full mt-1"
                value={booking.serviceStatus}
                onChange={(e) =>
                  handleStatusChange(booking._id, e.target.value)
                }
              >
                <option value="pending">Pending</option>
                <option value="working">Working</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceToDo;
