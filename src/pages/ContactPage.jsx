import React, { useState } from 'react';
import { Mail, MessageSquare, Heart } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-8">
        <h2 className="text-[20px] md:text-[32px] font-bold text-zinc-900 text-center mb-8">CONTACT US</h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-300/50 border-4 border-zinc-900 p-4 text-center">
            <Mail className="w-8 h-8 mx-auto mb-2 text-zinc-900" />
            <p className="text-[8px] font-bold text-zinc-900">EMAIL</p>
            <a href="mailto:hello@nesw-voyager.com" className="text-[7px] text-blue-700 hover:underline">
              hello@nesw-voyager.com
            </a>
          </div>
          <div className="bg-pink-300/50 border-4 border-zinc-900 p-4 text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 text-zinc-900" />
            <p className="text-[8px] font-bold text-zinc-900">SOCIALS</p>
            <p className="text-[7px] text-zinc-800">@nesw_voyager</p>
          </div>
          <div className="bg-yellow-300/50 border-4 border-zinc-900 p-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-2 text-zinc-900" />
            <p className="text-[8px] font-bold text-zinc-900">SUPPORT</p>
            <p className="text-[7px] text-zinc-800">We love feedback!</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/60 backdrop-blur border-4 border-zinc-900 p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-[12px] font-bold text-green-600 mb-2">✓ MESSAGE SENT!</p>
              <p className="text-[8px] text-zinc-700">Thank you for reaching out. We'll get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[8px] font-bold text-zinc-900 block mb-2">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-zinc-900 p-2 bg-white text-[8px] focus:outline-none focus:bg-blue-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-[8px] font-bold text-zinc-900 block mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-zinc-900 p-2 bg-white text-[8px] focus:outline-none focus:bg-blue-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-[8px] font-bold text-zinc-900 block mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full border-2 border-zinc-900 p-2 bg-white text-[8px] focus:outline-none focus:bg-blue-50 resize-none"
                  placeholder="Tell us what you think!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-900 hover:bg-blue-600 text-white px-4 py-3 font-bold text-[8px] uppercase border-2 border-zinc-900 transition transform hover:scale-105"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
