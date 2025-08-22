import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";

export default function Fisrt_Page() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/photos").then(res => res.json()).then(data => setPhotos(data))
    }, []);
    
    return (
        <div>
            <Navbar />
            <h1>Gallery</h1>
            <div>
                {photos.map(photo => (
                    <div key={photo.id}>
                        <img src={photo.src} alt={photo.title} />
                        <p>{photo.title}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}
