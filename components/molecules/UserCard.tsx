import React from 'react'
import { Text } from '../atoms/Text'
import { Badge } from '../atoms/Badge'
import type { User } from '@/app/api/users/route'

type UserCardProps = {
  user: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const getRoleBadgeColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'red' as const
      case 'manager':
        return 'yellow' as const
      default:
        return 'blue' as const
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <Text variant="h3">{user.name}</Text>
        <Badge color={getRoleBadgeColor(user.role)}>{user.role}</Badge>
      </div>
      <Text variant="small" className="text-gray-600">
        {user.email}
      </Text>
    </div>
  )
}
