import React, { useState } from "react";
import Sidebar from "./sidebar";
import Logo from "./logo";
import styles from "./Recomm.module.css"; // Import the CSS module

const Recomm = () => {
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [energy, setEnergy] = useState("");
  const [release, setRelease] = useState("");
  const [purpose, setPurpose] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultMessage = `
      <h2>Your Selections:</h2>
      <p><strong>Mood:</strong> ${mood}</p>
      <p><strong>Genre:</strong> ${genre}</p>
      <p><strong>Energy:</strong> ${energy}</p>
      <p><strong>Release Preference:</strong> ${release}</p>
      <p><strong>Purpose:</strong> ${purpose}</p>
    `;
    setResult(resultMessage);
  };

  return (
    <div className={styles.recommFinal}>
      <div className={styles.recommPage}>
        {/* Sidebar and Logo are outside the form container */}
        <Sidebar />
        <Logo />

        <div className={styles.container}>
          <h1>Find Your Perfect Song!</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.question}>
              <label>1. What is your current mood?</label>
              <input
                type="radio"
                id="happy"
                name="mood"
                value="Happy"
                onChange={(e) => setMood(e.target.value)}
              />
              <label htmlFor="happy">Happy</label>
              <input
                type="radio"
                id="relaxed"
                name="mood"
                value="Relaxed"
                onChange={(e) => setMood(e.target.value)}
              />
              <label htmlFor="relaxed">Relaxed</label>
              <input
                type="radio"
                id="energetic"
                name="mood"
                value="Energetic"
                onChange={(e) => setMood(e.target.value)}
              />
              <label htmlFor="energetic">Energetic</label>
              <input
                type="radio"
                id="melancholy"
                name="mood"
                value="Melancholy"
                onChange={(e) => setMood(e.target.value)}
              />
              <label htmlFor="melancholy">Melancholy</label>
            </div>

            <div className={styles.question}>
              <label>2. Which genre are you in the mood to explore?</label>
              <input
                type="radio"
                id="pop"
                name="genre"
                value="Pop"
                onChange={(e) => setGenre(e.target.value)}
              />
              <label htmlFor="pop">Pop</label>
              <input
                type="radio"
                id="rock"
                name="genre"
                value="Rock"
                onChange={(e) => setGenre(e.target.value)}
              />
              <label htmlFor="rock">Rock</label>
              <input
                type="radio"
                id="jazz"
                name="genre"
                value="Jazz"
                onChange={(e) => setGenre(e.target.value)}
              />
              <label htmlFor="jazz">Jazz</label>
              <input
                type="radio"
                id="classical"
                name="genre"
                value="Classical"
                onChange={(e) => setGenre(e.target.value)}
              />
              <label htmlFor="classical">Classical</label>
            </div>

            <div className={styles.question}>
              <label>3. Do you want something upbeat and energetic, or calm and soothing?</label>
              <input
                type="radio"
                id="upbeat"
                name="energy"
                value="Upbeat and energetic"
                onChange={(e) => setEnergy(e.target.value)}
              />
              <label htmlFor="upbeat">Upbeat and energetic</label>
              <input
                type="radio"
                id="calm"
                name="energy"
                value="Calm and soothing"
                onChange={(e) => setEnergy(e.target.value)}
              />
              <label htmlFor="calm">Calm and soothing</label>
              <input
                type="radio"
                id="mix"
                name="energy"
                value="A mix of both"
                onChange={(e) => setEnergy(e.target.value)}
              />
              <label htmlFor="mix">A mix of both</label>
              <input
                type="radio"
                id="different"
                name="energy"
                value="Neither, something different"
                onChange={(e) => setEnergy(e.target.value)}
              />
              <label htmlFor="different">Neither, something different</label>
            </div>

            <div className={styles.question}>
              <label>4. Do you prefer newer releases or classic tracks?</label>
              <input
                type="radio"
                id="newer"
                name="release"
                value="Newer releases"
                onChange={(e) => setRelease(e.target.value)}
              />
              <label htmlFor="newer">Newer releases</label>
              <input
                type="radio"
                id="classic"
                name="release"
                value="Classic tracks"
                onChange={(e) => setRelease(e.target.value)}
              />
              <label htmlFor="classic">Classic tracks</label>
              <input
                type="radio"
                id="both"
                name="release"
                value="Both, as long as it sounds good"
                onChange={(e) => setRelease(e.target.value)}
              />
              <label htmlFor="both">Both, as long as it sounds good</label>
              <input
                type="radio"
                id="noPreference"
                name="release"
                value="No preference"
                onChange={(e) => setRelease(e.target.value)}
              />
              <label htmlFor="noPreference">No preference</label>
            </div>

            <div className={styles.question}>
              <label>5. What do you want the song to help you with?</label>
              <input
                type="radio"
                id="focus"
                name="purpose"
                value="Focus"
                onChange={(e) => setPurpose(e.target.value)}
              />
              <label htmlFor="focus">Focus</label>
              <input
                type="radio"
                id="unwind"
                name="purpose"
                value="Unwind"
                onChange={(e) => setPurpose(e.target.value)}
              />
              <label htmlFor="unwind">Unwind</label>
              <input
                type="radio"
                id="pumped"
                name="purpose"
                value="Get pumped up"
                onChange={(e) => setPurpose(e.target.value)}
              />
              <label htmlFor="pumped">Get pumped up</label>
              <input
                type="radio"
                id="reflect"
                name="purpose"
                value="Reflect and relax"
                onChange={(e) => setPurpose(e.target.value)}
              />
              <label htmlFor="reflect">Reflect and relax</label>
            </div>

            <button type="submit" className={styles.submitButton}>See Your Results</button>
          </form>
          <div
            className={styles.result}
            dangerouslySetInnerHTML={{ __html: result }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Recomm;
