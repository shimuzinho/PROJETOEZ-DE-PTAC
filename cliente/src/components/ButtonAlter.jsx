import { useNavigate } from "react-router-dom";

export default function ButtonAlter({ id }) {
  const navigation = useNavigate();

  return (
    <>
      <button
      onClick={() => {
        navigation(`/alter/${id}`);
      }}
      >
        Alter
      </button>
    </>
  );
};