import { useNavigate } from 'react-router-dom';
import List from '../components/List.jsx'

export default function Consult() {
  const navigation = useNavigate();


  return (
    <>
      <button onClick={() => navigation('/')}>Return</button>
      <List />
    </>
  );
};