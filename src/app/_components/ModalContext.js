"use client";

import { createContext, useContext, useState } from "react";
import Modal from "./Modal";
import MenuItemDetails from "./MenuItemDetails";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const openItem = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <ModalContext.Provider value={{ openItem }}>
      {children}
      {/* the MenuCategory & MenuItemContainer are children  */}

      <Modal isOpen={!!selectedItem} onClose={closeModal}>
        {selectedItem && <MenuItemDetails item={selectedItem} />}
      </Modal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
