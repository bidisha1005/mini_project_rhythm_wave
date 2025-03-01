import React from 'react';
import styles from './AboutUs.module.css';
import Logo from './logo'; // Import the Logo component

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <Logo /> {/* Add the Logo component */}
      <h1>About Us</h1>
      <p>
        Welcome to our music platform, where our mission is to deliver an unparalleled music experience by
        providing a diverse array of songs, curated playlists, and more.
      </p>
      <p>
        Our platform is thoughtfully designed to connect users with their favorite music while facilitating
        the seamless discovery of new tracks.
      </p>
      <p>
        By prioritizing personalization, optimizing performance, and enhancing customization, we aim to
        cultivate enduring user loyalty.
      </p>
      <div className={styles.team}>
        <h2>Meet the Team</h2>
        <div className={styles.teamCircles}>
          <TeamMember name="Bhoomika H B" initials="BHB" />
          <TeamMember name="Bhumi Sinha" initials="BS" />
          <TeamMember name="Bidisha Paul" initials="BP" />
        </div>
      </div>
    </div>
  );
}

function TeamMember({ name, initials }) {
  return (
    <div className={styles.teamMember}>
      <div className={styles.circle} title={name}>
        {initials}
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}

export default AboutUs;
