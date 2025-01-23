import ButtonDelete from './ButtonDelete';
import ButtonAlter from './ButtonAlter';
import styles from '../styles/List.module.css';

export default function List({ skins, setSkins }) {
  return (
    <>
      <div className={styles.containerSkins}>
        {
          skins.map(el =>
            <div className={styles.containerSkinIndividual} key={el.id}>
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
      </div>
    </>
  );
};