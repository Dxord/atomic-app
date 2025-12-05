import React from 'react'
import { PostCard } from '../molecules/PostCard'
import { Text } from '../atoms/Text'
import type { Post } from '@/app/api/posts/route'

type PostListProps = {
  posts: Post[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <section className="mb-12">
      <Text variant="h2" className="mb-6">
        Latest Posts
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
