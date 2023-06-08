interface Image {
  original: string;
}

export interface FbiWanted {
  title: string;
  description: string;
  publication: string;
  height_min?: string;
  weight?: string;
  images: Image[];
}
