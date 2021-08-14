// Seasonal Products

export const mockSeasonalProduct = [
  {
    image: "/images/watermelon.webp",
    description: "WATERMELON",
    linkTo: "products/watermelon"
  },
  {
    image: "/images/watermelon.webp",
    description: "WATERMELON",
    linkTo: "products/watermelon"
  },
  {
    image: "/images/watermelon.webp",
    description: "WATERMELON",
    linkTo: "products/watermelon"
  },
  {
    image: "/images/watermelon.webp",
    description: "WATERMELON",
    linkTo: "products/watermelon"
  },
];

// FARMERS

export const mockFarmers = [
  {
    image: "/images/farmer.webp",
    title: "",
    linkTo: ""
  },
  {
    image: "/images/farmer.webp",
    title: "",
    linkTo: ""
  },
  {
    image: "/images/farmer.webp",
    title: "",
    linkTo: ""
  },
];

// PRODUCT 

export const mockProduct: ProductInterface = {
  productId: "0",
  productImages: ["/images/watermelon.webp", "/images/watermelon.webp", "/images/watermelon.webp"],
  productName: "มังคุดจ้า",
  productBio: "โตตลอดปี ออกผลกินจนอิ่มไปเลยจ้า ปีนึงออกผลทุก 3 เดือน ...",
  tag: ["seasonal"],
  farm: "สวนลุงชัย",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec ac odio. Volutpat ac tincidunt vitae semper quis lectus nulla. Arcu ac tortor dignissim convallis aenean et. Id porta nibh venenatis cras sed felis eget velit aliquet.",
  farmerImage: "/images/farmer.webp",
  farmerImageCaption: "ลุงชัย"
};

// PRODUCTS 

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
}

interface ProductsInterface {
  [id: string]: ProductInterface
}

export const mockProducts: ProductsInterface = {
  "0": mockProduct,
  "1": mockProduct,
  "2": mockProduct
};