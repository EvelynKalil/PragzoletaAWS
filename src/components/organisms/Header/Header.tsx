import { useState } from 'react'
import styles from './Header.module.scss'
import { Button } from '../../atoms/Button/Button'
import { LoginModal } from '../../organisms/LoginModal/LoginModal'
import { UserBadge } from '../../atoms/UserBadge/UserBadge'
import logo from '../../../assets/logo.png'

export const Header = () => {
  const [user, setUser] = useState<string | null>(null)
  const [showLogin, setShowLogin] = useState(false)

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
        <Button text="Iniciar sesión" onClick={() => setShowLogin(true)} />
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
    </header>
  )
}