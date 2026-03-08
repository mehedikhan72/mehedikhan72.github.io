import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BlogPost from '../components/blog/BlogPost';
import SocialShare from '../components/blog/SocialShare';

function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog post
    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // First, get the manifest to find the file path
        const manifestResponse = await fetch('/blogs/blogs-manifest.json');
        const manifest = await manifestResponse.json();

        const blogMeta = manifest.blogs.find(blog => blog.slug === slug);

        if (!blogMeta) {
          setError('Blog post not found');
          setLoading(false);
          return;
        }

        // Fetch the markdown file
        const markdownResponse = await fetch(blogMeta.file);
        if (!markdownResponse.ok) {
          throw new Error('Failed to load blog post');
        }

        const markdownText = await markdownResponse.text();

        // Strip frontmatter (everything between --- delimiters)
        // We already have metadata from the manifest, so just extract the content
        let content = markdownText;
        const frontmatterMatch = markdownText.match(/^---\s*\n[\s\S]*?\n---\s*\n/);
        if (frontmatterMatch) {
          content = markdownText.slice(frontmatterMatch[0].length);
        }

        setPost({
          ...blogMeta,
          content,
        });
        setLoading(false);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  useEffect(() => {
    // Scroll to top when post loads
    if (post) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [post]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="App text-primary bg-secondary min-h-screen">
        <NavBar />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b border-primary border-opacity-30"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="App text-primary bg-secondary min-h-screen">
        <NavBar />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center py-20">
            <p className="text-sm opacity-60 mb-4">Article not found</p>
            <Link
              to="/blogs"
              className="text-sm opacity-50 hover:opacity-100 underline transition-opacity"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const shareUrl = window.location.href;

  return (
    <div className="App text-primary bg-secondary min-h-screen">
      <NavBar />

      <article className="container mx-auto px-4 py-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <button
            onClick={() => navigate('/blogs')}
            className="flex items-center gap-1 text-sm opacity-50 hover:opacity-100 transition-opacity"
          >
            ← Back
          </button>
        </div>

        {/* Blog Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-6 text-xs opacity-50">
            <span className={`category-${post.category}`}>
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
          </div>

          <h1 className="mb-8" style={{ fontSize: '2.25rem', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>

          {/* Social Share - Top */}
          <SocialShare url={shareUrl} title={post.title} />
        </header>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto">
          <BlogPost content={post.content} />
        </div>

        {/* Social Share - Bottom */}
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-primary border-opacity-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <SocialShare url={shareUrl} title={post.title} />

            <Link
              to="/blogs"
              className="text-sm opacity-50 hover:opacity-100 transition-opacity"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default BlogPostPage;
