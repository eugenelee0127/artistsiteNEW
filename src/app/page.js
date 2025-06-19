import React from 'react';
import { FaInstagram, FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';

export default function Home() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.cardContainer}>
        {/* Centered Name */}
        <h1 style={styles.name}>EUGENE LEE</h1>

        {/* Flute Image as a Separator */}
        <div style={styles.fluteContainer}>
          <img 
            src="/fluteimage2.png" 
            alt="Flute Separator" 
            style={styles.fluteImage} 
          />
        </div>

        {/* Social Media Icons */}
        <div style={styles.socialLinks}>
          <a href="https://www.instagram.com/eugene.__lee" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={styles.icon} />
          </a>
          <a href="https://www.youtube.com/@CubingFlutist" target="_blank" rel="noopener noreferrer">
            <FaYoutube style={styles.icon} />
          </a>
          <a href="https://music.youtube.com/channel/UCrjsd0OYowVdDZNgvkfv9lg" target="_blank" rel="noopener noreferrer">
            <SiYoutubemusic style={styles.icon} />
          </a>
          <a href="https://open.spotify.com/artist/37tG8lF6Kh3cpf6tfvEHsA" target="_blank" rel="noopener noreferrer">
            <FaSpotify style={styles.icon} />
          </a>
          <a href="https://music.apple.com/artist/eugene-lee/1773815454" target="_blank" rel="noopener noreferrer">
            <FaApple style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/eugene-lee-0965952b5/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#111', // Dark background color
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Transparent to show white outline
    color: '#fff',
    width: '90%',
    maxWidth: '350px',
    height: '250px',
    borderRadius: '15px', // Rounded corners
    border: '2px solid #fff', // White outline
    padding: '20px',
    textAlign: 'center',
    boxSizing: 'border-box',
    fontFamily: 'Metropolitan, sans-serif', // Updated font to Metropolitan
  },
  name: {
    fontSize: '1.8rem',
    fontWeight: '500',
    marginBottom: '10px',
  },
  fluteContainer: {
    marginBottom: '20px', // Space between the name and the icons
    display: 'flex',
    justifyContent: 'center',
  },
  fluteImage: {
    width: '100%', // Adjust width to fit the container
    maxWidth: '300px', // Optional: Max width for responsiveness
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#fff',
    transition: 'transform 0.2s, color 0.3s',
  },
};