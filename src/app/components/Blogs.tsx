"use client";

import { useEffect, useState } from 'react';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  photo?: string;
  created_at: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <section id="blogs" className="w-full max-w-7xl mx-auto mt-12"><p className="text-gray-700">Loading blogs...</p></section>;
  if (error) return <section id="blogs" className="w-full max-w-7xl mx-auto mt-12"><p className="text-red-500">Error loading blogs: {error}</p></section>;

  return (
    <section id="blogs" className="w-full max-w-7xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6">Blogs & Resources</h2>
      {blogs.length === 0 ? (
        <p className="text-gray-700">No blogs available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white p-4 rounded shadow-sm">
              {blog.photo && (
                <img 
                  src={blog.photo} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              {blog.content && (
                <div className="text-gray-700 mb-4">
                  <p className="line-clamp-3">{blog.content}</p>
                </div>
              )}
              <a href="#" className="text-blue-600 hover:underline">Read more →</a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
