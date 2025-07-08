import { useEffect } from 'react';
import { RegisterForm } from '../../molecules/RegisterForm/RegisterForm'
import styles from './RegisterModal.module.scss'

type Props = {
  onClose: () => void
}

export const RegisterModal = ({ onClose }: Props) => {
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
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">×</button>
        <p className={styles.title}>Registro</p>
        <RegisterForm onRegister={onClose} />
      </div>
    </div>
  )
}
