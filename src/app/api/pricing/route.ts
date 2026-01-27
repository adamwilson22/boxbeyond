import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const PRICING_PATH = path.join(process.cwd(), 'src', 'data', 'pricing.json');

function authOk(request: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return true;
  const key = request.headers.get('x-admin-key') ?? new URL(request.url).searchParams.get('key');
  return key === secret;
}

export async function GET() {
  try {
    const raw = await fs.readFile(PRICING_PATH, 'utf-8');
    const data = JSON.parse(raw);
    return NextResponse.json(data);
  } catch (e) {
    console.error('pricing GET', e);
    return NextResponse.json({ error: 'Failed to load pricing' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!authOk(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json();
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: 'Body must be an array' }, { status: 400 });
    }
    await fs.writeFile(PRICING_PATH, JSON.stringify(body, null, 2), 'utf-8');
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('pricing PUT', e);
    return NextResponse.json({ error: 'Failed to save pricing' }, { status: 500 });
  }
}
