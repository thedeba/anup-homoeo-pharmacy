import { supabase } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
      // Fetch a single blog post by ID
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, excerpt, content, photo, created_at')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (!data) {
        return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
      }

      return NextResponse.json({ success: true, data });
    } else {
      // Fetch all blog posts
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, excerpt, content, photo, created_at')
        .order('created_at', { ascending: false });

      if (error) throw error;

      return NextResponse.json({ success: true, data });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, excerpt, content, photo } = body;

    const { data, error } = await supabase
      .from('blogs')
      .insert({
        title,
        excerpt,
        content,
        photo
      })
      .select('id, title, excerpt, content, photo, created_at')
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}