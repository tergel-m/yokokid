function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 border-b border-gray-100 dark:border-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-black mb-6 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
              МИША Kids Shoes
            </h1>
            <p className="text-lg text-gray-600 dark:text-white mb-4">
              Хүүхдийн гутлын салбарт тэргүүлэгч брэнд
            </p>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-black mb-4 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Бидний түүх
                </h2>
                <p className="text-gray-600 dark:text-white mb-4 leading-relaxed">
                  МИША нь 2020 онд байгуулагдсан бөгөөд хүүхдэд зориулсан чанартай, найдвартай гутал нийлүүлэх зорилготой. Бид хүүхдийн эрүүл мэнд, аюулгүй байдлыг хамгийн тэргүүнд тавьдаг.
                </p>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Манай бүтээгдэхүүн бүр дэлхийн стандартад нийцсэн, эко найрсаг материалаар хийгдсэн бөгөөд хүүхдийн хөлний хөгжилд тусалдаг.
                </p>
              </div>
              <div className="aspect-square bg-gray-200 dark:bg-black flex items-center justify-center">
                <img 
                  src="https://img.freepik.com/free-photo/baby-shoes_1203-6837.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="Kids Shoes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-12 text-black dark:text-white uppercase text-center" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Бидний үнэт зүйлс
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-100 dark:border-white">
                <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✓
                </div>
                <h3 className="text-sm font-bold mb-3 uppercase text-black dark:text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Чанар
                </h3>
                <p className="text-gray-600 dark:text-white text-sm">
                  Дэлхийн стандартад нийцсэн чанартай материал ашиглана
                </p>
              </div>

              <div className="text-center p-6 border border-gray-100 dark:border-white">
                <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mx-auto mb-4 text-2xl">
                  ♥
                </div>
                <h3 className="text-sm font-bold mb-3 uppercase text-black dark:text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Хүүхдийн эрүүл мэнд
                </h3>
                <p className="text-gray-600 dark:text-white text-sm">
                  Хүүхдийн хөлний зөв хөгжилд анхаарал хандуулна
                </p>
              </div>

              <div className="text-center p-6 border border-gray-100 dark:border-white">
                <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mx-auto mb-4 text-2xl">
                  ★
                </div>
                <h3 className="text-sm font-bold mb-3 uppercase text-black dark:text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Үйлчилгээ
                </h3>
                <p className="text-gray-600 dark:text-white text-sm">
                  Үйлчлүүлэгч бүрд хамгийн сайн үйлчилгээ үзүүлнэ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black mb-2">5000+</div>
                <div className="text-sm text-gray-400 dark:text-white uppercase tracking-wider">Үйлчлүүлэгч</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">100+</div>
                <div className="text-sm text-gray-400 dark:text-white uppercase tracking-wider">Бүтээгдэхүүн</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">4.9</div>
                <div className="text-sm text-gray-400 dark:text-white uppercase tracking-wider">Үнэлгээ</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="text-sm text-gray-400 dark:text-white uppercase tracking-wider">Дэмжлэг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-black mb-4 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Эрхэм зорилго
                </h2>
                <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                  Хүүхэд бүрт чанартай, эрүүл мэндэд ээлтэй гутал хүргэж, тэдний идэвхтэй амьдралд дэмжлэг үзүүлэх.
                </p>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Бид хүүхдийн хөлний зөв хөгжил, эрүүл мэндийг хамгаалах замаар тэдний ирээдүйд хувь нэмэр оруулахыг эрмэлздэг.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black mb-4 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Алсын хараа
                </h2>
                <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                  Монгол дахь хүүхдийн гутлын салбарт тэргүүлэгч брэнд болж, дэлхийн зах зээлд гарах.
                </p>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Инновацийн технологи, орчин үеийн загвар, эко найрсаг материалыг хослуулан хүүхдэд хамгийн сайн бүтээгдэхүүн санал болгох.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-4 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Манай баг
            </h2>
            <p className="text-gray-600 dark:text-white mb-12 max-w-2xl mx-auto">
              Хүүхдийн гутлын дизайн, үйлдвэрлэл, борлуулалтын чиглэлээр 10+ жилийн туршлагатай мэргэжилтнүүд
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 dark:bg-white mx-auto mb-4"></div>
                <h3 className="font-bold text-sm mb-1 uppercase text-black dark:text-white">Б.Энхжин</h3>
                <p className="text-gray-600 dark:text-white text-xs">Гүйцэтгэх захирал</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 dark:bg-white mx-auto mb-4"></div>
                <h3 className="font-bold text-sm mb-1 uppercase text-black dark:text-white">М.Тэргэл</h3>
                <p className="text-gray-600 dark:text-white text-xs">Дизайнер</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 dark:bg-white mx-auto mb-4"></div>
                <h3 className="font-bold text-sm mb-1 uppercase text-black dark:text-white">Б.Мишээл</h3>
                <p className="text-gray-600 dark:text-white text-xs">Борлуулалтын менежер</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4 uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Бидэнтэй нэгдээрэй
          </h2>
          <p className="text-gray-400 dark:text-white mb-8 max-w-xl mx-auto">
            МИША гэр бүлийн нэг хэсэг болж, хүүхдийнхээ эрүүл мэнд, аюулгүй байдалд анхаарал тавь
          </p>
          <a 
            href="/products"
            className="inline-block bg-white text-black dark:bg-white dark:text-black px-8 py-3 text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-200 transition uppercase tracking-widest"
          >
            ДЭЛГҮҮР ҮЗЭХ
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
