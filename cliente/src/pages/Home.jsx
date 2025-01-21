import { useNavigate } from 'react-router-dom';
import List from '../components/List.jsx'

export default function Home() {
  const navigation = useNavigate();

  return (
    <>
      <header>

      </header>
      <main>
        <div>
          <button onClick={() => navigation('/consult')}>Consult</button>
          <button onClick={() => navigation('/register')}>Register</button>
        </div>
        <div>
          <List />
        </div>
      </main>
      <footer>

      </footer>
    </>
  );
};