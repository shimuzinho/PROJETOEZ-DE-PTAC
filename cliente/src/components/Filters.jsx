import { useState, useEffect } from 'react';

export default function Filters({ skins, setSkinsFilter }) {
  const [text, setText] = useState();

  useEffect(() => {
    const newSkinsFilter = skins.filter(skin => skin.name.toLowerCase().includes(text.toLowerCase()));
    setSkinsFilter(newSkinsFilter);
  }, [text]);

  const reset = () => {
    setSkinsFilter(skins);
  };

  const orderAZ = () => {
    const newSkinsFilter = [...skins].sort((a, b) => a.name.localeCompare(b.name));
    setSkinsFilter(newSkinsFilter);
  };

  const orderZA = () => {
    const newSkinsFilter = [...skins].sort((a, b) => b.name.localeCompare(a.name));
    setSkinsFilter(newSkinsFilter);
  };

  const orderPrice = () => {
    const newSkinsFilter = [...skins].sort((a, b) => a.price - b.price);
    setSkinsFilter(newSkinsFilter);
  };

  const orderPriceReverse = () => {
    const newSkinsFilter = [...skins].sort((a, b) => b.price - a.price);
    setSkinsFilter(newSkinsFilter);
  };

  return (
    <div>
      <input onChange={(event) => setText(event.target.value)} />
      <button onClick={reset}>Reset</button>
      <button onClick={orderAZ}>AZ</button>
      <button onClick={orderZA}>ZA</button>
      <button onClick={orderPrice}>Price</button>
      <button onClick={orderPriceReverse}>Reverse Price</button>
    </div>
  );
};