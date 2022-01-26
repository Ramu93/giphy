import React, { FC } from "react";
import { Image } from "./styles";
import { ResultData } from "./result.interface";

type ThumbnailProps = {
  onClick: Function;
  data: ResultData;
};

const Thumbnail: FC<ThumbnailProps> = ({ onClick, data }) => {
  return (
    <Image
      src={data.images.fixed_width_still.url}
      onClick={() => onClick(data)}
      height={`${data.images.fixed_width_still.height}px`}
      width={`${data.images.fixed_width_still.width}px`}
    />
  );
};

export default Thumbnail;
