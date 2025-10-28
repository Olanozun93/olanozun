import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'accent-outline'
  className?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  className,
  href,
  size = 'md'
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap'
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  }
  
  const variants = {
    primary: 'bg-[#ff581b] text-white hover:bg-[#e04e17] focus:ring-[#ff581b] border border-transparent shadow-sm hover:shadow-md',
    secondary: 'bg-[#060708] text-white hover:bg-gray-800 focus:ring-[#060708] border border-transparent shadow-sm hover:shadow-md',
    outline: 'border-2 border-[#060708] text-[#060708] hover:bg-[#060708] hover:text-white focus:ring-[#060708] bg-transparent',
    accent: 'bg-[#ff581b] text-white hover:bg-[#e04e17] focus:ring-[#ff581b] border border-transparent shadow-sm hover:shadow-md',
    'accent-outline': 'border-2 border-[#ff581b] text-[#ff581b] hover:bg-[#ff581b] hover:text-white focus:ring-[#ff581b] bg-transparent'
  }

  const buttonClass = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className || ''}`

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    )
  }

  return (
    <button className={buttonClass}>
      {children}
    </button>
  )
}