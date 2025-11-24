function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-200 via-yellow-100 to-blue-100 text-pink-700 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-2 font-[Comic Sans MS,cursive]">
              <span className="inline-block w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl">👟</span>
              Миша
            </h3>
            <p className="text-pink-500">Хүүхдийн гутлын дэлгүүр – инээмсэглэл, тав тухыг хамтад нь</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Холбоосууд</h4>
            <ul className="space-y-2 text-pink-500">
              <li><a href="/about" className="hover:text-white transition">Бидний тухай</a></li>
              <li><a href="/products" className="hover:text-white transition">Бүтээгдэхүүн</a></li>
              <li><a href="/contact" className="hover:text-white transition">Холбоо барих</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Холбоо барих</h4>
            <ul className="space-y-2 text-pink-500">
              <li>Утас: +976 9911-2233</li>
              <li>Email: mishashop@kids.mn</li>
              <li>Хаяг: Улаанбаатар хот</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-pink-200 mt-8 pt-6 text-center text-pink-400">
          <p>&copy; 2025 Миша. Хүүхдийн гутлын дэлгүүр. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
