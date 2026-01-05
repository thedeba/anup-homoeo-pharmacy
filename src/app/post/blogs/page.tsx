'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Login from '@/app/components/Login';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  photo: string;
  created_at: string;
  updated_at?: string;
}

export default function BlogManagement() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [showList, setShowList] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  
  // Redirect to login if not authenticated
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }
  
  if (!user) {
    return <Login />;
  }

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    try {
      const url = editingBlog ? `/api/blogs/${editingBlog.id}` : '/api/blogs';
      const method = editingBlog ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          excerpt,
          content,
          photo,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(editingBlog ? 'Blog post updated successfully!' : 'Blog post created successfully!');
        // Clear form
        setTitle('');
        setExcerpt('');
        setContent('');
        setPhoto('');
        setEditingBlog(null);
        
        // Refresh blogs list and show list view
        await fetchBlogs();
        setShowList(true);
        
        // Redirect after delay
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${(error as Error).message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setTitle(blog.title);
    setExcerpt(blog.excerpt);
    setContent(blog.content);
    setPhoto(blog.photo || '');
    setShowList(false);
    setMessage('');
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.success) {
        setMessage('Blog post deleted successfully!');
        await fetchBlogs();
        setDeleteConfirm(null);
        setTimeout(() => {
          setMessage('');
        }, 3000);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${(error as Error).message}`);
    }
  };

  const handleCancel = () => {
    setTitle('');
    setExcerpt('');
    setContent('');
    setPhoto('');
    setEditingBlog(null);
    setShowList(true);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {editingBlog ? 'Edit Blog Post' : showList ? 'Blog Management' : 'Add New Blog Post'}
            </h1>
            <div className="space-x-4">
              {showList ? (
                <button
                  onClick={() => setShowList(false)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add New Blog
                </button>
              ) : (
                <button
                  onClick={() => setShowList(true)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Back to List
                </button>
              )}
            </div>
          </div>

          {showList ? (
            <div className="space-y-4">
              {blogs.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No blog posts found. Create your first blog post!</p>
              ) : (
                blogs.map((blog) => (
                  <div key={blog.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                        <p className="text-gray-600 mb-2 whitespace-pre-wrap" style={{ whiteSpace: 'pre-wrap' }}>{blog.excerpt}</p>
                        <p className="text-sm text-gray-500">
                          Created: {new Date(blog.created_at).toLocaleDateString()}
                          {blog.updated_at && ` • Updated: ${new Date(blog.updated_at).toLocaleDateString()}`}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(blog.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {deleteConfirm === blog.id && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
                        <p className="text-red-700 mb-4">Are you sure you want to delete "{blog.title}"? This action cannot be undone.</p>
                        <div className="flex space-x-4">
                          <button
                            onClick={() => handleDelete(blog.id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                            Yes, Delete
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                id="title"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-gray-700 text-sm font-bold mb-2">
                Excerpt *
              </label>
              <textarea
                id="excerpt"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 whitespace-pre-wrap"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                required
                rows={3}
                placeholder="Brief summary of the blog post"
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                Full Content *
              </label>
              <textarea
                id="content"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 whitespace-pre-wrap"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={10}
                placeholder="Full blog content"
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </div>

            <div>
              <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
                Photo URL
              </label>
              <input
                type="url"
                id="photo"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-sm text-gray-500 mt-1">Optional: Enter the URL of the blog image</p>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (editingBlog ? 'Updating...' : 'Creating...') : (editingBlog ? 'Update Blog Post' : 'Create Blog Post')}
              </button>
            </div>
          </form>
          )}

          {message && (
            <div className={`mt-6 p-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}