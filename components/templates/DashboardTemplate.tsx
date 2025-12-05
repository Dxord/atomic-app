import React from 'react'
import { UserList } from '../organisms/UserList'
import { PostList } from '../organisms/PostList'
import { Text } from '../atoms/Text'
import type { User } from '@/app/api/users/route'
import type { Post } from '@/app/api/posts/route'

type DashboardTemplateProps = {
  users: User[]
  posts: Post[]
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  users,
  posts,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Text variant="h1">Dashboard</Text>
          <Text variant="body" className="text-gray-600 mt-2">
            Welcome to your Next.js 14 application with Atomic Design
          </Text>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <UserList users={users} />
        <PostList posts={posts} />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Text variant="small" className="text-gray-500 text-center">
            Built with Next.js 14, TypeScript, and Tailwind CSS
          </Text>
        </div>
      </footer>
    </div>
  )
}
