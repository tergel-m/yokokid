import { Link } from 'react-router-dom';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Мишутка Пүүз',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500',
      category: 'Хүүхдийн пүүз'
    },
    {
      id: 2,
      name: 'Өнгөлөг Сандаал',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500',
      category: 'Зуны сандаал'
    },
    {
      id: 3,
      name: 'Хөөрхөн Гутал',
      price: 40000,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500',
      category: 'Өвлийн гутал'
    },
    {
      id: 4,
      name: 'Тоглоомон Улавч',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=500',
      category: 'Тоглоомон улавч'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section className="bg-gradient-to-r from-pink-200 via-yellow-100 to-blue-100 text-pink-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-6 font-[Comic Sans MS,cursive] flex items-center gap-2">
              <span className="inline-block w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white text-3xl">🧸</span>
              Миша – Хүүхдийн гутлын дэлгүүр
            </h1>
            <p className="text-xl mb-8">Таны хүүхдэд зориулсан өнгөлөг, тав тухтай гутлын өргөн сонголт!</p>
            <Link 
              to="/products" 
              className="bg-pink-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-300 transition inline-block shadow"
            >
              Дэлгүүр үзэх
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
  <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-pink-500">Онцлох бүтээгдэхүүн</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition border-2 border-pink-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-56 object-cover bg-pink-50"
                />
                <div className="p-4">
                  <p className="text-xs text-pink-400 mb-1">{product.category}</p>
                  <h3 className="text-lg font-bold mb-2 text-pink-700 font-[Comic Sans MS,cursive]">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-yellow-500">
                      {product.price.toLocaleString()}₮
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-yellow-300 text-pink-700 px-4 py-2 rounded-full hover:bg-yellow-200 transition font-bold text-sm"
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
              <div className="bg-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧸</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-pink-700">Тав тухтай, аюулгүй</h3>
              <p className="text-pink-500">Хүүхдийн хөлд төгс тохирох, чанартай материал</p>
            </div>

            <div className="p-6">
              <div className="bg-pink-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌈</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-pink-700">Өнгөлөг, хөгжилтэй</h3>
              <p className="text-pink-500">Тоглоом шиг загвар, хүүхдэд таалагдах дизайн</p>
            </div>

            <div className="p-6">
              <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-pink-700">Хурдан хүргэлт</h3>
              <p className="text-pink-500">Улаанбаатар хотод 24 цагийн дотор</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
