import styles from './UserBadge.module.scss'

type Props = {
  name: string
}

export const UserBadge = ({ name }: Props) => {
  const initials = name.slice(0, 2).toUpperCase()
  return <div className={styles.badge}>{initials}</div>
}
