import React, { FC } from "react";
import { DataImage } from "../../pages/Results/result.interface";
import {
  RenditionContainer,
  RenditionElementContainer,
  RenditionRow,
  Image,
  RenditionLabel,
  Meta,
} from "./styles";
import determineSize from "../../lib/determineSize";

type RenditionProps = {
  images: DataImage;
};

const Rendition: FC<RenditionProps> = ({ images }) => {
  const { original, downsized_medium, fixed_height, fixed_width } = images;
  return (
    <RenditionContainer data-testid="rendition-container">
      <RenditionElementContainer flex={4} horizontalCenter>
        <Image
          src={original.url}
          height="300px"
          width="100%"
          objectFit="contain"
        />
        <RenditionLabel>Original</RenditionLabel>
        <Meta>{determineSize(original.size)}</Meta>
      </RenditionElementContainer>
      <RenditionRow>
        <RenditionElementContainer flex={1} enableRightPadding>
          <Image
            src={downsized_medium.url}
            height="100px"
            width="100%"
            position="flex-end"
            objectFit="contain"
          />
          <RenditionLabel>Downsized</RenditionLabel>
          <Meta>{determineSize(downsized_medium.size)}</Meta>
        </RenditionElementContainer>
        <RenditionElementContainer flex={1} enableRightPadding>
          <Image
            src={fixed_width.url}
            width={fixed_width.width + "px"}
            height="100%"
            position="flex-end"
            objectFit="contain"
          />
          <RenditionLabel>Fixed Width</RenditionLabel>
          <Meta>{determineSize(fixed_width.size)}</Meta>
        </RenditionElementContainer>
        <RenditionElementContainer flex={2}>
          <Image
            src={fixed_height.url}
            height={fixed_height.height + "px"}
            width="100%"
            position="flex-end"
            objectFit="unset"
          />
          <RenditionLabel>Fixed Height</RenditionLabel>
          <Meta>{determineSize(fixed_height.size)}</Meta>
        </RenditionElementContainer>
      </RenditionRow>
    </RenditionContainer>
  );
};

export default Rendition;
