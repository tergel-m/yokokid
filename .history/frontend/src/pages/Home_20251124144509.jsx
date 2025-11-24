import { Link } from 'react-router-dom';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Nike Air Max',
      price: 350000,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      category: 'Спорт гутал'
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      price: 420000,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
      category: 'Гүйлтийн гутал'
    },
    {
      id: 3,
      name: 'Classic Leather',
      price: 280000,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      category: 'Арьсан гутал'
    },
    {
      id: 4,
      name: 'Casual Sneakers',
      price: 180000,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500',
      category: 'Өдөр тутмын'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Шинэ жилийн онцгой санал</h1>
            <p className="text-xl mb-8">Чанартай гутлын өргөн сонголт таныг хүлээж байна</p>
            <Link 
              to="/products" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Дэлгүүр үзэх
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Онцлох бүтээгдэхүүн</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">
                      {product.price.toLocaleString()}₮
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Дэлгэрэнгүй
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Чанартай бүтээгдэхүүн</h3>
              <p className="text-gray-600">100% жинхэнэ брэнд бүтээгдэхүүн</p>
            </div>

            <div className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Хурдан хүргэлт</h3>
              <p className="text-gray-600">УБ хотод 1-2 өдөрт хүргэнэ</p>
            </div>

            <div className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Найдвартай төлбөр</h3>
              <p className="text-gray-600">Төрөл бүрийн төлбөрийн хэлбэр</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
