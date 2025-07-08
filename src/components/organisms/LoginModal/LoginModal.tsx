import styles from './LoginModal.module.scss'
import { LoginForm } from '../../molecules/LoginForm/LoginForm'

export const LoginModal = ({ onClose, onLogin }: {
  onClose: () => void,
  onLogin: (name: string) => void
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">×</button>
        <p className={styles['login-modal__title']}>Iniciar sesión</p>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  )
}