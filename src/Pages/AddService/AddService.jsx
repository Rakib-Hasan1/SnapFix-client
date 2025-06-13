import React from "react";

const AddService = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="font-extrabold text-2xl text-accent text-center my-5">
        Add A Service
      </h2>

      <form className="fieldset bg-base-300 rounded-box shadow-sm p-10">
        <div className="flex gap-8">
          <div className="w-full">
            <label className="label text-lg">Title</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Write Title here"
            />
          </div>

          <div className="w-full">
            <label className="label text-lg">Category</label>
            <input
              type="text"
              className="input w-full"
              placeholder="my-awesome-page"
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-full">
            <label className="label text-lg">Provider Info:</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Write provider info"
            />
          </div>
          <div className="w-full">
            <label className="label text-lg">Provider Info:</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Write provider info"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
