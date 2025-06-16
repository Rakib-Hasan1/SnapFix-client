import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [services, setServices] = useState(null);

  useEffect(() => {
    if (!user?.accessToken) return;

    axios
      .get(`http://localhost:3000/services/${id}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setServices(res.data))
      .catch((error) => console.error(error));
  }, [id, user?.accessToken]);

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UpdatedData = Object.fromEntries(formData.entries());

    axios
      .put(`http://localhost:3000/services/${id}`, UpdatedData)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your updated service data has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/manage-service");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!services) {
    return <p className="text-center mt-20 text-lg">Loading service data...</p>;
  }

  const {
    providerEmail,
    providerName,
    service_area,
    service_description,
    service_image,
    service_name,
    service_price,
  } = services;

  return (
    <div className="w-8/12 mx-auto mt-10">
      <Helmet>
        <title>Update Service | SnapFix</title>
      </Helmet>
      <form
        onSubmit={handleUpdateService}
        className="fieldset bg-base-300 rounded-box shadow-sm p-10"
      >
        <h3 className="font-extrabold text-2xl text-accent text-center my-4">
          Update Your Service
        </h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full">
            <label className="label text-lg">Service Name</label>
            <input
              type="text"
              name="service_name"
              className="input w-full  input-accent"
              defaultValue={service_name}
            />
          </div>

          <div className="w-full">
            <label className="label text-lg">Service Image URL</label>
            <input
              type="text"
              name="service_image"
              className="input w-full  input-accent"
              defaultValue={service_image}
            />
          </div>
        </div>
        <div className="flex  flex-col lg:flex-row gap-8">
          <div className="w-full">
            <label className="label text-lg">Service Price</label>
            <input
              type="text"
              name="service_price"
              className="input w-full  input-accent"
              defaultValue={service_price}
            />
          </div>
          <div className="w-full">
            <label className="label text-lg">Provider Area</label>
            <input
              type="text"
              name="service_area"
              className="input input-accent w-full"
              defaultValue={service_area}
            />
          </div>
        </div>

        <div className="flex  flex-col lg:flex-row gap-8">
          <div className="w-full">
            <label className="label text-lg">Provider Name</label>
            <input
              type="text"
              name="providerName"
              className="input w-full  input-accent"
              defaultValue={providerName}
            />
          </div>
          <div className="w-full">
            <label className="label text-lg">Provider Email</label>
            <input
              type="text"
              name="providerEmail"
              className="input input-accent w-full"
              defaultValue={providerEmail}
            />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <label className="label text-lg">Service Description</label>
          <textarea
            placeholder="Type service description .."
            name="service_description"
            className="textarea textarea-accent w-full"
            defaultValue={service_description}
          ></textarea>
        </div>

        <div className="my-5">
          <button className="btn btn-accent w-full">Update Service</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;