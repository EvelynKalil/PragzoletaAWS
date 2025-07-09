import styles from './Input.module.scss'

type Props = {
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export const Input = ({ type = 'text', placeholder, value, onChange, required = false }: Props) => {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}
