import { useState } from 'react'
import { signUp } from 'aws-amplify/auth';
import styles from './RegisterForm.module.scss'

type Props = {
  onRegister: (username: string) => void
}

export const RegisterForm = ({ onRegister }: Props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  setError('')
  try {
    await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
        },
      },
    })
    onRegister(username)
  } catch (err: any) {
    setError(err.message || 'Error al registrar')
  } finally {
    setLoading(false)
  }
}


  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className={styles.registerForm__error}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrarse'}
      </button>
    </form>
  )
}
