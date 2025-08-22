export default function ToggleSave(photo) {
  let saved = JSON.parse(localStorage.getItem("savedPhotos")) || [];
  const exists = saved.find((p) => p.id === photo.id);
  if (exists) {
    saved = saved.filter((p) => p.id !== photo.id);
  } else {
    saved.push(photo);
  }
  localStorage.setItem("savedPhotos", JSON.stringify(saved));
  return saved.map((p) => p.id);
}
