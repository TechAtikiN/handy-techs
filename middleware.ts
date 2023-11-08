import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
 
export const config = { matcher: '/' };
 
export async function middleware() {
  const name = await get('name');
  return NextResponse.json(name);
}