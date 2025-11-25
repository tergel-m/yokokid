import { useState } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Сайн байна уу! Би танд хэрхэн туслах вэ?', sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    'Хүргэлтийн хугацаа',
    'Үнийн мэдээлэл',
    'Хэмжээний жагсаалт',
    'Холбоо барих'
  ];

  const handleSend = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      
      if (inputMessage.toLowerCase().includes('хүргэлт')) {
        botResponse = 'Бид бүх захиалгыг 24-48 цагийн дотор хүргэнэ. Улаанбаатар хотод үнэгүй хүргэлт үйлчилгээтэй!';
      } else if (inputMessage.toLowerCase().includes('үнэ')) {
        botResponse = 'Манай бүтээгдэхүүний үнэ 15,000₮-аас эхлэн 95,000₮ хүртэл байна. Онцгой хөнгөлөлттэй!';
      } else if (inputMessage.toLowerCase().includes('хэмжээ')) {
        botResponse = 'Бид 18-27 хэмжээний хүүхдийн гутал худалдаалдаг. Та өөрийн хэмжээгээ бүтээгдэхүүний хуудас дээр сонгож болно.';
      } else if (inputMessage.toLowerCase().includes('холбоо')) {
        botResponse = 'Утас: +976 9911-2233, Email: mishashop@kids.mn';
      } else {
        botResponse = 'Баярлалаа! Та бүтээгдэхүүний талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл манай борлуулалтын багт холбогдоно уу.';
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 500);

    setInputMessage('');
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 z-50 hover:scale-110"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white border border-gray-200 shadow-2xl z-50 flex flex-col" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-bold text-sm uppercase tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>
                МИША Support
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 text-sm ${
                    msg.sender === 'user'
                      ? 'bg-black text-white'
                      : 'bg-white text-black border border-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="grid grid-cols-2 gap-2 mb-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs px-3 py-2 border border-gray-300 hover:bg-gray-50 transition text-left"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Мессеж бичих..."
                className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
              />
              <button
                onClick={handleSend}
                className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
