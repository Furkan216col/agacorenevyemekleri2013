'use client';

import { useState } from 'react';

export default function Iletisim() {
  const [formData, setFormData] = useState({
    ad: '',
    email: '',
    mesaj: '',
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Gönderilen veri:', formData);
    setSubmitStatus('Mesajınız gönderildi. Teşekkür ederiz!');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">İletişim</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="ad"
          placeholder="Adınız"
          onChange={handleChange}
          value={formData.ad}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          onChange={handleChange}
          value={formData.email}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="mesaj"
          placeholder="Mesajınız"
          onChange={handleChange}
          value={formData.mesaj}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Gönder
        </button>
      </form>
      {submitStatus && (
        <p className="mt-4 text-green-700 font-semibold">{submitStatus}</p>
      )}
    </div>
  );
}
