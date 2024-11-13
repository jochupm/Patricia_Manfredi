import React from 'react';
import '/Users/josep/Desktop/Web_Development/ReactJs/Patricia_Manfredi/style/Blog.css';

const Blog = () => {
  // Ejemplo de datos de artículos de blog
  const articles = [
    {
      id: 1,
      title: 'Cómo mejorar tu técnica en la danza',
      description: 'Consejos prácticos para perfeccionar tus habilidades en diferentes estilos de danza.',
      image: '/path/to/image1.jpg',
      link: '/blog/tecnica-danza'
    },
    {
      id: 2,
      title: 'Beneficios de la danza en la salud',
      description: 'Descubre cómo la danza puede mejorar tu salud física y mental.',
      image: '/path/to/image2.jpg',
      link: '/blog/beneficios-danza'
    },
    {
      id: 3,
      title: 'Guía para principiantes en danza contemporánea',
      description: 'Todo lo que necesitas saber para comenzar en el mundo de la danza contemporánea.',
      image: '/path/to/image3.jpg',
      link: '/blog/danza-contemporanea'
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Nuestro Blog</h1>
      <p className="blog-description">
        Explora nuestros artículos sobre danza, técnica y desarrollo personal en el mundo de la danza.
      </p>
      
      <div className="articles-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <a href={article.link} className="read-more-button">Leer más</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;