export default async function searchSkins(setSkin, id) {
  try {
    const response = await fetch(`http://localhost:3000/skins${id}`);
    const data = await response.json();
    setSkin(data.data);
  } catch (err) {
    console.error(err);
    alert('Error when searching for skins.');
  }
};