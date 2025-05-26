import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Ошибка при отправке');

      alert('Сообщение отправлено!');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      alert('Не удалось отправить сообщение.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="flex justify-center items-center min-h-screen max-w-[40rem] mx-auto lg:max-w-full">
      <div className="bg-white rounded-3xl shadow-lg p-12 m-4">
        <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-green-500 text-transparent bg-clip-text">
          Ready to work together?
        </h1>
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-green-400 text-transparent bg-clip-text">
          Let's build something spectacular!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Send me a message or connect on social media. I'll reply within 24h.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
            className="w-full p-3 border border-gray-300 rounded-lg bg-green-50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            rows="4"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-[linear-gradient(121.6deg,#C4DAFD_54.43%,#E6D5FF_100.67%)] text-[#1C4ED8] text-3xl font-bold px-6 py-4 rounded-2xl"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className="mt-10 flex justify-center space-x-10">
          <a href="https://github.com/ksunwy" target="_blank" className="text-purple-500 hover:text-purple-700">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.125 27.7083C5.83329 29.8958 5.83329 24.0625 2.91663 23.3333M23.3333 32.0833V26.4396C23.388 25.7442 23.294 25.0451 23.0577 24.3889C22.8213 23.7326 22.448 23.1342 21.9625 22.6333C26.5416 22.1229 31.3541 20.3875 31.3541 12.425C31.3538 10.3889 30.5706 8.43091 29.1666 6.95625C29.8314 5.17491 29.7844 3.20593 29.0354 1.45833C29.0354 1.45833 27.3145 0.947917 23.3333 3.61667C19.9908 2.71078 16.4674 2.71078 13.125 3.61667C9.14371 0.947917 7.42288 1.45833 7.42288 1.45833C6.67384 3.20593 6.62684 5.17491 7.29163 6.95625C5.87723 8.44185 5.09322 10.4176 5.10413 12.4688C5.10413 20.3729 9.91663 22.1083 14.4958 22.6771C14.016 23.1729 13.646 23.7641 13.4098 24.4124C13.1736 25.0606 13.0766 25.7513 13.125 26.4396V32.0833" stroke="#3C82F6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="https://www.behance.net/ksunnwy" target="_blank" className="text-purple-500 hover:text-purple-700">
            <Image src={"/behance.png"} alt="behance" width={35} height={35} />
          </a>
          <a href="https://t.me/ksunnw" target="_blank" className="text-green-500 hover:text-green-700">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37 2L17.75 21.25" stroke="#3C82F6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M37 2L24.75 37L17.75 21.25L2 14.25L37 2Z" stroke="#3C82F6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Form;
