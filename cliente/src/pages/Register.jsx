import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigate();

  const handleRegister = async (skin) => {
    try {
      const response = await fetch('http://localhost:3000/skins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(skin)
      });
      if (response.ok) {
        navigation('/');
      }
    } catch (err) {
      console.error(err);
      alert('Registro realizado com sucesso.');
    };
  };

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label forhtml="name">Skin name:
          <input name="name" {...register('name', { required: 'Name is mandatory.' })}></input>
        </label>
        {errors.name && <p>{errors.name.message}</p>}
        <label forhtml="weapon">Skin weapon:
          <input name="weapon" {...register('weapon', { required: 'Weapon is mandatory.' })}></input>
        </label>
        {errors.weapon && <p>{errors.weapon.message}</p>}
        <label forhtml="image">Skin image:
          <input name="image" {...register('image', { required: 'Image is mandatory.' })}></input>
        </label>
        {errors.image && <p>{errors.image.message}</p>}
        <label forhtml="price">Skin price:
          <input name="price" {...register('price', { required: 'Price is mandatory.' })}></input>
        </label>
        {errors.price && <p>{errors.price.message}</p>}
        <label forhtml="bundle">Skin bundle:
          <input name="bundle" {...register('bundle', { required: 'Bundle is mandatory.' })}></input>
        </label>
        {errors.bundle && <p>{errors.bundle.message}</p>}
        <label forhtml="variants">Skin variants:
          <input name="variants" {...register('variants', { required: 'Variants is mandatory.' })}></input>
        </label>
        {errors.variants && <p>{errors.variants.message}</p>}
        <label forhtml="rarity">Skin rarity:
          <select {...register('rarity')}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <button>Registrar</button>
      </form>
    </>
  );
}; 
