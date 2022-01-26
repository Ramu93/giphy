import React, { FC } from "react";
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
} from "./styles";

type ModalProps = {
  visible: boolean;
  onClose: Function;
  header: string;
};

const Modal: FC<ModalProps> = ({ visible, onClose, children, header }) => {
  return (
    <div data-testid="modal-container">
      <ModalContainer visible={visible} onClick={() => onClose()}>
        <ModalContent>
          <CloseButton data-testid="modal-close-btn" onClick={() => onClose()}>
            &times;
          </CloseButton>
          <ModalHeader data-testid="modal-header">{header}</ModalHeader>
          {children}
        </ModalContent>
      </ModalContainer>
    </div>
  );
};

export default Modal;
