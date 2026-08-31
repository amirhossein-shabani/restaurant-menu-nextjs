"use client";
import { useModal } from "./ModalContext";

function MenuItemTrigger({ item, children }) {
  const { openItem } = useModal();
  const { is_available } = item;

  return (
    <div
      onClick={() => {
        if (is_available === true) {
          openItem(item);
        }
      }}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}

export default MenuItemTrigger;
