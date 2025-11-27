import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({ ...product, selectedSize: '20', quantity: 1 });
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <svg className="w-32 h-32 mx-auto mb-8 text-gray-300 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h1 className="text-3xl font-bold mb-4 dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
            {t('wishlist')}
          </h1>
          <p className="text-gray-600 dark:text-white mb-8">Таны хадгалсан бүтээгдэхүүн байхгүй байна</p>
          <Link
            to="/products"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 uppercase text-sm tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200"
            style={{fontFamily: 'Montserrat, sans-serif'}}
          >
            {t('products')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
          {t('wishlist')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white dark:bg-black border border-gray-200 dark:border-white group relative">
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="text-sm mb-2 dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {product.name}
                </h3>
                <p className="text-lg font-bold mb-4 dark:text-white">{product.price}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-xs uppercase hover:bg-gray-800 dark:hover:bg-gray-200"
                    style={{fontFamily: 'Montserrat, sans-serif'}}
                  >
                    {t('addToCart')}
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="px-4 py-2 border border-gray-300 dark:border-white hover:border-black dark:hover:border-white dark:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;

