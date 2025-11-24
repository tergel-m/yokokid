import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="bg-gradient-to-r from-pink-300 via-yellow-200 to-blue-200 text-pink-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-extrabold flex items-center gap-2 font-[Comic Sans MS,cursive]">
            <img src="https://yt3.googleusercontent.com/plbYMBlbSJHXOLEqCE4tCFPkw-WwoZ5y-oI4M1l5dljjOFMrQj9g_ZYTb5Fu8t_y8weRNR4iHQ=s900-c-k-c0x00ffffff-no-rj" alt="Bear" className="w-10 h-10 rounded-full bg-white border-2 border-pink-200 shadow" />
            Миша
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-pink-500 transition">Нүүр</Link>
            <Link to="/products" className="hover:text-pink-500 transition">Бүтээгдэхүүн</Link>
            <Link to="/about" className="hover:text-pink-500 transition">Бидний тухай</Link>
            <Link to="/contact" className="hover:text-pink-500 transition">Холбоо барих</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative hover:text-pink-500 transition">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-pink-700 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
