import React from "react";

const Nav = ({ handleOpen }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Client Manager 3000</a>
      </div>
      <div className="navbar-center ">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-48 md:w-auto outline-0 border-2"
          />
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary" onClick={() => handleOpen("add")}>
          Add Client
        </a>
      </div>
    </div>
  );
};

export default Nav;
