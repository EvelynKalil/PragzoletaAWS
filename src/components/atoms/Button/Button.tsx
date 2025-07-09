import styles from './Button.module.scss'

type Props = {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const Button = ({ text, onClick, type = 'button', disabled = false }: Props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
