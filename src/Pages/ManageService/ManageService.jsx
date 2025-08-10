import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import LoadingEffect from "../../Components/LoadingEffect/LoadingEffect";

const ManageService = () => {
  const { user } = use(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (!user?.email) {
      return;
    }

    axios
      .get(`https://snap-fix-server.vercel.app/services-provider?email=${user.email}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, [user?.email, user.accessToken]);

  const handleDeleteService = (id) => {
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
        axios.delete(`https://snap-fix-server.vercel.app/all-services/${id}`).then((res) => {
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

  if (!services) {
    return <LoadingEffect></LoadingEffect>;
  }

  return (
    <div className="bg-base-300 min-h-screen">
      <div className="w-10/12 mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent text-center mb-6 oswald">
          Your Published Services
        </h2>
        <Helmet>
          <title>Manage Services | SnapFix</title>
        </Helmet>

        {services.length === 0 ? (
          <p className="text-center share-tech">No published services yet.</p>
        ) : (
          <>
            <div className="hidden md:block overflow-x-auto rounded-md">
              <table className="table w-full">
                <thead>
                  <tr className="bg-base-100 text-accent text-sm">
                    <th>No.</th>
                    <th>Image</th>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Service Provider Name</th>
                    <th>Modify</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={service._id} className="bg-base-100">
                      <th>{index + 1}</th>
                      <td>
                        <img
                          src={service.service_image}
                          alt={service.service_name}
                          className="w-16 h-16 object-cover"
                        />
                      </td>
                      <td className="font-semibold">{service.service_name}</td>
                      <td className="font-semibold">${service.service_price}</td>
                      <td className="font-semibold">{service.providerName}</td>
                      <td>
                        <Link to={`/services/${service._id}`}>
                          <button className="btn btn-error btn-sm">
                            <MdModeEditOutline size={20} />
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-error btn-sm"
                          onClick={() => handleDeleteService(service._id)}
                        >
                          <MdDelete size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="block md:hidden">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="card bg-base-100 p-4 mb-4 rounded-md"
                >
                  <div className="flex gap-4 items-center mb-2">
                    <img
                      src={service.service_image}
                      alt={service.service_name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-bold">{service.service_name}</p>
                      <p className="font-semibold">${service.service_price}</p>
                      <p className="text-sm">{service.providerName}</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <Link to={`/services/${service._id}`}>
                      <button className="btn btn-error btn-sm">
                        <MdModeEditOutline size={20} />
                      </button>
                    </Link>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleDeleteService(service._id)}
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageService;
