import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Nike Air Max 270',
      price: 350000,
      size: 42,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200'
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      price: 420000,
      size: 43,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 10000;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white dark:bg-black py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-black mb-6 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>Сагс</h1>

        {cartItems.length === 0 ? (
          <div className="bg-gray-50 dark:bg-black p-16 text-center border border-gray-100 dark:border-white">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-lg font-bold text-black dark:text-white mb-3">Таны сагс хоосон байна</h2>
            <p className="text-gray-500 dark:text-white text-sm mb-6">Гоё гутлууд таныг хүлээж байна!</p>
            <Link to="/products" className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition inline-block font-bold text-sm uppercase tracking-widest">
              Дэлгүүр үзэх
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-white">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center p-4 border-b last:border-b-0 dark:border-white hover:bg-gray-50 dark:hover:bg-black transition">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover bg-gray-50 dark:bg-black"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-sm font-bold mb-1 text-black dark:text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>{item.name}</h3>
                      <p className="text-gray-500 dark:text-white text-xs mb-1">Size: {item.size}</p>
                      <p className="text-black dark:text-white font-bold text-sm">{item.price.toLocaleString()}₮</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border border-gray-300 dark:border-white">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black text-xs font-bold dark:text-white"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border-x dark:border-white text-xs font-bold dark:text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black text-xs font-bold dark:text-white"
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-white p-6 sticky top-4">
                <h2 className="text-lg font-black mb-4 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>Захиалгын дүн</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-600 dark:text-white text-sm">
                    <span>Нийт дүн:</span>
                    <span>{subtotal.toLocaleString()}₮</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-white text-sm">
                    <span>Хүргэлт:</span>
                    <span>{shipping.toLocaleString()}₮</span>
                  </div>
                  <div className="border-t dark:border-white pt-2 mt-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="dark:text-white">Нийт төлөх:</span>
                      <span className="text-black dark:text-white">{total.toLocaleString()}₮</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/checkout"
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-3 font-bold text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition block text-center uppercase tracking-widest"
                >
                  Төлбөр төлөх
                </Link>

                <Link 
                  to="/products"
                  className="w-full mt-3 border border-gray-300 dark:border-white text-black dark:text-white py-3 font-bold text-sm hover:bg-gray-50 dark:hover:bg-white dark:hover:text-black transition block text-center uppercase tracking-widest"
                >
                  Үргэлжлүүлэх
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
