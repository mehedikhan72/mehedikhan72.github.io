import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Link to={`/blogs/${blog.slug}`} className="blog-card block">
      {blog.image && (
        <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-md">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
            style={{ transition: 'transform 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      )}

      <div className="mb-3 flex items-center gap-2 text-xs opacity-50">
        <span className={`category-${blog.category}`}>
          {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
        </span>
        <span>·</span>
        <span>{formatDate(blog.date)}</span>
      </div>

      <h3 className="text-lg font-semibold mb-2" style={{ lineHeight: '1.4' }}>
        {blog.title}
      </h3>

      <p className="text-sm opacity-60" style={{ lineHeight: '1.6' }}>
        {blog.excerpt}
      </p>
    </Link>
  );
}

export default BlogCard;
