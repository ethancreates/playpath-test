import { MouseEventHandler, ReactNode } from "react";
import { IoClose } from "react-icons/io5";

type ModalProps = {
  showModal: boolean;
  onClose: MouseEventHandler;
  children: ReactNode;
};

const Modal = ({ showModal, onClose, children }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`
          fixed inset-0 flex justify-center items-center transition-colors
          ${showModal ? "visible bg-black/20" : "invisible"}
        `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
            bg-white rounded-xl shadow p-6 transition-all
            ${showModal ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
