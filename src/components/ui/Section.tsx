import { motion } from 'framer-motion'
import type React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  children: React.ReactNode
  className?: string
}

interface SectionHeaderProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'left' | 'center' | 'right'
}

export const Section = ({ id, children, className, ...rest }: SectionProps) => {
  return (
    <section id={id} className={`section-padding ${className ?? ''}`} {...rest}>
      <div className="container-max px-4 sm:px-6">
        {children}
      </div>
    </section>
  )
}

export const SectionHeader = ({ title, subtitle, align = 'center' }: SectionHeaderProps) => {
  const alignment = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={`${alignment} mb-16`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default Section
