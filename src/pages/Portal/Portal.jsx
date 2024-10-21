import { useState } from "react";
import Modal from "../../hoc/Modal/Modal";
import Popup from "../../components/Popup/Popup";
import { Link } from "react-router-dom";

export default function PortalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Portal tutorial</h1>
      <h2>Try to make your own modal window</h2>

      <button onClick={() => setIsOpen(true)}> Button to open popup </button>

      <Modal shown={isOpen} onClose={() => setIsOpen(false)}>
        <Popup />
      </Modal>

      <hr />

      <Link to="./?popup=id1">Link to open popup id1 </Link>

      <Modal id="id1">
        <Popup />
      </Modal>
    </>
  );
}
