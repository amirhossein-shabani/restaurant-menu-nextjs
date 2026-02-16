"use client";
import { useModal } from "./ModalContext";

function MenuItemTrigger({ item, children }) {
  const { openItem } = useModal();

  return (
    <div onClick={() => openItem(item)} className="cursor-pointer">
      {children}
    </div>
  );
}

export default MenuItemTrigger;
