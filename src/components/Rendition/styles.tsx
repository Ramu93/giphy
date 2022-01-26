import styled from "styled-components";
import { theme } from "../../shared/theme";

export const RenditionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 2rem;
`;

type ImageProps = {
  height: string;
  width: string;
  position?: "flex-start" | "flex-end" | "center";
  objectFit: "unset" | "contain" | "cover";
};

export const Image = styled.img<ImageProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  object-fit: ${({ objectFit }) => objectFit};
  justify-content: ${({ position }) => position};
`;

type RenditionElementContainerProps = {
  flex: number;
  horizontalCenter?: boolean;
  enableRightPadding?: boolean;
};

export const RenditionElementContainer = styled.div<RenditionElementContainerProps>`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  justify-content: ${({ horizontalCenter }) =>
    horizontalCenter ? "center" : ""};
  padding-right: ${({ enableRightPadding }) =>
    enableRightPadding ? "30px" : "0px"};
`;

export const RenditionLabel = styled.div`
  height: 2rem;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.primary};
`;

export const Meta = styled.div`
  height: 0.1rem;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.primary};
`;

export const RenditionRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
`;
