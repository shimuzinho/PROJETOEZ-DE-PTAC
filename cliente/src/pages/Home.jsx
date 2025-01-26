import { useState, useEffect } from 'react';
import searchSkins from '../utils/searchSkins.jsx';
import List from '../components/List.jsx'
import Register from '../components/Register.jsx';
import Fonts from '../components/Fonts.jsx';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    searchSkins(setSkins);
  }, []);

  return (
    <>
      <header>
        <div className={styles.containerHeader}>
        <div className={styles.invertedTrapeze}></div>
          <div className={styles.trapeze}>
            <h2>STORE</h2>
          </div>
          <div className={styles.reverseInvertedTrapeze}></div>
        </div>
      </header>
      <main>
        <div>
          <List skins={skins} setSkins={setSkins} />
        </div>
        <div>
          <Register setSkins={setSkins} />
        </div>
      </main>
      <footer>

      </footer>
    </>
  );
};