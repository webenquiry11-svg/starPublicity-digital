"use client";

import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', error: false, submitting: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', error: false, submitting: true });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong.');
      }

      setStatus({ message: result.message, error: false, submitting: false });
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setTimeout(() => onClose(), 2000); // Close modal after 2 seconds on success

    } catch (error: any) {
      setStatus({ message: error.message, error: true, submitting: false });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-gradient-to-br from-[#2a7394] to-[#225d7a] text-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-white">Get a Free Quote</h2>
        <p className="text-gray-300 mb-6">Let's build something amazing together.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="modal-name" className="sr-only">Name</label>
            <input type="text" id="modal-name" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-2 focus:outline-none focus:border-white transition-colors font-sans" />
          </div>
          <div>
            <label htmlFor="modal-email" className="sr-only">Email</label>
            <input type="email" id="modal-email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-2 focus:outline-none focus:border-white transition-colors font-sans" />
          </div>
          <div>
            <label htmlFor="modal-message" className="sr-only">Message</label>
            <textarea id="modal-message" name="message" placeholder="Tell us about your project" value={formData.message} onChange={handleInputChange} required rows={3} className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-2 focus:outline-none focus:border-white transition-colors resize-none font-sans"></textarea>
          </div>
          <button type="submit" disabled={status.submitting} className={`w-full group inline-flex items-center justify-center py-3 px-6 rounded-full bg-white text-[#2a7394] font-bold text-lg transition-all duration-300 ease-out hover:bg-white/90 hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed`}>
            {status.submitting ? 'SENDING...' : "SUBMIT REQUEST"}
            <ChevronRight className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </form>
        {status.message && <p className={`text-center mt-4 text-sm ${status.error ? 'text-red-300' : 'text-green-300'}`}>{status.message}</p>}
      </div>
    </div>
  );
};

export default QuoteModal;