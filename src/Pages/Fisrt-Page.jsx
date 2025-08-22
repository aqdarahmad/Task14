import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import './pagestyle.css'

export default function Fisrt_Page() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/photos").then(res => res.json()).then(data => setPhotos(data))
    }, []);

    return (
        <div>
            <Navbar />
            <h1 className="gallery-title">Gallery</h1>

            <div className="gallery-grid">
                {photos.map((photo) => (
                    <div className="gallery-card" key={photo.id}>
                        <img className="gallery-img" src={photo.src} alt={photo.title} />
                        <p className="gallery-text">{photo.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}
