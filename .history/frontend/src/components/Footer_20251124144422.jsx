function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShoeStore</h3>
            <p className="text-gray-400">Чанартай гутал таны сонголт</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Холбоосууд</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">Бидний тухай</a></li>
              <li><a href="/products" className="hover:text-white transition">Бүтээгдэхүүн</a></li>
              <li><a href="/contact" className="hover:text-white transition">Холбоо барих</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Холбоо барих</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Утас: +976 1234-5678</li>
              <li>Email: info@shoestore.mn</li>
              <li>Хаяг: Улаанбаатар хот</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 ShoeStore. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
