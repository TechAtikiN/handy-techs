import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
 
export const config = { matcher: '/' };

export function middleware(req: NextRequest) {
}

// export async function middleware(req: NextRequest) {
//   const response = await get('details');

//   return NextResponse.json(response)
// }