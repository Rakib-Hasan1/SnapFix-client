import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://snap-fix-server.vercel.app/bookings?email=${user.email}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((res) => setBookings(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://snap-fix-server.vercel.app/bookings/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setBookings(bookings.filter((b) => b._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your booking has been canceled.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto my-6">
        <h2 className="text-2xl font-bold text-accent text-center mb-4">
          My Booked Services
        </h2>
        <Helmet>
          <title>Booked Services | SnapFix</title>
        </Helmet>
        {bookings.length === 0 ? (
          <p className="text-center">No Bookings yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 share-tech">
            {bookings.map((booking) => (
              <div key={booking._id} className="card bg-base-100 p-4 border border-gray-200">
                <img
                  src={booking.service_image}
                  className="h-48 w-full object-cover rounded-md"
                />
                <div className="mt-2">
                  <h3 className="text-xl font-semibold text-accent">
                    {booking.service_name}
                  </h3>
                  <p>
                    <strong>Date:</strong> {booking.service_taking_date}
                  </p>
                  <p>
                    <strong>Status:</strong> {booking.serviceStatus}
                  </p>

                  <div className="mt-3 flex gap-2">
                    <button
                      className="btn btn-outline btn-error btn-sm"
                      onClick={() => handleCancelBooking(booking._id)}
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
