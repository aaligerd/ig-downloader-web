"use client";
import { useState } from 'react';

export default function Downloader() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    if (!url) return;
    setLoading(true);
    setError('');
    setData(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_IP}/api/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoUrl: url }),
      });

      if (!res.ok) throw new Error('Failed to fetch');
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError("Could not find video. Please ensure the link is public.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl mt-10 border border-gray-100">
      <div className="flex flex-col md:flex-row gap-3">
        <input 
          type="text" 
          placeholder="Paste Instagram link here..." 
          className="flex-1 p-4 border-2 border-gray-200 rounded-xl outline-none focus:border-pink-500 transition-all text-gray-700"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button 
          onClick={handleDownload}
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Download'}
        </button>
      </div>

      {error && <p className="text-red-500 mt-4 text-center font-medium">{error}</p>}

      {/* --- LOADING SKELETON --- */}
      {loading && (
        <div className="mt-8 border-t pt-8 animate-pulse">
          <div className="w-full h-72 bg-gray-200 rounded-2xl mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="w-full h-14 bg-gray-200 rounded-xl"></div>
        </div>
      )}

      {/* --- RESULT AREA --- */}
      {data && !loading && (
        <div className="mt-8 border-t pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="relative">
            <img 
              src={`${process.env.NEXT_PUBLIC_BACKEND_IP}/api/proxy-image?url=${encodeURIComponent(data.thumbnail)}`} 
              alt="Preview" 
              className="w-full h-72 object-cover rounded-2xl shadow-md"
            />
          </div>
          
          <h3 className="mt-4 font-semibold text-gray-800 text-lg line-clamp-2">
            {data.title || "Instagram Video"}
          </h3>
          <p className="text-gray-500 text-sm mb-6">By @{data.author}</p>

          <a 
            href={`${process.env.NEXT_PUBLIC_BACKEND_IP}/api/proxy-download?url=${encodeURIComponent(data.downloadUrl)}&filename=${encodeURIComponent(data.title?.substring(0, 20) || 'video')}`} 
            className="block text-center bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg transition-all"
          >
            Download MP4 (Direct Save)
          </a>
        </div>
      )}
    </div>
  );
}