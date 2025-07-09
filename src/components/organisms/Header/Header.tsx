import { useState } from 'react'
import styles from './Header.module.scss'
import { Button } from '../../atoms/Button/Button'
import { LoginModal } from '../../organisms/LoginModal/LoginModal'
import { UserBadge } from '../../atoms/UserBadge/UserBadge'
import logo from '../../../assets/logo.png'
import { RegisterModal } from '../../organisms/RegisterModal/RegisterModal'
import { signOut } from 'aws-amplify/auth';

export const Header = () => {
  const [user, setUser] = useState<string | null>(null)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const handleLogout = async () => {
  try {
    await signOut();
    setUser(null);
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img
          src={logo}
          alt="Logo Plaza Comidas"
          className={styles['header__logo-img']}
        />
        <span>Plaza Comidas</span>
      </div>

      {user ? (
  <div className={styles.header__userSection}>
    <UserBadge name={user} />
    <Button text="Cerrar sesión" onClick={handleLogout} />
  </div>
) : (
  <div className={styles.header__actions}>
    <Button text="Iniciar sesión" onClick={() => setShowLogin(true)} />
    <Button text="Registrarse" onClick={() => setShowRegister(true)} />
  </div>
)}


      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={(name) => {
            setUser(name)
            setShowLogin(false)
          }}
        />
      )}
      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onRegister={() => {
            setShowRegister(false)
            setShowLogin(true)
          }}
        />

      )}


    </header>
  )
}