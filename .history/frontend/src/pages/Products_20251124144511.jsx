import { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const products = [
    { id: 1, name: 'Nike Air Max 270', price: 350000, category: 'sport', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', size: [39, 40, 41, 42, 43] },
    { id: 2, name: 'Adidas Ultraboost', price: 420000, category: 'running', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500', size: [40, 41, 42, 43, 44] },
    { id: 3, name: 'Classic Leather Boot', price: 280000, category: 'casual', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500', size: [39, 40, 41, 42] },
    { id: 4, name: 'Casual Sneakers', price: 180000, category: 'casual', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500', size: [38, 39, 40, 41, 42] },
    { id: 5, name: 'Running Shoes Pro', price: 390000, category: 'running', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500', size: [40, 41, 42, 43, 44, 45] },
    { id: 6, name: 'Basketball High Tops', price: 450000, category: 'sport', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500', size: [41, 42, 43, 44, 45] },
    { id: 7, name: 'Formal Oxford', price: 320000, category: 'formal', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500', size: [39, 40, 41, 42, 43] },
    { id: 8, name: 'Slip-on Loafers', price: 220000, category: 'casual', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500', size: [38, 39, 40, 41, 42] },
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
