import React from "react";

const ModalForm = ({ isOpen, onClose, mode, OnSubmit }) => {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
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

            <button className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
