import { useEffect, useState } from "react";
import './pagestyle.css';
import { FaBookmark } from "react-icons/fa";

export default function Second_Page() {
    const [allPhotos, setAllPhotos] = useState([]);
    const [savedIds, setSavedIds] = useState([]);
    const baseurl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {

        fetch(`${baseurl}/photos`)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
            .catch(err => console.error("Error fetching photos:", err));


        const saved = JSON.parse(localStorage.getItem("savedPhotos")) || [];
        setSavedIds(saved);
    }, []);


    const savedPhotos = allPhotos.filter(photo => savedIds.includes(photo.id));

    return (
        <div>
            <h4 className="gallery-title">Saved Photos</h4>

            <div className="gallery-grid">
                {savedPhotos.length > 0 ? (
                    savedPhotos.map(photo => (
                        <div className="gallery-card" key={photo.id}>
                            <img className="gallery-img" src={photo.src} alt={photo.title} />
                            <p className="gallery-text">{photo.title}</p>
                            <div className="save-icon">
                                <FaBookmark />
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center", marginTop: "20px" }}>
                        No saved photos yet!
                    </p>
                )}
            </div>
        </div>
    );
}
