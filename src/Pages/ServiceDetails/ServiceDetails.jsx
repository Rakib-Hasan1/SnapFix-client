import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import LoadingEffect from "../../Components/LoadingEffect/LoadingEffect";

const ServiceDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios
      .get(`https://snap-fix-server.vercel.app/all-services/${id}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setService(res.data))
      .catch((err) => {
        console.error(err);
        Swal.fire("Unauthorized", "Failed to fetch service details", "error");
        navigate("/");
      });
  }, [id, navigate, user.accessToken]);

  if (!service) {
    return <LoadingEffect></LoadingEffect>;
  }

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
  } = service;

  const handlePurchaseService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const purchaseService = Object.fromEntries(formData.entries());
    purchaseService.serviceStatus = "pending";
    purchaseService.service_id = _id;

    axios
      .post("https://snap-fix-server.vercel.app/bookings", purchaseService)
      .then((res) => {
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
    <div className="bg-base-200 min-h-screen">
      <div className="w-full lg:w-8/12 mx-auto">
        <div className="mx-auto p-4">
          <h2 className="font-extrabold text-2xl text-accent text-center my-5 oswald">
            Service Details
          </h2>
          <Helmet>
            <title>Service Details | SnapFix</title>
          </Helmet>

          <div
            key={_id}
            className="my-8 rounded-lg p-4 lg:flex lg:gap-12 share-tech"
          >
            {/* LEFT SIDE - IMAGE */}
            <div className="lg:w-2/3 flex items-center justify-center">
              <img
                src={service_image}
                className="w-full max-h-[400px] object-cover rounded-lg shadow"
                alt="service image"
              />
            </div>

            {/* RIGHT SIDE - DETAILS */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-accent mb-2">
                  {service_name}
                </h2>
                
                <p className="mb-2"> <strong>Service Location :</strong> {service_area}</p>
                <p className="font-semibold text-lg mb-2">
                  Service Price : ${service_price}
                </p>
                <p className="mb-4">{service_description}</p>
                

                <p className="text-xl font-semibold">Service Provider Info :</p>
                <div className="border-b border-dashed my-2"></div>

                <div className="flex items-center gap-3">
                  <img
                    src={providerPhotoURL}
                    className="w-12 h-12 object-cover rounded-full"
                    alt="Service provider"
                  />
                  <div>
                    <p className="font-bold">
                      Provider:{" "}
                      <span className="font-normal">{providerName}</span>
                    </p>
                    <p className="font-bold">
                      Email:{" "}
                      <span className="font-normal">{providerEmail}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* BOOK NOW BUTTON */}
              <div className="mt-6">
                <button
                  className="btn btn-accent w-full lg:w-full"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Book Now
                </button>
                {/* Keep your existing modal here */}
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 mx-auto max-w-6xl">
                    <h3 className="font-semibold text-lg mb-3">
                      Press Esc to exit!
                    </h3>

                    <form onSubmit={handlePurchaseService} method="dialog">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full">
                          <label className="label">Service Name</label>
                          <input
                            type="text"
                            name="service_name"
                            className="input w-full input-accent cursor-not-allowed"
                            defaultValue={service_name}
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
    </div>
  );
};

export default ServiceDetails;
