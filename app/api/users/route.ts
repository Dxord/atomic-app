import { NextResponse } from 'next/server'

export type User = {
  id: number
  name: string
  email: string
  role: string
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager' },
]

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return NextResponse.json({ data: users })
}
