import styles from './Home.module.scss'
import { Header } from '../../components/organisms/Header/Header'
import { Button } from '../../components/atoms/Button/Button'
import foodImage from '../../assets/food.png'

export const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <section className={styles.home__intro}>
          <p className={styles.home__eyebrow}>Gestiona tu plaza de comidas</p>
          <h1 className={styles.home__title}>¡Bienvenido a la Plaza!</h1>
          <p className={styles.home__description}>
            Centraliza restaurantes, empleados y pedidos desde un solo lugar.
          </p>
          <Button text="Ver más" />
        </section>
        <section className={styles.home__image}>
          <img src={foodImage} alt="Comida" />
        </section>
      </main>
    </>
  )
}
