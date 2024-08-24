import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  cover_image: string;
}

export const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const { theme } = useTheme();

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=mesfin_t')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <section id="blogs" className={`blogs py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Blog
        </h2>
        <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        </p>
        <p className={`mx-auto text-lg leading-relaxed max-w-prose text-center mb-8  ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-12`}>
        Here you’ll find my latest blog posts, where I share insights, tutorials, and thoughts on various tech topics. These articles reflect my ongoing learning and contributions to the developer community.
    </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {articles.map(article => (
            <div
              key={article.id}
              className={`relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg border p-6 shadow-md 
              ${theme === 'dark' 
                ? 'bg-gray-800 text-white border-gray-600' 
                : 'bg-white text-gray-900 border-gray-300'}`}
            >
              {article.cover_image && (
                <img
                  src={article.cover_image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {article.title}
                </h3>
                <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {article.description}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-4 block flex items-center justify-center"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4 transform rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5-5m0 0l5 5m-5-5v12"></path>
                  </svg>
                </a>
                <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Published on {new Date(article.published_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
