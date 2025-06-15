import React, { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const {
    providerEmail,
    providerName,
    providerPhotoURL,
    service_area,
    service_description,
    service_image,
    service_name,
    service_price,
    _id,
  } = useLoaderData();
  //   console.log(ServiceDetails);

  const handlePurchaseService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const purchaseService = Object.fromEntries(formData.entries());
    purchaseService.serviceStatus = "pending";
    console.log(purchaseService);

    axios
      .post("http://localhost:3000/bookings", purchaseService)
      .then((res) => {
        console.log(res.data);
        document.getElementById("my_modal_4").close();
        navigate("/bookings");
        if (res.data.insertedId) {
          Swal.fire({
            title: "Service Purchased!",
            text: "Your purchase has been successfully added.",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-8/12 mx-auto my-6">
      <h2 className="font-extrabold text-2xl text-accent text-center my-5">
        Service Details
      </h2>

      <div key={_id} className="card bg-base-100 shadow-sm my-8">
        <figure>
          <img src={service_image} className="h-4/12" alt="service image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-accent">{service_name}</h2>

          <p className="font-semibold">${service_price}</p>

          <p>{service_area}</p>
          <p>{service_description}</p>

          <p className="text-xl">Service Provider Info :</p>
          <div className="border-b border-dashed my-2"></div>

          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img
                src={providerPhotoURL}
                className="w-12 h-12 object-cover rounded-full"
                alt="Service provider image"
              />
              <div>
                <p className="font-bold">
                  Provider: <span className="font-normal">{providerName}</span>
                </p>
                <p className="font-bold">
                  Email: <span className="font-normal">{providerEmail}</span>
                </p>
              </div>
            </div>
            <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}

              <button
                className="btn btn-accent"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Book Now
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 mx-auto max-w-6xl">
                  <h3 className="font-semibold text-lg mb-3">Press Esc to exit!</h3>

                  <form onSubmit={handlePurchaseService} method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="w-full">
                        <label className="label">Service Id</label>
                        <input
                          type="text"
                          name="service_id"
                          className="input w-full input-accent cursor-not-allowed"
                          defaultValue={_id}
                          readOnly
                        />
                      </div>

                      <div className="w-full">
                        <label className="label">Service Image URL</label>
                        <input
                          type="text"
                          name="service_image"
                          className="input w-full input-accent cursor-not-allowed"
                          defaultValue={service_image}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="flex  flex-col lg:flex-row gap-8">
                      <div className="w-full">
                        <label className="label">Service Price</label>
                        <input
                          type="text"
                          name="service_price"
                          className="input w-full input-accent cursor-not-allowed"
                          defaultValue={service_price}
                          readOnly
                        />
                      </div>
                      <div className="w-full">
                        <label className="label">Service Area</label>
                        <input
                          type="text"
                          name="service_area"
                          className="input input-accent w-full cursor-not-allowed"
                          defaultValue={service_area}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="w-full">
                        <label className="label">Provider Name</label>
                        <input
                          type="text"
                          name="providerName"
                          className="input w-full input-accent cursor-not-allowed"
                          defaultValue={providerName}
                          readOnly
                        />
                      </div>
                      <div className="w-full">
                        <label className="label">Provider Email</label>
                        <input
                          type="text"
                          name="providerEmail"
                          className="input input-accent w-full cursor-not-allowed"
                          defaultValue={providerEmail}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="w-full">
                        <label className="label">Current User Name</label>
                        <input
                          type="text"
                          name="userName"
                          className="input w-full input-accent cursor-not-allowed"
                          defaultValue={user?.displayName}
                          readOnly
                        />
                      </div>
                      <div className="w-full">
                        <label className="label">Current User Email</label>
                        <input
                          type="text"
                          name="userEmail"
                          className="input input-accent w-full cursor-not-allowed"
                          defaultValue={user?.email}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="w-full flex flex-col">
                      <label className="label text-lg">
                        Service Description
                      </label>
                      <textarea
                        placeholder="Type service description .."
                        name="service_description"
                        className="textarea textarea-accent w-full cursor-not-allowed"
                        defaultValue={service_description}
                        readOnly
                      ></textarea>
                    </div>
                    <p className="text-xl font-semibold py-2">
                      Fill this form below, to Purchase this service!
                    </p>

                    <div className="w-full">
                      <label className="label">Special Instruction</label>
                      <textarea
                        placeholder="Type Special Instruction .."
                        name="Special_instruction"
                        className="textarea textarea-accent w-full"
                      ></textarea>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                      <div className="flex flex-col">
                        <label className="label">Service Taking Date</label>
                        <input
                          type="date"
                          name="service_taking_date"
                          className="input w-full input-accent"
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-accent my-6">
                        Purchase Now
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
