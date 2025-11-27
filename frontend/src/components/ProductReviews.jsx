import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function ProductReviews({ productId }) {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Болд',
      rating: 5,
      date: '2025-11-20',
      comment: 'Маш сайн бүтээгдэхүүн! Хүүхэд маань их л таалагдлаа.',
      helpful: 12
    },
    {
      id: 2,
      name: 'Сараа',
      rating: 4,
      date: '2025-11-18',
      comment: 'Чанар сайн, зөөлөн. Хэмжээ яг таарсан.',
      helpful: 8
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString().split('T')[0],
      helpful: 0
    };
    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
    setShowForm(false);
  };

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold dark:text-white uppercase mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
            {t('reviews')}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {[1,2,3,4,5].map(star => (
                <svg 
                  key={star} 
                  className={`w-5 h-5 ${star <= averageRating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} fill-current`} 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {averageRating.toFixed(1)} ({reviews.length} {t('reviews')})
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200"
          style={{fontFamily: 'Montserrat, sans-serif'}}
        >
          {t('writeReview')}
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider mb-2 dark:text-gray-300 font-bold">
              {t('name')}
            </label>
            <input
              type="text"
              value={newReview.name}
              onChange={e => setNewReview({...newReview, name: e.target.value})}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:border-black dark:focus:border-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider mb-2 dark:text-gray-300 font-bold">
              {t('rating')}
            </label>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({...newReview, rating: star})}
                  className="focus:outline-none"
                >
                  <svg 
                    className={`w-8 h-8 ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} fill-current hover:text-yellow-400`} 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider mb-2 dark:text-gray-300 font-bold">
              Сэтгэгдэл
            </label>
            <textarea
              value={newReview.comment}
              onChange={e => setNewReview({...newReview, comment: e.target.value})}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:border-black dark:focus:border-white h-32"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200"
              style={{fontFamily: 'Montserrat, sans-serif'}}
            >
              Илгээх
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="border border-gray-300 dark:border-gray-600 px-6 py-2 text-sm uppercase tracking-wider hover:border-black dark:hover:border-white dark:text-white"
            >
              Болих
            </button>
          </div>
        </form>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-bold dark:text-white">{review.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[1,2,3,4,5].map(star => (
                      <svg 
                        key={star} 
                        className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} fill-current`} 
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{review.comment}</p>
            <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
              👍 Тусалсан ({review.helpful})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductReviews;
