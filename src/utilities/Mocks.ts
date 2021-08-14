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
    image: "/images/farmer-1.webp",
    title: "ลุงพล",
    description: "มังคุด - recommend",
    linkTo: "farmers/1234"
  },
  {
    image: "/images/farmer-3.webp",
    title: "ป้าแต๋น",
    description: "มะม่วง - recommend",
    linkTo: "farmers/1234"
  },
  {
    image: "/images/farmer-2.webp",
    title: "ลุงเริง",
    description: "ส้มโอ - recommend",
    linkTo: "farmers/1234"
  },
];

// PRODUCT 

export const mockProduct: ProductInterface = {
  productId: "0",
  productImages: ["/images/watermelon.webp", "/images/watermelon.webp", "/images/watermelon.webp"],
  productName: "ต้นมังคุด",
  productBio: "ต้นมังคุดที่ผ่านการคัดเลือกจากพ่อแม่พันธุ์ชั้นดี สู่รุ่นลูกคุณภาพสูงขนาด 24 CM",
  tag: ["ยอดฮิต"],
  duration: 1,
  farm: "สวนลุงชัย",
  description: "“การดูเเลมังคุดเนี่ย สิ่งแรกที่ต้องคำนึงเลยคือเรื่องสภาพอากาศครับ เพราะมังคุดชอบอากาศร้อนชื้น ต้องพยายามไม่ให้...”",
  farmerImage: "/images/farmer.webp",
  farmerImageCaption: "ลุงชัย",
  totalPrice: 300,
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
  duration?: number;
  totalPrice: number;
}

interface ProductsInterface {
  [id: string]: ProductInterface
}

export const mockProducts: ProductsInterface = {
  "0": mockProduct,
  "1": mockProduct,
  "2": mockProduct
};
