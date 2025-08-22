import { useEffect, useState } from "react";
import './pagestyle.css';
import { FaBookmark } from "react-icons/fa";

export default function Second_Page() {
    const [savedPhotos, setSavedPhotos] = useState([]);

    useEffect(() => {

        const saved = JSON.parse(localStorage.getItem("savedPhotos")) || [];
        setSavedPhotos(saved);
    }, []);

    return (
        <div>
            <h4 className="gallery-title">Saved Photos</h4>

            <div className="gallery-grid">
                {savedPhotos.length > 0 ? (
                    savedPhotos.map(photo => (
                        photo ? (
                            <div className="gallery-card" key={photo.id}>
                                <img className="gallery-img" src={photo.src} alt={photo.title} />
                                <p className="gallery-text">{photo.title}</p>
                                <div className="save-icon">
                                    <FaBookmark />
                                </div>
                            </div>
                        ) : null
                    ))
                ) : (
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>No saved photos yet!</p>
                )}

            </div>
        </div>
    );
}
