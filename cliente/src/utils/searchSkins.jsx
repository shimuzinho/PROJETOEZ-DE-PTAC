export default async function searchSkins(setSkins) {
  try {
    const response = await fetch('http://localhost:3000/skins');
    const data = await response.json();
    setSkins(data.data);
  } catch (err) {
    console.error(err);
    alert('Error when searching for skins.');
  }
};