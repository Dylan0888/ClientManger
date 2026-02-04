import modal from "daisyui/components/modal";
import React, { useState } from "react";

const ModalForm = ({ isOpen, onClose, mode, OnSubmit }) => {
  const [modalData, setModalData] = useState({
    name: "",
    job: "",
    email: "",
    isActive: false,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({ ...prevData, [name]: value }));
    console.log(name, value);
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box ">
          <h3 className="font-bold text-lg py-3">
            {mode === "edit" ? "Edit Mode" : "Client Details"}
          </h3>
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>

            <div className="flex flex-col gap-4 py-4">
              {/* Name */}
              <label className="input input-bordered flex items-center w-full">
                Name
                <input
                  type="text"
                  placeholder="Name"
                  className="grow"
                  name="name"
                  value={modalData.name}
                  onChange={(e) => onChangeHandler(e)}
                />
              </label>

              {/* Job */}
              <label className="input input-bordered flex items-center w-full">
                Job
                <input
                  type="text"
                  placeholder="Job"
                  className="grow"
                  name="job"
                  value={modalData.job}
                  onChange={(e) => onChangeHandler(e)}
                />
              </label>

              {/* Email */}
              <label className="input validator flex items-center w-full">
                <svg
                  className="h-[1em] "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="mail@site.com"
                  required
                  name="email"
                  value={modalData.email}
                  onChange={(e) => onChangeHandler(e)}
                />
              </label>

              {/* isActive */}
              <select
                defaultValue={"Set Status"}
                className="select select-bordered w-full "
                name="isActive"
                onChange={(e) => onChangeHandler(e)}
              >
                <option disabled={true}>Set Status</option>
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button className="btn btn-success" onClick={onClose}>
                {mode === "edit" ? "Save Changes" : "Add Client"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
