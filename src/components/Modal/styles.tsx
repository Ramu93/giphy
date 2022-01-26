import styled from "styled-components";
import { theme } from "../../shared/theme";

type ModalContainerProps = {
  visible: boolean;
};

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

export const ModalContent = styled.div`
  background-color: ${theme.modalBg};
  margin: auto;
  width: 700px;
  padding: 2em;
  /* border: 1px solid #888; */
  min-height: 60vh;
  max-height: 80vh;
  overflow-y: scroll;
  border-radius: 5px;
  box-shadow: 0 10px 40px #000000;
`;

export const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: ${theme.primary};
    text-decoration: none;
    cursor: pointer;
  }
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const ModalHeader = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.primary};
  font-weight: 600;
  font-size: 25px;
`;
