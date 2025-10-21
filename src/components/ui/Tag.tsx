import type React from 'react'

interface TagProps {
  children: React.ReactNode
  className?: string
  tone?: 'primary' | 'neutral'
}

export const Tag = ({ children, className, tone = 'primary' }: TagProps) => {
  const base = tone === 'primary'
    ? 'bg-primary-500/20 text-primary-400'
    : 'bg-gray-700 text-gray-300'
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${base} ${className ?? ''}`}>
      {children}
    </span>
  )
}

export default Tag
