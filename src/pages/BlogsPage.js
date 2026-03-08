import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BlogCard from '../components/blog/BlogCard';
import SearchBar from '../components/blog/SearchBar';
import Pagination from '../components/blog/Pagination';

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 10;

  useEffect(() => {
    // Fetch blogs manifest
    fetch('/blogs/blogs-manifest.json')
      .then(response => response.json())
      .then(data => {
        // Sort by date (newest first)
        const sortedBlogs = data.blogs.sort((a, b) =>
          new Date(b.date) - new Date(a.date)
        );
        setBlogs(sortedBlogs);
        setFilteredBlogs(sortedBlogs);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blogs:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter blogs based on search and category
    let filtered = blogs;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchLower) ||
        blog.excerpt.toLowerCase().includes(searchLower)
      );
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, blogs]);

  // Calculate pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'travel', label: 'Travel' },
    { value: 'technical', label: 'Technical' },
  ];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="App text-primary bg-secondary min-h-screen">
      <NavBar />

      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-6 mb-3" style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
            Writings
          </h1>
          <p className="text-2 opacity-60 max-w-2xl mx-auto" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Thoughts on software engineering, research and occasional travel stories.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`category-filter-btn ${
                  selectedCategory === category.value ? 'active' : ''
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b border-primary border-opacity-30"></div>
          </div>
        )}

        {/* No Results */}
        {!loading && currentBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2 opacity-60 mb-4">
              {searchTerm
                ? `No results found for "${searchTerm}"`
                : 'No articles in this category'}
            </p>
            {(searchTerm || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-sm text-primary opacity-60 hover:opacity-100 underline cursor-pointer transition-opacity"
              >
                Clear filters
              </button>
            )}
          </div>
        )}

        {/* Blog Grid */}
        {!loading && currentBlogs.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-fr">
              {currentBlogs.map(blog => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-8 text-sm opacity-50">
              {indexOfFirstBlog + 1}-{Math.min(indexOfLastBlog, filteredBlogs.length)} of {filteredBlogs.length}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default BlogsPage;
