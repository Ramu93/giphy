import styled from "styled-components";
import { theme } from "../../shared/theme";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  background-color: ${theme.primary};
  border-radius: 10px;
  box-shadow: 0 10px 40px #ff7c7c, 0 0 0 8px #ffffffeb;
  transform: scale(0.6);
  width: 50em;
  display: flex;
`;

export const Input = styled.input`
  color: #fff;
  font-family: Arial;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  width: 80%;
  height: 2.5em;
  font-size: 30px;
  line-height: 1;
  padding-left: 20px;
  flex: 7;
  outline: none;

  &::placeholder {
    color: #e16868;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;
