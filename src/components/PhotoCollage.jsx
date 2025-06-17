import React from "react";
import "./PhotoCollage.css";

const photos = [
    "/public/1.jpg",
    "/public/2.jpg",
    "/public/3.jpg",
    "/public/4.jpg",
];

function PhotoCollage() {
    return (
        <div className="collage-container">
            <h2>Our Favorite Moments 📸</h2>
            <div className="photo-grid">
                {photos.map((src, index) => (
                    <div key={index} className="photo-box">
                        <img src={src} alt={`Memory ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoCollage;
