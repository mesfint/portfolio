
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  
  
  
  
  const [formState, setFormState] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
      formState,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
    ).then(() => {
      setFormState({ from_name: '', from_email: '', message: '' });
       // Show the toast notification
  toast.success("Thank you for the message,I'll get back to you as soon as possible", {
    position:  'top-center',
    autoClose: 3000, // 3 seconds
    hideProgressBar: true,
  });
    }).catch((error) => {
      console.error('Failed to send email:', error);
         // Show an error toast if the submission fails
         toast.error('Failed to send the message. Please try again later.', {
          position: 'top-center',
          autoClose: 5000, // 5 seconds
          hideProgressBar: true,
        });
    });
  };
  


  return (
    <section id="contact" className={`contact py-20   ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}` }>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center  ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-12`}>Contact Me</h2>
        <p className={`mx-auto text-lg leading-relaxed max-w-prose text-center mb-8  ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-12`}>
        Feel free to reach out to me through my email,phone call and linkedin or through the  contact form. Whether you have a project in mind, a question, or just want to connect, I'd love to hear from you. Let's get in touch .
    </p>
     
        <form onSubmit={handleSubmit} className={`max-w-xl mx-auto  p-8 rounded-lg shadow-lg  ${theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-100'} `}>
            <div className="mb-4">
            <label htmlFor="name" className={`block font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Name
          </label>
              <input
                type="text"
                name="from_name"
                id="name"
                value={formState.from_name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} `}

                required
              />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className={`block font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Email
          </label>
              <input
                type="email"
                name="from_email"
                id="email"
                value={formState.from_email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} `}
                required
              />
            </div>
            <div className="mb-6">
            <label htmlFor="message" className={`block font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Message
          </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} `}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-900 hover:bg-gray-950 text-white font-bold rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>
          
      
      </div>
      <ToastContainer />
    </section>
  );
};
