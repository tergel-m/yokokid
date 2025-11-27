import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

function Profile() {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Mock order data
  const orders = [
    {
      id: '001',
      date: '2025-11-20',
      total: '185,000₮',
      status: 'Хүргэгдсэн',
      items: 2
    },
    {
      id: '002',
      date: '2025-11-25',
      total: '95,000₮',
      status: 'Хүргэлтэнд',
      items: 1
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
            {t('profile')}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-red-700"
            style={{fontFamily: 'Montserrat, sans-serif'}}
          >
            {t('logout')}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Info */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-center mb-2 dark:text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
                {user.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">{user.email}</p>
              
              <div className="space-y-2">
                <Link
                  to="/wishlist"
                  className="block w-full text-center border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm uppercase hover:border-black dark:hover:border-white dark:text-white"
                >
                  {t('wishlist')}
                </Link>
                <Link
                  to="/cart"
                  className="block w-full text-center border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm uppercase hover:border-black dark:hover:border-white dark:text-white"
                >
                  {t('cart')}
                </Link>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 dark:text-white uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
              {t('orderHistory')}
            </h2>
            
            <div className="space-y-4">
              {orders.map(order => (
                <div key={order.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm font-bold dark:text-white">Захиалга #{order.id}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{order.date}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs ${order.status === 'Хүргэгдсэн' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{order.items} бүтээгдэхүүн</p>
                    <p className="text-lg font-bold dark:text-white">{order.total}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
