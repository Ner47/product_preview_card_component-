import styles from './App.module.css';
import { ProductCard } from '../features/productCard';

function App() {
  return (
    <main className={styles.page}>
      <ProductCard></ProductCard>
    </main>
  )
}

export default App
