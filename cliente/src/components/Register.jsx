import { useForm } from 'react-hook-form';
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
    } catch (error) {
      console.error(error);
      alert('Registration not completed.');
    };
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="name">Skin name: </label>
        <input name="name" {...register('name', { required: 'Name is mandatory.' })}></input>
        {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
        <label htmlFor="weapon">Skin weapon: </label>
        <input name="weapon" {...register('weapon', { required: 'Weapon is mandatory.' })}></input>
        {errors.weapon && <p className={styles.errorMessage}>{errors.weapon.message}</p>}
        <label htmlFor="image">Skin image: </label>
        <input name="image" {...register('image', { required: 'Image is mandatory.' })}></input>
        {errors.image && <p className={styles.errorMessage}>{errors.image.message}</p>}
        <label htmlFor="price">Skin price: </label>
        <input name="price" type="number"
          {...register('price', {
            required: 'Price is mandatory.',
            valueAsNumber: true,
            validate: value => value > 0 || 'Price must be a positive number',
          })}></input>
        {errors.price && <p className={styles.errorMessage}>{errors.price.message}</p>}
        <label htmlFor="variants">Skin variants: </label>
        <input name="variants" {...register('variants', { required: 'Variants is mandatory.' })}></input>
        {errors.variants && <p className={styles.errorMessage}>{errors.variants.message}</p>}
        <label htmlFor="rarity">Skin rarity: </label>
        <select name="rarity" {...register('rarity')}>
          <option value="Deluxe">Deluxe</option>
          <option value="Premium">Premium</option>
          <option value="Ultra">Ultra</option>
          <option value="Exclusive">Exclusive</option>
        </select>
        <button className={styles.buttonRegister}>Register</button>
      </form>
    </>
  );
};