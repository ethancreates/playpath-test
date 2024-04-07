import { Dispatch, ReactNode, SetStateAction } from "react";

type ModalButtonProps = {
  children: ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ModalButton = ({ children, setShowModal }: ModalButtonProps) => {
  return (
    <button
      onClick={() => {
        setShowModal(true);
      }}
      className="bg-[#0040C1] text-white px-6 py-2.5 rounded-lg hover:bg-[#1155DD]"
    >
      {children}
    </button>
  );
};
export default ModalButton;
