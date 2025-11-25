import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="hover:text-gray-600 transition">
            <div className="flex items-center">
              <span className="text-3xl font-black italic tracking-tight" style={{fontFamily: 'Montserrat, sans-serif', fontStyle: 'italic'}}>
                МИША
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-600 transition text-xs font-bold uppercase tracking-widest">Нүүр</Link>
            <Link to="/products" className="hover:text-gray-600 transition text-xs font-bold uppercase tracking-widest">Бүтээгдэхүүн</Link>
            <Link to="/about" className="hover:text-gray-600 transition text-xs font-bold uppercase tracking-widest">Тухай</Link>
            <Link to="/contact" className="hover:text-gray-600 transition text-xs font-bold uppercase tracking-widest">Холбоо</Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Search Icon */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link to="/cart" className="relative hover:text-gray-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 space-y-2">
            <Link 
              to="/" 
              className="block py-2 hover:bg-gray-50 text-xs font-bold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Нүүр
            </Link>
            <Link 
              to="/products" 
              className="block py-2 hover:bg-gray-50 text-xs font-bold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Бүтээгдэхүүн
            </Link>
            <Link 
              to="/about" 
              className="block py-2 hover:bg-gray-50 text-xs font-bold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Тухай
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 hover:bg-gray-50 text-xs font-bold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Холбоо
            </Link>
          </div>
        )}

        {/* Search Bar - Full Width Below Nav */}
        {searchOpen && (
          <div className="py-4 border-t border-gray-200 animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Хайх..."
                className="w-full border border-gray-300 px-4 py-3 pr-10 text-sm focus:outline-none focus:border-black"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
