import styles from './Button.module.scss'

type ButtonProps = {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
}: ButtonProps) => {
  const className = `${styles.button} ${styles[`button--${variant}`]}`

  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  )
}
