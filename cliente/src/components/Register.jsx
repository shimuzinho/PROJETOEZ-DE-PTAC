import { useForm } from 'react-hook-form';
import searchSkins from '../utils/searchSkins';
import styles from '../styles/Register.module.css'

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleRegister = async (skin) => {
    try {
      const response = await fetch('http://localhost:3000/skins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(skin)
      });
      alert('Registration completed successfully.');
      if (response.ok) {
        location.reload();
      }
    } catch (err) {
      console.error(err);
      alert('Registration not completed.');
    };
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label forhtml="name">Skin name: </label>
        <input name="name" {...register('name', { required: 'Name is mandatory.' })}></input>
        {errors.name && <p>{errors.name.message}</p>}
        <label forhtml="weapon">Skin weapon: </label>
        <input name="weapon" {...register('weapon', { required: 'Weapon is mandatory.' })}></input>
        {errors.weapon && <p>{errors.weapon.message}</p>}
        <label forhtml="image">Skin image: </label>
        <input name="image" {...register('image', { required: 'Image is mandatory.' })}></input>
        {errors.image && <p>{errors.image.message}</p>}
        <label forhtml="price">Skin price: </label>
        <input name="price" {...register('price', { required: 'Price is mandatory.' })}></input>
        {errors.price && <p>{errors.price.message}</p>}
        <label forhtml="variants">Skin variants: </label>
        <input name="variants" {...register('variants', { required: 'Variants is mandatory.' })}></input>
        {errors.variants && <p>{errors.variants.message}</p>}
        <label forhtml="rarity">Skin rarity: </label>
        <select {...register('rarity')}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <button>Register</button>
      </form>
    </>
  );
};