import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

function QuickView({ product, onClose }) {
  const { t } = useLanguage();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('20');
  const [quantity, setQuantity] = useState(1);
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      quantity
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white dark:bg-black max-w-4xl w-full p-8 relative max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
              {product.name}
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-white">(4.5)</span>
            </div>
            <p className="text-3xl font-bold mb-6 dark:text-white">{product.price}</p>
            
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider mb-2 dark:text-white font-bold">{t('size')}</label>
              <div className="flex gap-2 flex-wrap">
                {['18', '19', '20', '21', '22', '23', '24'].map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border ${selectedSize === size ? 'border-2 border-black dark:border-white' : 'border-gray-300 dark:border-white'} hover:border-black dark:hover:border-white dark:text-white`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider mb-2 dark:text-white font-bold">{t('quantity')}</label>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 dark:border-white hover:border-black dark:hover:border-white dark:text-white"
                >
                  -
                </button>
                <span className="text-lg font-bold dark:text-white">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 dark:border-white hover:border-black dark:hover:border-white dark:text-white"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black dark:bg-white text-white dark:text-black px-6 py-3 uppercase text-sm tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 font-bold"
                style={{fontFamily: 'Montserrat, sans-serif'}}
              >
                {t('addToCart')}
              </button>
              <button
                onClick={handleWishlistToggle}
                className={`px-6 py-3 border ${inWishlist ? 'border-red-500 text-red-500' : 'border-gray-300 dark:border-white dark:text-white'}`}
              >
                <svg className="w-6 h-6" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickView;

