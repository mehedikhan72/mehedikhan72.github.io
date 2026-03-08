import React, { useState } from 'react';

function SocialShare({ url, title }) {
  const [showToast, setShowToast] = useState(false);

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (err) {
        console.error('Fallback copy failed:', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="social-share">
      <div className="flex items-center gap-4">
        <span className="text-xs opacity-50">Share</span>

        <button
          onClick={handleFacebookShare}
          className="text-sm opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          <i className='bx bxl-facebook'></i>
        </button>

        <button
          onClick={handleTwitterShare}
          className="text-sm opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Share on Twitter"
          title="Share on Twitter/X"
        >
          <i className='bx bxl-twitter'></i>
        </button>

        <button
          onClick={handleCopyLink}
          className="text-sm opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Copy link"
          title="Copy link to clipboard"
        >
          <i className='bx bx-link'></i>
        </button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-secondary px-4 py-2 rounded text-xs shadow-lg">
          Link copied
        </div>
      )}
    </div>
  );
}

export default SocialShare;
