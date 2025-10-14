import { ReactNode } from 'react'
import { Card } from './card'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {children}
      </Card>
    </div>
  )
}