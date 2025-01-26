import searchSkins from "../utils/searchSkins";

export default function ButtonDelete({ id, setSkins }) {
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/skins/${id}`, {
        method: 'DELETE'
      });
      searchSkins(setSkins);
    } catch (error) {
      console.error(error);
      alert('Erro ao deletar.');
    }
  };

  return (
    <>
      <button
        onClick={() =>
          handleDelete(id)
        }>
          Delete
      </button>
    </>
  );
};