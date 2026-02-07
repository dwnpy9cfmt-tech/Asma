
export interface Artwork {
  id: number;
  title: string;
  category: 'Peinture' | 'Sculpture';
  imageUrl: string;
  year: string;
  description?: string;
  dimensions?: string;
}

export enum Section {
  Home = 'home',
  Gallery = 'gallery',
  ArtTherapy = 'art-therapy',
  About = 'about',
  Contact = 'contact'
}
