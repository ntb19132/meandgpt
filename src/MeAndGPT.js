import React, { useState } from 'react';
import styles from './MeAndGPT.module.css';
import artwork from './artwork.jpg';

function MeAndGPT() {

  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (event) => {
    if (event.currentTarget.id === "aboutGPTCard") {
      window.location.href = "https://openai.com/blog/chatgpt";
    } else if (event.currentTarget.id === "learnMoreCard") {
      window.location.href = "https://www.gatesnotes.com/The-Age-of-AI-Has-Begun";
    } else {
      setShowModal(true);
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Me and GPT</span>
        </h1>
        <div className={styles.descriptionContainer}>
            <p className={styles.descriptionLine}>
                Our mission is to provide end-to-end solutions to customers.
            </p>
            <p className={styles.descriptionLine}>
                Our motto is "Democratized AI for All".
            </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card} id="mottoCard" onClick={handleCardClick}>
            <h2>Our Motto &rarr;</h2>
            <p>Democratized AI for All - Making AI technology and its advantages available to people from all walks of life.</p>
          </div>
          <div className={styles.card} id="aboutGPTCard" onClick={handleCardClick}>
            <h2>About GPT &rarr;</h2>
            <p>Generative Pre-trained Transformer (GPT) is a cutting-edge AI model developed by OpenAI for generating human-like text.</p>
          </div>
          <div className={styles.card} id="missionCard" onClick={handleCardClick}>
            <h2>Our Mission &rarr;</h2>
            <p>Provide end-to-end solutions to customers, empowering individuals and communities with AI technology.</p>
          </div>
          <div className={styles.card} id="learnMoreCard" onClick={handleCardClick}>
            <h2>Learn More &rarr;</h2>
            <p>Explore the world of AI and its applications in everyday life.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Nattapat Siripin & chatGPT 
          <span className={styles.logo}>
            {/* Insert your logo here */}
          </span>
        </a>
      </footer>


      {showModal && (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
            <img src={artwork} alt="Artwork" className={styles.modalImage} />
            <p className={styles.modalMessage}>The website is currently under development.</p>
            <button className={styles.modalButton} onClick={handleCloseModal}>Close</button>
            </div>
        </div>
        )}
    </div>
  );
}

export default MeAndGPT;
