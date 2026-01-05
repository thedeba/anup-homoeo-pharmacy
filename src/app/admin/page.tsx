"use client";

import { useAuth } from '@/contexts/AuthContext';
import Login from '@/app/components/Login';
import BlogManagement from '@/app/components/BlogManagement';

export default function AdminPage() {
  const { user, loading } = useAuth();

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

  return <BlogManagement />;
}
