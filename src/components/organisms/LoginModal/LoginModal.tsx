// src/components/organisms/LoginModal/LoginModal.tsx
import { useEffect } from 'react'
import { LoginForm } from '../../molecules/LoginForm/LoginForm'
import styles from './LoginModal.module.scss'

type Props = {
  onClose: () => void
  onLogin: (username: string) => void
}

export const LoginModal = ({ onClose, onLogin }: Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        <p className={styles.title}>Iniciar sesión</p>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  )
}
