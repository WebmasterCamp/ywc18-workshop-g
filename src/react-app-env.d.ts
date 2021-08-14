/// <reference types="react-scripts" />

type EventHandler<T extends any[]> = (...args: T) => void;

interface ProductInterface {
    productId: string;
    productImages?: string[];
    productName: string;
    productBio?: string;
    tag?: string[];
    farm: string;
    description: string;
    farmerImage?: string;
    farmerImageCaption?: string;
    duration?: number;
    totalPrice: number;
  }
  
  interface ProductsInterface {
    [id: string]: ProductInterface
  }