import { FiMenu } from "react-icons/fi";

const OpenNavBtn = () => {
  return (
    <button
      className="hover:cursor-pointer"
      aria-label="Open menu"
      aria-expanded="false"
    >
      <FiMenu className="text-2xl" aria-hidden="true" />
    </button>
  );
};

export default OpenNavBtn;
