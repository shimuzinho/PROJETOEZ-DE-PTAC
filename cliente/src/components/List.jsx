import { useEffect, useState } from 'react';
import searchSkins from '../utils/searchSkins';
import ButtonDelete from './ButtonDelete';
import ButtonAlter from './ButtonAlter';

export default function List() {
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    searchSkins(setSkins);
  }, []);

  return (
    <>
      {
        skins.map(el =>
          <div key={el.id}>
            <img src={el.images}></img>
            <div>
              <p>{el.name}</p>
              <p>{el.price}</p>
            </div>
            <ButtonDelete id={el.id} setSkins={setSkins} />
            <ButtonAlter id={el.id}/>
          </div>
        )
      }
    </>
  );
};