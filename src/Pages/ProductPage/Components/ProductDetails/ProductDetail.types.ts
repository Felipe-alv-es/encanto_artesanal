export interface ProductDetailsProps {
  product: {
    title: string;
    description: string;
    largedescription: string;
    imagesrc: string[];
  };
  onClose: () => void;
}

export interface ProductItemProps {
  text?: string;
}

export interface ProductItemTitle {
  title: string;
  largeDescription: string;
}

export interface ProductDetailColorsComponentProps {
  colors: string[];
  setSelectedColor: (value: React.SetStateAction<string>) => void;
  selectedColor: string;
}

export interface ProductDetailImagesComponentProps {
  images: string[];
  setSelectedImage: (value: React.SetStateAction<string>) => void;
  selectedImage: string;
}

export interface ProductDetailSizesComponentProps {
  sizes: string[];
  setSelectedSize: (value: React.SetStateAction<string>) => void;
  selectedSize: string;
}
export interface ProductItemCloseButton {
  onClose: () => void;
}
export interface ProductItemButton {
  title: string;
  selectedColor: string;
  selectedSize: string;
}
