interface Image {
  original: string;
}

export interface FbiWanted {
  uid: string;
  title: string;
  description: string;
  publication: string;
  sex?: string;
  height_min?: string;
  weight?: string;
  images: Image[];
}
