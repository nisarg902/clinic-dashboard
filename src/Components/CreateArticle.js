import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateArticle() {
  const [article, setArticle] = useState({ title: '', imgUrl: '', content: '' });
  const navigate = useNavigate();

  const handlePost = (event) => {
    event.preventDefault();

    if (!article.title || !article.content) {
      alert("Please fill in both the title and content.");
      return;
    }

    const newArticle = {
      ...article,
      id: Date.now(),
      time: new Date().toLocaleString()
    };

    try {
      // LocalStorage logic
      const articles = JSON.parse(localStorage.getItem("articles")) || [];
      articles.unshift(newArticle);
      localStorage.setItem("articles", JSON.stringify(articles));
      
      alert("Article Posted Successfully!");
      navigate("/"); // Home par redirect karne ke liye
    } catch (e) {
      alert("Failed to save. Try again.");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handlePost} className="bg-white p-4 rounded shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
        <h3 className="mb-4 text-center">📝 Create a New Article</h3>

        <div className="mb-3">
          <input 
            className="form-control" 
            placeholder="Title" 
            value={article.title}
            onChange={(e) => setArticle({...article, title: e.target.value})}
            required 
          />
        </div>

        <div className="mb-3">
          <input 
            className="form-control" 
            placeholder="Image URL (optional)" 
            value={article.imgUrl}
            onChange={(e) => setArticle({...article, imgUrl: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <textarea 
            className="form-control" 
            placeholder="Content" 
            rows="5" 
            value={article.content}
            onChange={(e) => setArticle({...article, content: e.target.value})}
            required
          ></textarea>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            <i className="bi bi-upload"></i> Post Article
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateArticle;