import { DashboardTemplate } from '@/components/templates/DashboardTemplate'
import type { User } from './api/users/route'
import type { Post } from './api/posts/route'

async function getUsers(): Promise<User[]> {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch users')
  }

  const data = await res.json()
  return data.data
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  const data = await res.json()
  return data.data
}

export default async function Home() {
  const [users, posts] = await Promise.all([getUsers(), getPosts()])

  return <DashboardTemplate users={users} posts={posts} />
}
