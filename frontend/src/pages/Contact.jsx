import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Таны мессеж амжилттай илгээгдлээ!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 border-b border-gray-100 dark:border-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-black mb-4 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Холбоо барих
            </h1>
            <p className="text-gray-600 dark:text-white">
              Бидэнтэй холбогдох бол бид таны асуултад хариулах болно
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-black mb-6 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Мессеж илгээх
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold mb-2 text-black dark:text-white uppercase">
                      Нэр *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-3 text-sm focus:outline-none focus:border-black dark:focus:border-white"
                      placeholder="Таны нэр"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 text-black dark:text-white uppercase">
                      Имэйл *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-3 text-sm focus:outline-none focus:border-black dark:focus:border-white"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 text-black dark:text-white uppercase">
                      Утас
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-3 text-sm focus:outline-none focus:border-black dark:focus:border-white"
                      placeholder="+976 9911-2233"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 text-black dark:text-white uppercase">
                      Мессеж *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full border border-gray-300 dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-3 text-sm focus:outline-none focus:border-black dark:focus:border-white resize-none"
                      placeholder="Таны мессеж..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black dark:bg-white text-white dark:text-black py-3 text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition uppercase tracking-widest"
                  >
                    Илгээх
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-black mb-6 text-black dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Холбоо барих мэдээлэл
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="border-l-4 border-black dark:border-white pl-4">
                    <h3 className="text-sm font-bold mb-2 uppercase text-black dark:text-white">Хаяг</h3>
                    <p className="text-gray-600 dark:text-white text-sm">
                      СБД, 1-р хороо<br />
                      Улаанбаатар, Монгол Улс
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="border-l-4 border-black dark:border-white pl-4">
                    <h3 className="text-sm font-bold mb-2 uppercase text-black dark:text-white">Утас</h3>
                    <p className="text-gray-600 dark:text-white text-sm">
                      +976 9911-2233<br />
                      +976 8800-5566
                    </p>
                  </div>

                  {/* Email */}
                  <div className="border-l-4 border-black dark:border-white pl-4">
                    <h3 className="text-sm font-bold mb-2 uppercase text-black dark:text-white">Имэйл</h3>
                    <p className="text-gray-600 dark:text-white text-sm">
                      mishashop@kids.mn<br />
                      support@mishashop.mn
                    </p>
                  </div>

                  {/* Working Hours */}
                  <div className="border-l-4 border-black dark:border-white pl-4">
                    <h3 className="text-sm font-bold mb-2 uppercase text-black dark:text-white">Ажлын цаг</h3>
                    <p className="text-gray-600 dark:text-white text-sm">
                      Даваа - Баасан: 09:00 - 18:00<br />
                      Бямба: 10:00 - 16:00<br />
                      Ням: Амарна
                    </p>
                  </div>

                  {/* Social Media */}
                  <div className="border-l-4 border-black dark:border-white pl-4">
                    <h3 className="text-sm font-bold mb-2 uppercase text-black dark:text-white">Сошиал хуудас</h3>
                    <div className="flex gap-4">
                      <a href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black mb-8 text-black dark:text-white uppercase text-center" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Байршил
            </h2>
            <div className="aspect-video bg-gray-200 dark:bg-black flex items-center justify-center border border-gray-300 dark:border-white">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600 dark:text-white text-sm">Google Map энд харагдана</p>
                <p className="text-gray-400 dark:text-white text-xs mt-2">СБД, 1-р хороо, Улаанбаатар</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-8 text-black dark:text-white uppercase text-center" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Түгээмэл асуултууд
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-white p-6 bg-white dark:bg-black">
                <h3 className="text-sm font-bold mb-2 uppercase text-black dark:text-white">Хүргэлтийн хугацаа хэр удаан вэ?</h3>
                <p className="text-gray-600 dark:text-white text-sm">
                  Улаанбаатар хотод 24-48 цагийн дотор, орон нутагт 3-5 хоногийн дотор хүргэнэ.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-white p-6 bg-white dark:bg-black">
                <h3 className="text-sm font-bold mb-2 uppercase text-black dark:text-white">Буцаалт, солилт хийх боломжтой юу?</h3>
                <p className="text-gray-600 dark:text-white text-sm">
                  Тийм, худалдан авалт хийснээс хойш 14 хоногийн дотор буцаалт, солилт хийх боломжтой.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-white p-6 bg-white dark:bg-black">
                <h3 className="text-sm font-bold mb-2 uppercase text-black dark:text-white">Төлбөрийн аргууд?</h3>
                <p className="text-gray-600 dark:text-white text-sm">
                  Бэлэн мөнгө, карт, QPay, SocialPay болон бусад цахим төлбөрийн аргуудаар төлөх боломжтой.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-white p-6 bg-white dark:bg-black">
                <h3 className="text-sm font-bold mb-2 uppercase text-black dark:text-white">Хэмжээний заавар хаанаас авах вэ?</h3>
                <p className="text-gray-600 dark:text-white text-sm">
                  Бүтээгдэхүүн бүрийн дэлгэрэнгүй хэсэгт хэмжээний жагсаалт болон заавар байрладаг.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

