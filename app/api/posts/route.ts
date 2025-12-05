import { NextResponse } from 'next/server'

export type Post = {
  id: number
  title: string
  content: string
  author: string
  date: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    content: 'Learn how to build modern web applications with Next.js 14 and the App Router.',
    author: 'John Doe',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Atomic Design Pattern',
    content: 'Understanding the atomic design methodology for building design systems.',
    author: 'Jane Smith',
    date: '2024-01-20'
  },
  {
    id: 3,
    title: 'Server-Side Rendering in React',
    content: 'Deep dive into SSR and how it improves performance and SEO.',
    author: 'Bob Johnson',
    date: '2024-01-25'
  },
]

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 800))

  return NextResponse.json({ data: posts })
}
