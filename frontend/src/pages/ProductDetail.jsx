import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock data - хожим backend-ээс авна
  const product = {
    id: parseInt(id),
    name: 'Nike Air Max 270',
    price: 350000,
    description: 'Nike Air Max 270 нь орчин үеийн загвартай, тав тухтай спорт гутал юм. Өдөр тутмын хэрэглээнд тохиромжтой, чанартай материалаар хийгдсэн.',
    category: 'Спорт гутал',
    brand: 'Nike',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800',
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800'
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ['Хар', 'Цагаан', 'Саарал'],
    inStock: true,
    rating: 4.5,
    reviews: 128
  };

  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Хэмжээ сонгоно уу!');
      return;
    }
    // Сагсанд нэмэх логик
    alert(`${product.name} - Хэмжээ: ${selectedSize}, Тоо: ${quantity} сагсанд нэмэгдлээ!`);
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-xs text-gray-600">
          <Link to="/" className="hover:text-black">Нүүр</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-black">Бүтээгдэхүүн</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </div>

        <div className="bg-white border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div>
              <div className="mb-4 relative">
                <img 
                  src={selectedImage} 
                  alt={product.name}
                  className="w-full h-96 object-cover bg-gray-50"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    onClick={() => setSelectedImage(img)}
                    className={`w-full h-24 object-cover cursor-pointer bg-gray-50 transition ${
                      selectedImage === img ? 'border-2 border-black' : 'border border-gray-200 hover:border-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-black mb-4 text-black uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600 text-xs">({product.reviews} үнэлгээ)</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-black mb-6">
                {product.price.toLocaleString()}₮
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-xs text-gray-600 mb-2">
                  <span className="font-bold uppercase">Брэнд:</span> {product.brand}
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <span className="font-bold uppercase">Ангилал:</span> {product.category}
                </p>
                <p className="text-xs mb-2">
                  <span className={`font-bold uppercase ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'Нөөцөд байгаа' : 'Нөөцөд алга'}
                  </span>
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold mb-3 text-black uppercase">Хэмжээ сонгох</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border text-sm font-bold transition ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-black bg-white text-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-xs font-bold mb-3 text-black uppercase">Тоо ширхэг</label>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border border-gray-300 hover:border-black font-bold text-sm transition"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold text-black">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border border-gray-300 hover:border-black font-bold text-sm transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-black text-white py-3 text-sm font-bold hover:bg-gray-800 transition uppercase tracking-widest disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Сагсанд нэмэх
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-8 bg-white border border-gray-200 p-6">
          <h2 className="text-lg font-black mb-4 text-black uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>Дэлгэрэнгүй мэдээлэл</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold mb-2 uppercase">Онцлог</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Амьсгалах чадвартай материал</li>
                <li>Тав тухтай ултай</li>
                <li>Бат бөх гутлын ул</li>
                <li>Орчин үеийн загвар</li>
                <li>Өдөр тутмын хэрэглээнд тохиромжтой</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-2 uppercase">Арчилгаа, хадгалалт</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Зөөлөн даавуугаар цэвэрлэнэ</li>
                <li>Шууд нарны гэрлээс хол байлгах</li>
                <li>Хуурай газар хадгална</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
