import { createPortal } from "react-dom";

export default function Portal({ children }) {
  return createPortal(
    children,
    document.getElementById("react-portals")
      ? document.getElementById("react-portals")
      : document.body
  );
}
