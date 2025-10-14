import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export const Card = ({ children, className, hover = false, onClick }: CardProps) => {
  return (
    <div 
      onClick={onClick}
      className={clsx(
        'bg-white border border-gray-200 rounded-xl p-6 shadow-sm',
        hover && 'transition-all duration-200 ease-in-out hover:shadow-lg cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}