import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "./Form";


function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Animated Button */}
      <button
       

        onClick={handleShow}
        style={{ borderRadius: "124px" }}
        className="border border-black bg-black cursor-pointer text-white rounded-sm sm:font-md font-sm sm:text-sm text-xs sm:sm:px-5 py-3 px-3 py-2 w-fit"
      >
        BOOK AN APPOINTMENT
      </button>

      {/* Bootstrap Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="flex justify-center p-2">
          <Form />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;
