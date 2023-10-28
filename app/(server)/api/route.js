import { NextResponse } from 'next/server'
import { getAll } from './data'

export async function GET() {
  const data = await getAll()
  return NextResponse.json(data)
}
