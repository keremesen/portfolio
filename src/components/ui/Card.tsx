import { motion } from 'framer-motion'
import type React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : undefined}
      className={`glass-effect rounded-xl ${className ?? ''} ${hover ? 'card-hover' : ''}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
