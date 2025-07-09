import { useState } from 'react'
import { confirmSignUp } from 'aws-amplify/auth'
import { Input } from '../../atoms/Input/Input'
import { Button } from '../../atoms/Button/Button'
import styles from './ConfirmSignUpForm.module.scss'

type Props = {
  username: string
  onConfirmed: () => void
}

export const ConfirmSignUpForm = ({ username, onConfirmed }: Props) => {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await confirmSignUp({ username, confirmationCode: code })
      onConfirmed()
    } catch (err: any) {
      setError(err.message || 'Error al confirmar')
    }
  }

return (
  <div className={styles.modal}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        placeholder="Código de verificación"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button text="Confirmar" type="submit" />
    </form>
  </div>
)

}
