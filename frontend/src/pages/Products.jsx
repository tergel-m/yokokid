import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

function Products() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const products = [
    { id: 1, name: 'Хүүхдийн Пүүз', price: 145000, category: 'sport', image: 'https://m.media-amazon.com/images/I/71QqRAciR3L._AC_UY900_.jpg', size: [22, 23, 24, 25, 26] },
    { id: 2, name: 'Хүүхдийн Пүүз', price: 75000, category: 'casual', image: 'https://www.okabashi.com/cdn/shop/products/toddler-carter-camp-shoes-kiwi-green-5-366423.jpg?v=1686664925&width=1080', size: [20, 21, 22, 23, 24] },
    { id: 3, name: 'Хүүхдийн Пүүз', price: 125000, category: 'winter', image: 'https://img.joomcdn.net/effd185d33413c8596677f687c1445676d53771a_original.jpeg', size: [24, 25, 26, 27] },
    { id: 4, name: 'Хүүхдийн Пүүз', price: 225000, category: 'slipper', image: 'https://onyc.in/cdn/shop/files/MC_2337_7c4c88e3-2ab0-48f4-b617-54b7744cbc8f.jpg?v=1739645792&width=2048', size: [18, 19, 20, 21, 22] },
    { id: 5, name: 'Хүүхдийн Пүүз', price: 82000, category: 'sport', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80', size: [22, 23, 24, 25] },
    { id: 6, name: 'Хүүхдийн Пүүз', price: 67000, category: 'casual', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80', size: [20, 21, 22, 23] },
    { id: 7, name: 'Хүүхдийн Пүүз', price: 86000, category: 'sport', image: 'https://abrosshoes.com/cdn/shop/files/Mojo_0000_GenerativeFill3.jpg?v=1756296291&width=2048', size: [23, 24, 25, 26] },
    { id: 8, name: 'Хүүхдийн Пүүз', price: 120000, category: 'slipper', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80', size: [18, 19, 20, 21] },
  ];

  const categories = [
    { value: 'all', label: 'Бүгд' },
    { value: 'sport', label: 'Спорт' },
    { value: 'running', label: 'Гүйлт' },
    { value: 'casual', label: 'Өдөр тутмын' },
    { value: 'formal', label: 'Албан ёсны' },
  ];

  const priceRanges = [
    { value: 'all', label: 'Бүх үнэ' },
    { value: '0-200000', label: '0 - 200,000₮' },
    { value: '200000-350000', label: '200,000 - 350,000₮' },
    { value: '350000-500000', label: '350,000 - 500,000₮' },
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    
    let priceMatch = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      priceMatch = product.price >= min && product.price <= max;
    }
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>Бүтээгдэхүүн</h1>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 dark:bg-black p-4 mb-6 border border-gray-100 dark:border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-2 text-black dark:text-white uppercase">Ангилал</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 dark:border-white dark:bg-black dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-black dark:focus:border-white bg-white"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold mb-2 text-black dark:text-white uppercase">Үнийн хүрээ</label>
              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full border border-gray-300 dark:border-white dark:bg-black dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-black dark:focus:border-white bg-white"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white dark:bg-black hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-white relative">
              <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold z-10">Sale</div>
              
              {/* Wishlist Button */}
              <button
                onClick={() => {
                  if (isInWishlist(product.id)) {
                    removeFromWishlist(product.id);
                  } else {
                    addToWishlist(product);
                  }
                }}
                className="absolute top-2 right-2 z-10 bg-white dark:bg-black border border-gray-300 dark:border-white p-2 hover:bg-gray-100 dark:hover:bg-white dark:hover:border-black transition"
              >
                <svg 
                  className={`w-5 h-5 ${isInWishlist(product.id) ? 'text-red-500 fill-current' : 'text-black dark:text-white'}`} 
                  fill={isInWishlist(product.id) ? 'currentColor' : 'none'} 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              <div className="relative overflow-hidden aspect-square bg-gray-50 dark:bg-black">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-bold mb-1 text-black dark:text-white truncate" style={{fontFamily: 'Montserrat, sans-serif'}}>{product.name}</h3>
                <p className="text-xs text-gray-500 dark:text-white mb-2">
                  Size: {product.size.join(', ')}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-black dark:text-white">
                    {product.price.toLocaleString()}₮
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 hover:bg-gray-800 dark:hover:bg-gray-200 transition font-bold text-xs uppercase"
                  >
                    VIEW
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-black">
            <div className="text-6xl mb-4">😢</div>
            <p className="text-gray-600 dark:text-white text-lg font-bold">Бүтээгдэхүүн олдсонгүй</p>
            <p className="text-gray-400 dark:text-white text-sm mt-2">Өөр төрөл эсвэл үнийн хүрээ сонгоод үзнэ үү</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;

