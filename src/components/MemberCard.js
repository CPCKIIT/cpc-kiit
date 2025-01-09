const MemberCard = ({ image, onImageUpload }) => {
    return (
      <div
        className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60
                   bg-white flex items-center justify-center shadow-md overflow-hidden"
      >
        {image ? (
          <img src={image} alt="Member" className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-3xl md:text-4xl font-bold">+</div>
        )}
  
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={onImageUpload}
        />
      </div>
    );
  };
  
  export default MemberCard;
  