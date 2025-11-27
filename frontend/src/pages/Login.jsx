import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { login, register } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(formData.email, formData.password);
    } else {
      register(formData.name, formData.email, formData.password);
    }
    navigate('/profile');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-3xl font-bold mb-8 dark:text-white uppercase text-center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          {isLogin ? t('login') : t('register')}
        </h1>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-xs uppercase tracking-wider mb-2 dark:text-gray-300 font-bold">
                  {t('name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2 dark:text-gray-300 font-bold">
                {t('email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2 dark:text-gray-300 font-bold">
                {t('password')}
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 uppercase text-sm tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 font-bold"
              style={{fontFamily: 'Montserrat, sans-serif'}}
            >
              {isLogin ? t('login') : t('register')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              {isLogin 
                ? `Бүртгэл байхгүй юу? ${t('register')}` 
                : `Бүртгэлтэй юу? ${t('login')}`
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
