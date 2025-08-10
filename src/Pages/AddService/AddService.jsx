import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = use(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());
    newService.providerName = user?.displayName;
    newService.providerEmail = user?.email;
    newService.providerPhotoURL = user?.photoURL;

    axios
      .post("https://snap-fix-server.vercel.app/services", newService)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Service Added!",
            text: "Your service has been successfully added.",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
        console.error(error);
      });
  };

  return (
    <div className="bg-base-300 min-h-screen">
      <div className="w-full lg:w-8/12 mx-auto py-10">
        <h2 className="font-extrabold text-3xl text-accent text-center mb-5 oswald">
          Add A Service
        </h2>
        <Helmet>
          <title>Add Service | SnapFix</title>
        </Helmet>

        <form
          onSubmit={handleAddService}
          className="fieldset bg-base-100 rounded-md p-4 lg:p-10 share-tech"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full">
              <label className="label text-lg">Service Name</label>
              <input
                type="text"
                name="service_name"
                className="input w-full  input-accent"
                placeholder="Type Service Name"
                required
              />
            </div>

            <div className="w-full">
              <label className="label text-lg">Service Image URL</label>
              <input
                type="text"
                name="service_image"
                className="input w-full  input-accent"
                placeholder="Type service image URL"
                required
              />
            </div>
          </div>
          <div className="flex  flex-col lg:flex-row gap-8">
            <div className="w-full">
              <label className="label text-lg">Price</label>
              <input
                type="text"
                name="service_price"
                className="input w-full  input-accent"
                placeholder="Enter price"
                required
              />
            </div>
            <div className="w-full">
              <label className="label text-lg">Service Area</label>
              <input
                type="text"
                name="service_area"
                className="input input-accent w-full"
                placeholder="Type service area"
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <label className="label text-lg">Service Description</label>
            <textarea
              placeholder="Type service description .."
              name="service_description"
              className="textarea textarea-accent w-full"
              required
            ></textarea>
          </div>

          <div className="my-5">
            <button className="btn btn-accent w-full">Add Service</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
