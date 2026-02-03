import React, { useState } from "react";
import Nav from "./Components/Nav.jsx";
import TableList from "./Components/TableList.jsx";
import ModalForm from "./Components/ModalForm.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("mode = add");
    } else {
      console.log("mode = edit");
    }
  };

  return (
    <>
      <Nav handleOpen={handleOpen} />
      <TableList handleOpen={handleOpen} />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
        onSubmit={() => handleSubmit}
      />
    </>
  );
}

export default App;
