import { useParams } from "react-router-dom";

export default function Alter() {
  const { id } = useParams();

  const handleAlter = async () => {
    const newSkin = {};

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
      alert('Erro na alteração.')
    }
  };
  
  return (
    <>
      <button onClick={handleAlter}>Alter</button>
    </>
  );
};