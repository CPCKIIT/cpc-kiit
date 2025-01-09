import React, { useState } from "react";
import MemberCard from "./MemberCard.js";

const MembersCards = () => {
  const [images, setImages] = useState([
    "/default1.jpg",
    "/default2.jpg",
    "/default3.jpg",
    "/default4.jpg",
  ]);

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#0f294c] p-6 md:p-12 rounded-lg w-screen mx-auto">
      <h2 className="text-white mb-10 text-3xl md:text-5xl text-left font-semibold">Members</h2>

      <div className="flex flex-wrap gap-16">
        {images.map((image, index) => (
          <MemberCard
            key={index}
            image={image}
            onImageUpload={(event) => handleImageUpload(index, event)}
          />
        ))}

        {/* Button for navigation */}
        <button className="text-white text-3xl md:text-5xl font-bold p-4">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default MembersCards;
