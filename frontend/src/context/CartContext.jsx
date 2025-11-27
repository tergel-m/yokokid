import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === product.selectedSize);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (productId, size) => {
    setCart(prev => prev.filter(item => !(item.id === productId && item.selectedSize === size)));
  };

  const updateQuantity = (productId, size, quantity) => {
    setCart(prev =>
      prev.map(item =>
        item.id === productId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code) => {
    // Simulate coupon validation
    const coupons = {
      'SALE10': { discount: 10, type: 'percentage' },
      'FLAT5000': { discount: 5000, type: 'fixed' }
    };
    
    if (coupons[code]) {
      setCoupon(coupons[code]);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setCoupon(null);
  };

  const getTotal = () => {
    const subtotal = cart.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return sum + (price * item.quantity);
    }, 0);

    let discount = 0;
    if (coupon) {
      if (coupon.type === 'percentage') {
        discount = subtotal * (coupon.discount / 100);
      } else {
        discount = coupon.discount;
      }
    }

    return {
      subtotal,
      discount,
      total: subtotal - discount
    };
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      coupon,
      applyCoupon,
      removeCoupon,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
