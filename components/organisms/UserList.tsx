import React from 'react'
import { UserCard } from '../molecules/UserCard'
import { Text } from '../atoms/Text'
import type { User } from '@/app/api/users/route'

type UserListProps = {
  users: User[]
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <section className="mb-12">
      <Text variant="h2" className="mb-6">
        Team Members
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  )
}
