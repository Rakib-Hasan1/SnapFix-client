import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

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
      .post("http://localhost:3000/services", newService)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Service Added!",
            text: "Your service has been successfully added.",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset(); // clear form
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
    <div className="w-8/12 mx-auto my-10">
      <h2 className="font-extrabold text-2xl text-accent text-center my-5">
        Add A Service
      </h2>

      <form
        onSubmit={handleAddService}
        className="fieldset bg-base-300 rounded-box shadow-sm p-10"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full">
            <label className="label text-lg">Service Name</label>
            <input
              type="text"
              name="service_name"
              className="input w-full  input-accent"
              placeholder="Type Service Name"
            />
          </div>

          <div className="w-full">
            <label className="label text-lg">Service Image URL</label>
            <input
              type="text"
              name="service_image"
              className="input w-full  input-accent"
              placeholder="Type service image URL"
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
            />
          </div>
          <div className="w-full">
            <label className="label text-lg">Service Area</label>
            <input
              type="text"
              name="service_area"
              className="input input-accent w-full"
              placeholder="Type service area"
            />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <label className="label text-lg">Service Description</label>
          <textarea
            placeholder="Type service description .."
            name="service_description"
            className="textarea textarea-accent w-full"
          ></textarea>
        </div>

        <div className="my-5">
          <button className="btn btn-accent w-full">Add Service</button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
