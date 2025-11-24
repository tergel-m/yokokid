import { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const products = [
    { id: 1, name: 'Мишутка Пүүз', price: 35000, category: 'sport', image: 'https://cdn.pixabay.com/photo/2017/08/06/00/09/kids-shoes-2583185_1280.jpg', size: [22, 23, 24, 25, 26] },
    { id: 2, name: 'Өнгөлөг Сандаал', price: 25000, category: 'casual', image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/baby-shoes-1867376_1280.jpg', size: [20, 21, 22, 23, 24] },
    { id: 3, name: 'Хөөрхөн Гутал', price: 40000, category: 'winter', image: 'https://cdn.pixabay.com/photo/2017/08/06/00/09/kids-shoes-2583186_1280.jpg', size: [24, 25, 26, 27] },
    { id: 4, name: 'Тоглоомон Улавч', price: 18000, category: 'slipper', image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/baby-shoes-1867377_1280.jpg', size: [18, 19, 20, 21, 22] },
    { id: 5, name: 'Цэцгэн Пүүз', price: 32000, category: 'sport', image: 'https://cdn.pixabay.com/photo/2017/08/06/00/09/kids-shoes-2583187_1280.jpg', size: [22, 23, 24, 25] },
    { id: 6, name: 'Хүүхдийн Сандаал', price: 27000, category: 'casual', image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/baby-shoes-1867378_1280.jpg', size: [20, 21, 22, 23] },
    { id: 7, name: 'Хөөрхөн Пүүз', price: 36000, category: 'sport', image: 'https://cdn.pixabay.com/photo/2017/08/06/00/09/kids-shoes-2583189_1280.jpg', size: [23, 24, 25, 26] },
    { id: 8, name: 'Зөөлөн Улавч', price: 21000, category: 'slipper', image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/baby-shoes-1867375_1280.jpg', size: [18, 19, 20, 21] },
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Бүтээгдэхүүн</h1>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Ангилал</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Үнийн хүрээ</label>
              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Хэмжээ: {product.size.join(', ')}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">
                    {product.price.toLocaleString()}₮
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                  >
                    Харах
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Бүтээгдэхүүн олдсонгүй</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
