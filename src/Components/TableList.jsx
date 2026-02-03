import React from "react";

const TableList = ({handleOpen}) => {
  const clients = [
    {
      id: 1,
      name: "Cy Ganderton",
      job: "Quality Control Specialist",
      email: "Cy.Ganderton@outlook.com",
      isActive: true,
    },
    {
      id: 2,
      name: "Hart Hagerty",
      job: "Desktop Support Technician",
      email: "Hart.Haherty@outlook.com",
      isActive: true,
    },
    {
      id: 3,
      name: "Brice Swyre",
      job: "Tax Accountant",
      email: "Brice.Swyre@outloo.com",
      isActive: false,
    },
  ];

  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>email</th>
            <th>isActive</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            return (
              <tr key={client.id} className="hover:bg-base-300">
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.job}</td>
                <td>{client.email}</td>
                <td
                  className={`${client.isActive ? "text-green-500" : "text-red-500"} font-bold`}
                >
                  {client.isActive ? "Active" : "Inactive"}
                </td>
                <td>
                  <button
                    className="btn btn-active btn-secondary hover:bg-secondary/40 hover:border-secondary/0 hover:text-white"
                    onClick={() => handleOpen("edit")}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-active btn-error hover:bg-error/40 hover:border-error/0 hover:text-white">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
