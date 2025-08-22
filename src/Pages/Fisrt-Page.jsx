import { useEffect, useState } from "react";
import './pagestyle.css'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function Fisrt_Page() {
    const [photos, setPhotos] = useState([]);
    const [savedPhotos, setSavedPhotos] = useState([]);
    const baseurl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetch(`${baseurl}/photos`).then(res => res.json()).then(data => setPhotos(data))
    }, []);


    const toggleSave = (photoId) => {
        if (savedPhotos.includes(photoId)) {
            setSavedPhotos(savedPhotos.filter(id => id !== photoId));
        } else {
            setSavedPhotos([...savedPhotos, photoId]);
        }
    };


    return (
        <div>

            <h1 className="gallery-title">Gallery</h1>

            <div className="gallery-grid">
                {photos.map((photo) => (
                    <div className="gallery-card" key={photo.id}>
                        <img className="gallery-img" src={photo.src} alt={photo.title} />

                        <div
                            className="save-icon"
                            onClick={() => photo && setSavedPhotos(toggleSave(photo))}
                        >
                            {savedPhotos.includes(photo.id) ? <FaBookmark /> : <FaRegBookmark />}
                        </div>

                        <p className="gallery-text">{photo.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}
