import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  mn: {
    home: 'Нүүр',
    products: 'Бүтээгдэхүүн',
    about: 'Тухай',
    contact: 'Холбоо',
    cart: 'Сагс',
    wishlist: 'Хадгалсан',
    search: 'Хайх...',
    addToCart: 'Сагсанд нэмэх',
    addToWishlist: 'Хадгалах',
    removeFromWishlist: 'Хасах',
    price: 'Үнэ',
    size: 'Хэмжээ',
    quantity: 'Тоо ширхэг',
    total: 'Нийт',
    checkout: 'Төлбөр төлөх',
    reviews: 'Сэтгэгдэл',
    rating: 'Үнэлгээ',
    writeReview: 'Сэтгэгдэл бичих',
    login: 'Нэвтрэх',
    register: 'Бүртгүүлэх',
    profile: 'Профайл',
    orders: 'Захиалгууд',
    coupon: 'Купон код',
    apply: 'Ашиглах',
    sale: 'Хямдрал',
    name: 'Нэр',
    email: 'Имэйл',
    password: 'Нууц үг',
    address: 'Хаяг',
    phone: 'Утас',
    orderHistory: 'Захиалгын түүх',
    logout: 'Гарах',
    subtotal: 'Дүн',
    discount: 'Хөнгөлөлт',
    shipping: 'Хүргэлт',
    quickView: 'Шуурхай үзэх'
  },
  en: {
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    cart: 'Cart',
    wishlist: 'Wishlist',
    search: 'Search...',
    addToCart: 'Add to Cart',
    addToWishlist: 'Add to Wishlist',
    removeFromWishlist: 'Remove',
    price: 'Price',
    size: 'Size',
    quantity: 'Quantity',
    total: 'Total',
    checkout: 'Checkout',
    reviews: 'Reviews',
    rating: 'Rating',
    writeReview: 'Write a Review',
    login: 'Login',
    register: 'Register',
    profile: 'Profile',
    orders: 'Orders',
    coupon: 'Coupon Code',
    apply: 'Apply',
    sale: 'Sale',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    address: 'Address',
    phone: 'Phone',
    orderHistory: 'Order History',
    logout: 'Logout',
    subtotal: 'Subtotal',
    discount: 'Discount',
    shipping: 'Shipping',
    quickView: 'Quick View'
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
