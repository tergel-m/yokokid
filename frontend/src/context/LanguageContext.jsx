import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  mn: {
    // Navigation
    home: 'Нүүр',
    products: 'Бүтээгдэхүүн',
    about: 'Тухай',
    contact: 'Холбоо',
    cart: 'Сагс',
    wishlist: 'Хадгалсан',
    search: 'Хайх...',
    
    // Actions
    addToCart: 'Сагсанд нэмэх',
    addToWishlist: 'Хадгалах',
    removeFromWishlist: 'Хасах',
    viewStore: 'ДЭЛГҮҮР ҮЗЭХ',
    joinNow: 'JOIN NOW',
    sale: 'Sale',
    
    // Product Info
    price: 'Үнэ',
    size: 'Хэмжээ',
    quantity: 'Тоо ширхэг',
    total: 'Нийт',
    hotSale: 'Hot Sale',
    
    // Checkout
    checkout: 'Төлбөр төлөх',
    subtotal: 'Дүн',
    discount: 'Хөнгөлөлт',
    shipping: 'Хүргэлт',
    
    // Reviews
    reviews: 'Сэтгэгдэл',
    rating: 'Үнэлгээ',
    writeReview: 'Сэтгэгдэл бичих',
    
    // Auth
    login: 'Нэвтрэх',
    register: 'Бүртгүүлэх',
    profile: 'Профайл',
    logout: 'Гарах',
    name: 'Нэр',
    email: 'Имэйл',
    password: 'Нууц үг',
    
    // User
    orders: 'Захиалгууд',
    orderHistory: 'Захиалгын түүх',
    address: 'Хаяг',
    phone: 'Утас',
    
    // Misc
    coupon: 'Купон код',
    apply: 'Ашиглах',
    quickView: 'Шуурхай үзэх',
    
    // Home Page
    heroTitle: 'МИША Kids Shoes',
    heroSubtitle: 'Хүүхдэд зориулсан спорт болон амьдралын хэв маягийн гутал',
    fastDelivery: 'Хурдан Хүргэлт',
    fastDeliveryDesc: 'Бүх захиалгыг 24 цагт хүргэнэ',
    premiumQuality: 'Премиум Чанар',
    premiumQualityDesc: '100% баталгаатай бүтээгдэхүүн',
    specialOffer: 'Онцгой Санал',
    specialOfferDesc: 'Онцгой хөнгөлөлт, бэлэг',
    joinFamily: 'JOIN МИША FAMILY',
    joinFamilyDesc: 'Бүртгүүлээд шинэ бүтээгдэхүүн болон онцгой саналуудын талаар мэдээлэл аваарай',
    
    // About Page
    aboutTitle: 'МИША Kids Shoes',
    aboutSubtitle: 'Хүүхдийн гутлын салбарт тэргүүлэгч брэнд',
    ourStory: 'Бидний түүх',
    ourStoryText1: 'МИША нь 2020 онд байгуулагдсан бөгөөд хүүхдэд зориулсан чанартай, найдвартай гутал нийлүүлэх зорилготой. Бид хүүхдийн эрүүл мэнд, аюулгүй байдлыг хамгийн тэргүүнд тавьдаг.',
    ourStoryText2: 'Манай бүтээгдэхүүн бүр дэлхийн стандартад нийцсэн, эко найрсаг материалаар хийгдсэн бөгөөд хүүхдийн хөлний хөгжилд тусалдаг.',
    ourValues: 'Бидний үнэт зүйлс',
    quality: 'Чанар',
    qualityDesc: 'Дэлхийн стандартад нийцсэн чанартай материал ашиглана',
    kidsHealth: 'Хүүхдийн эрүүл мэнд',
    kidsHealthDesc: 'Хүүхдийн хөлний зөв хөгжилд анхаарал хандуулна',
    service: 'Үйлчилгээ',
    serviceDesc: 'Үйлчлүүлэгч бүрд хамгийн сайн үйлчилгээ үзүүлнэ',
    customers: 'Үйлчлүүлэгч',
    productsCount: 'Бүтээгдэхүүн',
    ratingScore: 'Үнэлгээ',
    support: 'Дэмжлэг',
    mission: 'Эрхэм зорилго',
    missionText1: 'Хүүхэд бүрт чанартай, эрүүл мэндэд ээлтэй гутал хүргэж, тэдний идэвхтэй амьдралд дэмжлэг үзүүлэх.',
    missionText2: 'Бид хүүхдийн хөлний зөв хөгжил, эрүүл мэндийг хамгаалах замаар тэдний ирээдүйд хувь нэмэр оруулахыг эрмэлздэг.',
    vision: 'Алсын хараа',
    visionText1: 'Монгол дахь хүүхдийн гутлын салбарт тэргүүлэгч брэнд болж, дэлхийн зах зээлд гарах.',
    visionText2: 'Инновацийн технологи, орчин үеийн загвар, эко найрсаг материалыг хослуулан хүүхдэд хамгийн сайн бүтээгдэхүүн санал болгох.',
    ourTeam: 'Манай баг',
    ourTeamDesc: 'Хүүхдийн гутлын дизайн, үйлдвэрлэл, борлуулалтын чиглэлээр 10+ жилийн туршлагатай мэргэжилтнүүд',
    ceo: 'Гүйцэтгэх захирал',
    designer: 'Дизайнер',
    salesManager: 'Борлуулалтын менежер',
    joinUs: 'Бидэнтэй нэгдээрэй',
    joinUsDesc: 'МИША гэр бүлийн нэг хэсэг болж, хүүхдийнхээ эрүүл мэнд, аюулгүй байдалд анхаарал тавь'
  },
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    cart: 'Cart',
    wishlist: 'Wishlist',
    search: 'Search...',
    
    // Actions
    addToCart: 'Add to Cart',
    addToWishlist: 'Add to Wishlist',
    removeFromWishlist: 'Remove',
    viewStore: 'VIEW STORE',
    joinNow: 'JOIN NOW',
    sale: 'Sale',
    
    // Product Info
    price: 'Price',
    size: 'Size',
    quantity: 'Quantity',
    total: 'Total',
    hotSale: 'Hot Sale',
    
    // Checkout
    checkout: 'Checkout',
    subtotal: 'Subtotal',
    discount: 'Discount',
    shipping: 'Shipping',
    
    // Reviews
    reviews: 'Reviews',
    rating: 'Rating',
    writeReview: 'Write a Review',
    
    // Auth
    login: 'Login',
    register: 'Register',
    profile: 'Profile',
    logout: 'Logout',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    
    // User
    orders: 'Orders',
    orderHistory: 'Order History',
    address: 'Address',
    phone: 'Phone',
    
    // Misc
    coupon: 'Coupon Code',
    apply: 'Apply',
    quickView: 'Quick View',
    
    // Home Page
    heroTitle: 'MISHA Kids Shoes',
    heroSubtitle: 'Sports and lifestyle shoes for children',
    fastDelivery: 'Fast Delivery',
    fastDeliveryDesc: 'All orders delivered within 24 hours',
    premiumQuality: 'Premium Quality',
    premiumQualityDesc: '100% guaranteed products',
    specialOffer: 'Special Offer',
    specialOfferDesc: 'Special discounts and gifts',
    joinFamily: 'JOIN MISHA FAMILY',
    joinFamilyDesc: 'Register to get updates on new products and special offers',
    
    // About Page
    aboutTitle: 'MISHA Kids Shoes',
    aboutSubtitle: 'Leading brand in children\'s footwear',
    ourStory: 'Our Story',
    ourStoryText1: 'MISHA was founded in 2020 with the goal of providing quality, reliable shoes for children. We prioritize children\'s health and safety above all.',
    ourStoryText2: 'Each of our products is made with eco-friendly materials that meet international standards and support children\'s foot development.',
    ourValues: 'Our Values',
    quality: 'Quality',
    qualityDesc: 'Using quality materials that meet international standards',
    kidsHealth: 'Children\'s Health',
    kidsHealthDesc: 'Focusing on proper foot development for children',
    service: 'Service',
    serviceDesc: 'Providing the best service to every customer',
    customers: 'Customers',
    productsCount: 'Products',
    ratingScore: 'Rating',
    support: 'Support',
    mission: 'Mission',
    missionText1: 'To provide quality, health-friendly shoes to every child and support their active lifestyle.',
    missionText2: 'We aim to contribute to children\'s future by protecting their foot development and health.',
    vision: 'Vision',
    visionText1: 'To become the leading brand in children\'s footwear in Mongolia and enter the global market.',
    visionText2: 'To offer the best products to children by combining innovative technology, modern design, and eco-friendly materials.',
    ourTeam: 'Our Team',
    ourTeamDesc: 'Professionals with 10+ years of experience in children\'s shoe design, production, and sales',
    ceo: 'CEO',
    designer: 'Designer',
    salesManager: 'Sales Manager',
    joinUs: 'Join Us',
    joinUsDesc: 'Become part of the MISHA family and pay attention to your child\'s health and safety'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'mn';
  });

  const t = (key) => translations[language][key] || key;

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
