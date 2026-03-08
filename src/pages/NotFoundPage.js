import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function NotFoundPage() {
  return (
    <div className="App text-primary bg-secondary min-h-screen">
      <NavBar />

      <div className="container mx-auto px-4 py-20">
        <div className="text-center py-20">
          <h1 className="text-6xl font-bold mb-4" style={{ fontSize: '4rem', letterSpacing: '-0.02em' }}>
            404
          </h1>
          <p className="text-sm opacity-60 mb-8">
            Page not found
          </p>
          <Link
            to="/"
            className="text-sm opacity-50 hover:opacity-100 underline transition-opacity"
            style={{ textUnderlineOffset: '3px' }}
          >
            ← Back to home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
