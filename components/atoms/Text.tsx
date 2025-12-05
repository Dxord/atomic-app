import React from 'react'

type TextProps = {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'small'
  className?: string
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  className = '',
}) => {
  const variants = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    body: 'text-base',
    small: 'text-sm',
  }

  const Component = variant.startsWith('h') ? variant : 'p'

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  )
}
