export const RESTAURANT_CONFIG = {
  name: "كريف برجر",
  phone: "201000000000",
  currency: "ج.م",
  deliveryTime: "30-45",
  deliveryFee: 15,
};

export const CATEGORIES = [
  { id: "all", name: "الكل", icon: "🍽️" },
  { id: "offers", name: "عروض التوفير", icon: "🔥" },
  { id: "burgers", name: "برجر", icon: "🍔" },
  { id: "chicken", name: "فرايد تشيكن", icon: "🍗" },
  { id: "shawarma", name: "شاورما", icon: "🌯" },
  { id: "sides", name: "أطباق جانبية", icon: "🍟" },
  { id: "drinks", name: "مشروبات", icon: "🥤" },
];

export const MENU_ITEMS = [
  {
    id: "m1",
    name: "سماش برجر دبل",
    description: "شريحتين لحم بقري صافي، جبنة أمريكية، صوص كريف السري، مخلل، بصل مكرمل",
    price: 155,
    categoryId: "burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    badges: ["الأكثر مبيعاً"]
  },
  {
    id: "m2",
    name: "وجبة الديوان",
    description: "٣ قطع دجاج بروستد مقرمش، بطاطس، كول سلو، خبز، ومشروب غازي",
    price: 180,
    categoryId: "chicken",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
  {
    id: "m3",
    name: "شاورما دجاج عربي",
    description: "شاورما دجاج مقطعة، بطاطس، ثومية، مخلل، عيش صاج محمص",
    price: 120,
    categoryId: "shawarma",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m4",
    name: "ميكس تشيزي فرايز",
    description: "بطاطس مقرمشة مغطاة بصوص الشيدر الساخن، هالبينو، وقطع بيبروني",
    price: 75,
    categoryId: "sides",
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m5",
    name: "عرض الصحاب (بلاك دراجون)",
    description: "٢ برجر سنجل، ٢ شاورما سوري، بطاطس عائلي، ١ لتر كولا",
    price: 350,
    oldPrice: 420,
    categoryId: "offers",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    badges: ["خصم 15%"]
  },
  {
    id: "m6",
    name: "مايتي تشيكن زنجر",
    description: "قطعة صدر دجاج سبايسي، تركي مدخن، خس، جبنة، صوص رانش",
    price: 140,
    categoryId: "burgers",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m7",
    name: "صوص جبنة شيدر",
    description: "صوص جبنة شيدر غني وساخن إكسترا",
    price: 25,
    categoryId: "sides",
    image: "https://images.unsplash.com/photo-1544986581-eb8122a2bbcd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m8",
    name: "كوكاكولا كانز",
    description: "كانز ٣٣٠ مل بارد",
    price: 20,
    categoryId: "drinks",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
  }
];

export const REVIEWS = [
  { id: 1, name: "أحمد مصطفى", rating: 5, comment: "أحسن برجر جربته في التجمع، التوصيل جيه سخن وفي ميعاده بالظبط." },
  { id: 2, name: "سارة محمود", rating: 5, comment: "الباتي جيروسي جداً والجبنة سايحة، تجربة ممتازة وهكررها أكيد." },
  { id: 3, name: "كريم حسن", rating: 4, comment: "الأكل حلو والباكدجينج شيك، بس التوصيل اتأخر ١٠ دقايق." },
];
