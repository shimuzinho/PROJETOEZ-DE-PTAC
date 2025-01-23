import { useState, useEffect } from 'react';
import searchSkins from '../utils/searchSkins.jsx';
import List from '../components/List.jsx'
import Register from '../components/Register.jsx';

export default function Home() {
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    searchSkins(setSkins);
  }, []);

  return (
    <>
      <header>

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