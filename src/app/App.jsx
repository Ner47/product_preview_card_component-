import styles from './App.module.css';
import { iconCart, imgProductDesk, imgProductMobile } from '../shared/assets';

function App() {
  return (
    <main className={styles.page}>
      <article className={styles.product}>
        <picture>
          <source srcSet={imgProductDesk} media='(min-width: 769px)'/>
          <img 
            className={styles.product__img} 
            src={imgProductMobile} 
            alt='A bottle of Chanel perfume' 
          />
        </picture>

        <div className={styles.product__card}>
          <span className={styles.product__tag}>PERFUME</span>

          <h2 className={styles.product__title}>Gabrielle Essence Eau De Parfum</h2>

          <p className={styles.product__text}>
            A floral, solar and voluptuous interpretation composed by 
            Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          
          <div className={styles.product__price}>
            <span className={styles.product__newPrice}>$149.99</span>
            <s className={styles.product__oldPrice}>$169.99</s>
          </div>
          
          <button type='button' className={styles.product__button}>
            <img src={iconCart} alt='' aria-hidden='true' />
            Add to Cart
          </button>
        </div>
      </article>
    </main>
  )
}

export default App
