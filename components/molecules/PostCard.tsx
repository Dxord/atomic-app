import React from 'react'
import { Text } from '../atoms/Text'
import type { Post } from '@/app/api/posts/route'

type PostCardProps = {
  post: Post
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Text variant="h3" className="mb-2">
        {post.title}
      </Text>
      <Text variant="body" className="text-gray-700 mb-4">
        {post.content}
      </Text>
      <div className="flex justify-between items-center">
        <Text variant="small" className="text-gray-500">
          By {post.author}
        </Text>
        <Text variant="small" className="text-gray-400">
          {new Date(post.date).toLocaleDateString()}
        </Text>
      </div>
    </article>
  )
}
