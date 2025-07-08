import { useState } from 'react'
import styles from './Header.module.scss'
import { Button } from '../../atoms/Button/Button'
import { LoginModal } from '../../organisms/LoginModal/LoginModal'
import { UserBadge } from '../../atoms/UserBadge/UserBadge'
import logo from '../../../assets/logo.png'
import { RegisterModal } from '../../organisms/RegisterModal/RegisterModal'


export const Header = () => {
  const [user, setUser] = useState<string | null>(null)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)


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
        <UserBadge name={user} />
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
        />
      )}

    </header>
  )
}