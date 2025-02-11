import { FiX } from "react-icons/fi";

const CloseNavBtn = () => {
  return (
    <button
      className="hover:cursor-pointer"
      aria-label="Close menu"
      aria-expanded="true"
    >
      <FiX className="text-2xl" aria-hidden="true" />
    </button>
  );
};

export default CloseNavBtn;
