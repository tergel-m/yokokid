import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

function Home() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const featuredProducts = [
    {
      id: 1,
      name: 'Өнгөлөг Гялбаатай Пүүз',
      price: '89,000₮',
      image: 'https://abrosshoes.com/cdn/shop/files/Mojo_0008_GenerativeFill2.jpg?v=1756296292&width=1600',
      badge: '🌟 Шинэ'
    },
    {
      id: 2,
      name: 'Зөөлөн Гутал Хүүхдэд',
      price: '65,000₮',
      image: 'https://abrosshoes.com/cdn/shop/files/Bumble_0010_DSC_9007.jpg?v=1756296286&width=1600',
      badge: '❤️ Дуртай'
    },
    {
      id: 3,
      name: 'Спорт Пүүз Хөнгөн',
      price: '75,000₮',
      image: 'https://abrosshoes.com/cdn/shop/files/Bosko_0000_GenerativeFill2.jpg?v=1756296220&width=2048',
      badge: '🔥 Хит'
    },
    {
      id: 4,
      name: 'Хүүхдийн Кроссовк',
      price: '95,000₮',
      image: 'https://abrosshoes.com/cdn/shop/files/Oreo_0000_DSC_9475.jpg?crop=center&height=1200&v=1756296294&width=1200',
      badge: '🌟 Шинэ'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section with Animation */}
      <section className="relative overflow-hidden bg-white dark:bg-black py-20 border-b border-gray-100 dark:border-white">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-6xl mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-black italic mb-4 text-black dark:text-white uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif', fontStyle: 'italic'}}>
            МИША Kids Shoes
          </h1>
          <p className="text-base mb-8 text-gray-600 dark:text-white max-w-2xl mx-auto">
            Хүүхдэд зориулсан спорт болон амьдралын хэв маягийн гутал
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 uppercase tracking-widest"
          >
            ДЭЛГҮҮР ҮЗЭХ
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white dark:bg-black border border-gray-100 dark:border-white">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-sm font-bold mb-2 text-black dark:text-white uppercase tracking-wider">Хурдан Хүргэлт</h3>
              <p className="text-gray-600 dark:text-white text-xs">Бүх захиалгыг 24 цагт хүргэнэ</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-black border border-gray-100 dark:border-white">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-sm font-bold mb-2 text-black dark:text-white uppercase tracking-wider">Премиум Чанар</h3>
              <p className="text-gray-600 dark:text-white text-xs">100% баталгаатай бүтээгдэхүүн</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-black border border-gray-100 dark:border-white">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-sm font-bold mb-2 text-black dark:text-white uppercase tracking-wider">Онцгой Санал</h3>
              <p className="text-gray-600 dark:text-white text-xs">Онцгой хөнгөлөлт, бэлэг</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Hot Sale
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="group relative bg-white dark:bg-black hover:shadow-md transition-shadow duration-300"
              >
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold z-10">Sale</div>
                
                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
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

                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden aspect-square bg-gray-50 dark:bg-black">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-bold mb-1 text-black dark:text-white truncate" style={{fontFamily: 'Montserrat, sans-serif'}}>
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold text-black dark:text-white">{product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-3 uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
            JOIN МИША FAMILY
          </h2>
          <p className="text-sm mb-6 text-gray-400 max-w-xl mx-auto">
            Бүртгүүлээд шинэ бүтээгдэхүүн болон онцгой саналуудын талаар мэдээлэл аваарай
          </p>
          <Link 
            to="/products"
            className="inline-block bg-white text-black px-8 py-3 text-sm font-bold hover:bg-gray-200 transition duration-300 uppercase tracking-widest"
          >
            JOIN NOW
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
