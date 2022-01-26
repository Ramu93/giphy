import styled from "styled-components";
import { theme } from "../../shared/theme";

export const SearchContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.primary};
  font-size: 65px;
  font-weight: 700;
  font-family: sans-serif;
`;
