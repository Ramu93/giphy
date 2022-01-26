export interface Result {
  data: ResultData[];
  pagination: ResultPagination;
}

export interface ResultData {
  type: string;
  id: string;
  url: string;
  slug: string;
  title: string;
  rating: string;
  is_sticker: number;
  images: DataImage;
}

export interface DataImage {
  original: Image;
  downsized: Image;
  downsized_large: Image;
  downsized_medium: Image;
  downsized_small: Image;
  downsized_still: Image;
  fixed_height: Image;
  fixed_height_downsampled: Image;
  fixed_height_small: Image;
  fixed_width: Image;
  fixed_width_downsampled: Image;
  fixed_width_small: Image;
  fixed_width_still: Image;
  original_still: Image;
  preview: Image;
  preview_gif: Image;
  preview_webp: Image;
}

export interface Image {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
}

export interface ResultPagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface ResultsResponse {
  totalCount: number;
  count: number;
  data: ResultData[];
}
