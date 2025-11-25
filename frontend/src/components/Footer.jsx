function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-black mb-4 uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
              МИША
            </h3>
            <p className="text-gray-400 text-xs">Хүүхдийн спорт гутал</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-widest">KIDS SHOES</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/products" className="hover:text-white transition text-xs">Спорт Гутал</a></li>
              <li><a href="/products" className="hover:text-white transition text-xs">Амьдралын Хэв Маяг</a></li>
              <li><a href="/products" className="hover:text-white transition text-xs">Шинэ Бүтээгдэхүүн</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-widest">МИША</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition text-xs">Бидний тухай</a></li>
              <li><a href="/contact" className="hover:text-white transition text-xs">Холбоо барих</a></li>
              <li><a href="#" className="hover:text-white transition text-xs">Хэмжээний жагсаалт</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-widest">ХОЛБОО БАРИХ</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="text-xs">+976 9911-2233</li>
              <li className="text-xs">mishashop@kids.mn</li>
              <li className="text-xs">Улаанбаатар, Монгол</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p className="text-xs">&copy; 2025 Миша Kids Shoes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
