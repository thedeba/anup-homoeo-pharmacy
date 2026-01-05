import { supabase } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { title, excerpt, content, photo } = body;

    const { data, error } = await supabase
      .from('blogs')
      .update({
        title,
        excerpt,
        content,
        photo,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select('id, title, excerpt, content, photo, created_at, updated_at')
      .single();

    if (error) throw error;
    if (!data) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const { data, error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id)
      .select('id, title')
      .single();

    if (error) throw error;
    if (!data) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
