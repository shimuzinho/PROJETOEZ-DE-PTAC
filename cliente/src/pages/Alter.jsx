import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import searchSkin from "../utils/searchSkin.jsx";

export default function Alter() {
  const { id } = useParams();
  const [skin, setSkin] = useState();

  useEffect(() => {
    searchSkin(setSkin, id)
  }, [])

  const handleAlter = async () => {
    const newSkin = {};
    console.log(skin)
    try {
      await fetch(`http://localhost:3000/skins/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSkin)
      });
    } catch (err) {
      console.error(err);
      alert('Error when changing.')
    }
  };

  return (
    <>
      <button onClick={handleAlter}>Alter</button>
    </>
  );
};