import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
 
export const config = { matcher: '/' };
 
export async function middleware() {
  const details = await get('details');
  return NextResponse.json(details);
}