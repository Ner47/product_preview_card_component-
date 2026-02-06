import styles from './App.module.css';
import { iconCart, imgProductDesk, imgProductMobile } from '../shared/assets';

function App() {
  return (
    <main className={styles.page}>
      <article className={styles.product}>
        <picture>
          <source srcSet={imgProductDesk} media='(min-width: 768px)'/>
          <img className={styles.product__img} src={imgProductMobile} alt="A bottle of Chanel perfume" />
        </picture>
        <div className={styles.product__card}>
          <span className={styles.product__teg}>PERFUME</span>
          <h2 className={styles.product__title}>Gabrielle Essence Eau De Parfum</h2>
          <p className={styles.product__text}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <span className={styles.product__newPrice}>$149.99</span>
          <span className={styles.product__oldPrice}>$169.99</span>
          <button className={styles.product__button}><img src={iconCart} alt="icon cart" />Add to Cart</button>
        </div>
      </article>
    </main>
  )
}

export default App
