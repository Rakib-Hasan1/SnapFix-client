import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageService = () => {
  const { user } = use(AuthContext);
  const [services, setServices] = useState([]);
  console.log(user.email);

  useEffect(() => {
    if (!user?.email) return; // 🛑 Don't fetch until email exists

    axios
      .get(`http://localhost:3000/services-provider?email=${user.email}`)
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  const handleDeleteBooking = (id) => {
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
        axios.delete(`http://localhost:3000/all-services/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setServices(services.filter((s) => s._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your service has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-10/12 mx-auto my-10">
      <h2 className="text-2xl font-bold text-accent text-center mb-6">
        Your Published Services
      </h2>

      {services.length === 0 ? (
        <p className="text-center">No published services yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full table-zebra">
            <thead>
              <tr className="bg-base-300 text-accent text-sm">
                <th>No.</th>
                <th>Image</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Service Provider Name</th>
                <th>Modify</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={service.service_image}
                      alt={service.service_name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="font-semibold">{service.service_name}</td>
                  

                  <td className="font-semibold">${service.service_price}</td>
                  <td className="font-semibold">{service.providerName}</td>
                  <td>
                    <button className="btn btn-error btn-sm">
                      <MdModeEditOutline size={30} />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleDeleteBooking(service._id)}
                    >
                      <MdDelete size={30} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageService;
