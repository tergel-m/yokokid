import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition">
            <div className="flex items-center">
              <span className="text-3xl font-black italic tracking-tight" style={{fontFamily: 'Montserrat, sans-serif', fontStyle: 'italic'}}>
                МИША
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition text-xs font-bold uppercase tracking-widest">{t('home')}</Link>
            <Link to="/products" className="hover:text-gray-600 dark:hover:text-gray-300 transition text-xs font-bold uppercase tracking-widest">{t('products')}</Link>
            <Link to="/about" className="hover:text-gray-600 dark:hover:text-gray-300 transition text-xs font-bold uppercase tracking-widest">{t('about')}</Link>
            <Link to="/contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition text-xs font-bold uppercase tracking-widest">{t('contact')}</Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button 
              onClick={() => setLanguage(language === 'mn' ? 'en' : 'mn')}
              className="hidden md:block text-xs font-bold hover:text-gray-600 dark:hover:text-gray-300"
            >
              {language === 'mn' ? 'EN' : 'MN'}
            </button>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="hidden md:block hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover:text-gray-600 dark:hover:text-gray-300 transition"
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
              className="hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative hover:text-gray-600 dark:hover:text-gray-300 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative hover:text-gray-600 dark:hover:text-gray-300 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* User Profile/Login */}
            <Link to={user ? "/profile" : "/login"} className="hover:text-gray-600 dark:hover:text-gray-300 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
            <Link 
              to="/" 
              className="block py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-bold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              to="/products" 
              className="block py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-bold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('products')}
            </Link>
            <Link 
              to="/about" 
              className="block py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-bold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-bold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            <div className="flex gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={toggleTheme}
                className="text-xs font-bold uppercase"
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
              <button 
                onClick={() => setLanguage(language === 'mn' ? 'en' : 'mn')}
                className="text-xs font-bold uppercase"
              >
                {language === 'mn' ? 'EN' : 'MN'}
              </button>
            </div>
          </div>
        )}

        {/* Search Bar - Full Width Below Nav */}
        {searchOpen && (
          <div className="py-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('search')}
                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-4 py-3 pr-10 text-sm focus:outline-none focus:border-black dark:focus:border-white"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black dark:hover:text-white"
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
