import { useState } from 'react'
import { signUp } from 'aws-amplify/auth'
import { Input } from '../../atoms/Input/Input'
import { Button } from '../../atoms/Button/Button'
import styles from './RegisterForm.module.scss'
import { ConfirmSignUpForm } from '../ConfirmSignUpForm/ConfirmSignUpForm'

type Props = {
  onRegister: (username: string) => void
}

export const RegisterForm = ({ onRegister }: Props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [showCodeConfirmation, setShowCodeConfirmation] = useState(false)
  const [submittedUsername, setSubmittedUsername] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await signUp({
        username,
        password,
        options: {
          userAttributes: { email },
        },
      })
      setSubmittedUsername(username)
      setShowCodeConfirmation(true)
    } catch (err: any) {
      setError(err.message || 'Error al registrar')
    } finally {
      setLoading(false)
    }
  }

  return showCodeConfirmation ? (
    <ConfirmSignUpForm
      username={submittedUsername}
      onConfirmed={() => onRegister(submittedUsername)}
    />
  ) : (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <Input
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className={styles.registerForm__error}>{error}</p>}
      <Button text={loading ? 'Registrando...' : 'Registrarse'} type="submit" disabled={loading} />
    </form>
  )
}
