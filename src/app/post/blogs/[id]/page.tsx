'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  photo?: string;
  created_at: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const res = await fetch(`/api/blogs?id=${id}`);
          const data = await res.json();
          if (data.success) {
            setBlog(data.data);
          } else {
            setError(data.error);
          }
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchBlog();
    }
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-700">Loading blog post...</p></div>;
  if (error) return <div className="min-h-screen flex items-center justify-center"><p className="text-red-500">Error: {error}</p></div>;
  if (!blog) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-700">Blog post not found.</p></div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <button
            onClick={() => router.back()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mb-4"
          >
            &larr; Back
          </button>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <p className="text-gray-500 mb-6">Published on: {new Date(blog.created_at).toLocaleDateString()}</p>
          {blog.photo && (
            <img 
              src={blog.photo} 
              alt={blog.title} 
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}
          <div className="prose prose-lg max-w-none text-gray-700">
            {blog.content}
          </div>
        </div>
      </div>
    </div>
  );
}
