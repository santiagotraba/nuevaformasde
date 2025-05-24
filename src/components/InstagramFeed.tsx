
import React from 'react';

const InstagramFeed = () => {
  // This would be replaced with actual Instagram API integration
  const mockPosts = [
    { id: 1, imageUrl: "https://via.placeholder.com/300", likes: 152, comments: 23 },
    { id: 2, imageUrl: "https://via.placeholder.com/300", likes: 89, comments: 12 },
    { id: 3, imageUrl: "https://via.placeholder.com/300", likes: 243, comments: 42 },
    { id: 4, imageUrl: "https://via.placeholder.com/300", likes: 110, comments: 18 },
    { id: 5, imageUrl: "https://via.placeholder.com/300", likes: 75, comments: 8 },
    { id: 6, imageUrl: "https://via.placeholder.com/300", likes: 195, comments: 27 },
  ];

  return (
    <section className="section-padding bg-nfd-beige/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Síguenos en <span className="text-nfd-rust">Instagram</span>
          </h2>
          <p className="text-gray-600">Descubre nuestras últimas publicaciones y actividades</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mockPosts.map((post) => (
            <div 
              key={post.id} 
              className="hover-lift relative group overflow-hidden rounded-lg aspect-square bg-gray-200"
            >
              {/* This would be replaced with actual Instagram embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <div className="flex space-x-4">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-nfd-rust hover:underline"
          >
            <span>Ver más en Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
