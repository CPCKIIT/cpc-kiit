import React, { useEffect, useState } from "react";
import "./ui-styles/Hero.css"; // Ensure this CSS is imported

const Hero = () => {
  const sentences = [
    "Securing Your Digital Frontier.",
    "Trust in Protection, Trust in Us.",
    "Guardians of Cyber Space.",
    "Safeguarding your Digital Identity.",
    "Fortify your Cyber Defence."
  ];

  const [currentSentence, setCurrentSentence] = useState(sentences[0]); // Initial sentence
  const [fade, setFade] = useState(false); // Fade state

  useEffect(() => {
    const sentenceInterval = setInterval(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        setCurrentSentence(prev => {
          const currentIndex = sentences.indexOf(prev);
          return sentences[(currentIndex + 1) % sentences.length]; // Cycle through sentences
        });
        setFade(false); // Start fade in
      }, 1000); // Wait for fade out duration
    }, 5000); // Change sentence every 5 seconds

    return () => clearInterval(sentenceInterval); // Cleanup on unmount
  }, [sentences]);

  return (
    <>
      <div className="bg h-screen relative">
        <div className="flex flex-col items-center justify-center h-full px-5">
          <div className="lock-background grid place-content-center h-60 sm:h-80 md:h-96 px-5 sm:px-10 lg:px-20">
          </div>
          <div className={`text-xs sm:text-sm bruno-ace-regular text-white absolute top-10 sm:top-20 right-3 sm:right-5 transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
            {currentSentence}
          </div>
          <div className="text-4xl sm:text-6xl md:text-8xl bruno-ace-regular text-white text-center absolute">
            Cyber Security
          </div>
          <div className="mt-10 sm:mt-5">
            <button className="uppercase px-3 sm:px-5 bruno-ace-regular text-lg sm:text-xl pt-2 sm:pt-3 pl-3 sm:pl-5 py-2 border-2 border-slate-600 bg-indigo-800 hover:bg-indigo-900 duration-300 active:translate-y-1 active:translate-x-1 mb-10">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
