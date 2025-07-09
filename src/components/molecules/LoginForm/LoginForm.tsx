// src/components/molecules/LoginForm/LoginForm.tsx
import { useState } from 'react'
import { signIn } from 'aws-amplify/auth'
import { Input } from '../../atoms/Input/Input'
import { Button } from '../../atoms/Button/Button'
import styles from './LoginForm.module.scss'

type Props = {
  onLogin: (username: string) => void
}

export const LoginForm = ({ onLogin }: Props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await signIn({ username, password })
      onLogin(username)
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <Input
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className={styles.loginForm__error}>{error}</p>}
      <Button text="Iniciar sesión" type="submit" disabled={loading} />
    </form>
  )
}
