import { InputHTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent',
        className
      )}
      {...props}
    />
  )
}