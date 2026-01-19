import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;
  const toRotate = [ "Agricultural Finance Failures", "Harvesting Data, Not Crops", "Unearthing Financial Truths" ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="hero-container">
      {/* Replace with your video background */}
      <video src="/sky-harvest-video.mp4" autoPlay loop muted className="hero-video" />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Sky Harvest</h1>
        <p className="typing-text">Let's Talk About <span className="txt-rotate">{text}</span><span className="cursor">|</span></p>
      </div>
    </div>
  );
};

export default HeroSection;