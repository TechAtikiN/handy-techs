// named imports
import { get } from "@vercel/edge-config";
import { NextResponse } from "next/server";

export async function GET() {
  const details = await get('details')
  return NextResponse.json(details)
}