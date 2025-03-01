import React, { useState } from "react";
import Sidebar from "./sidebar"; 
import Logo from "./logo";
import "./Recomm1.css";

const Recomm = () => {
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [energy, setEnergy] = useState("");
  const [release, setRelease] = useState("");
  const [purpose, setPurpose] = useState("");
  const [result, setResult] = useState("");

  // List of predefined songs
  const songs = [
    { title: "Happy by Pharrel Williams", mood: "Happy", genre: "Pop", energy: "Upbeat and energetic", release: "Newer releases", purpose: "Get pumped up" },
    { title: "A Lovely Night from La La Land", mood: "Relaxed", genre: "Jazz", energy: "Calm and soothing", release: "Classic tracks", purpose: "Reflect and relax" },
    { title: "In the End by Linkin Park", mood: "Energetic", genre: "Rock", energy: "Upbeat and energetic", release: "Newer releases", purpose: "Get pumped up" },
    { title: "Tears in Heaven by Eric Clapton", mood: "Melancholy", genre: "Classical", energy: "Calm and soothing", release: "Classic tracks", purpose: "Unwind" },
    { title: "Levitating by Dua Lipa", mood: "Energetic", genre: "Pop", energy: "Upbeat and energetic", release: "Both, as long as it sounds good", purpose: "Focus" }
  ];

  // Logic for finding the best matching song
  const findRecommendation = () => {
    const recommendedSong = songs.find(song => 
      song.mood === mood &&
      song.genre === genre &&
      song.energy === energy &&
      song.release === release &&
      song.purpose === purpose
    );

    if (recommendedSong) {
      return `We recommend: <a href="${recommendedSong.link}" target="_blank">${recommendedSong.title}</a>`;
    } else {
      return "No exact match found. Try adjusting your preferences.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendation = findRecommendation();
    setResult(recommendation);
  };

  return (
    <div className="recomm-page123">
      {/* Sidebar and Logo are outside the form container */}
      <Sidebar />
      <Logo />

      <div className="recomm-container123">
        <h1 className="recomm-page-title123">Find Your Perfect Song!</h1>
        <form onSubmit={handleSubmit} className="recomm-form-container123">
          {/* Mood Question */}
          <div className="recomm-question-container123">
            <label className="recomm-question-label123">1. What is your current mood?</label>
            <input
              type="radio"
              id="happy"
              name="mood"
              value="Happy"
              onChange={(e) => setMood(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="happy" className="recomm-radio-label123">Happy</label>
            <input
              type="radio"
              id="relaxed"
              name="mood"
              value="Relaxed"
              onChange={(e) => setMood(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="relaxed" className="recomm-radio-label123">Relaxed</label>
            <input
              type="radio"
              id="energetic"
              name="mood"
              value="Energetic"
              onChange={(e) => setMood(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="energetic" className="recomm-radio-label123">Energetic</label>
            <input
              type="radio"
              id="melancholy"
              name="mood"
              value="Melancholy"
              onChange={(e) => setMood(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="melancholy" className="recomm-radio-label123">Melancholy</label>
          </div>

          {/* Genre Question */}
          <div className="recomm-question-container123">
            <label className="recomm-question-label123">2. Which genre are you in the mood to explore?</label>
            <input
              type="radio"
              id="pop"
              name="genre"
              value="Pop"
              onChange={(e) => setGenre(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="pop" className="recomm-radio-label123">Pop</label>
            <input
              type="radio"
              id="rock"
              name="genre"
              value="Rock"
              onChange={(e) => setGenre(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="rock" className="recomm-radio-label123">Rock</label>
            <input
              type="radio"
              id="jazz"
              name="genre"
              value="Jazz"
              onChange={(e) => setGenre(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="jazz" className="recomm-radio-label123">Jazz</label>
            <input
              type="radio"
              id="classical"
              name="genre"
              value="Classical"
              onChange={(e) => setGenre(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="classical" className="recomm-radio-label123">Classical</label>
          </div>

          {/* Energy Question */}
          <div className="recomm-question-container123">
            <label className="recomm-question-label123">3. Do you want something upbeat and energetic, or calm and soothing?</label>
            <input
              type="radio"
              id="upbeat"
              name="energy"
              value="Upbeat and energetic"
              onChange={(e) => setEnergy(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="upbeat" className="recomm-radio-label123">Upbeat and energetic</label>
            <input
              type="radio"
              id="calm"
              name="energy"
              value="Calm and soothing"
              onChange={(e) => setEnergy(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="calm" className="recomm-radio-label123">Calm and soothing</label>
            <input
              type="radio"
              id="mix"
              name="energy"
              value="A mix of both"
              onChange={(e) => setEnergy(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="mix" className="recomm-radio-label123">A mix of both</label>
            <input
              type="radio"
              id="different"
              name="energy"
              value="Neither, something different"
              onChange={(e) => setEnergy(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="different" className="recomm-radio-label123">Neither, something different</label>
          </div>

          {/* Release Question */}
          <div className="recomm-question-container123">
            <label className="recomm-question-label123">4. Do you prefer newer releases or classic tracks?</label>
            <input
              type="radio"
              id="newer"
              name="release"
              value="Newer releases"
              onChange={(e) => setRelease(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="newer" className="recomm-radio-label123">Newer releases</label>
            <input
              type="radio"
              id="classic"
              name="release"
              value="Classic tracks"
              onChange={(e) => setRelease(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="classic" className="recomm-radio-label123">Classic tracks</label>
            <input
              type="radio"
              id="both"
              name="release"
              value="Both, as long as it sounds good"
              onChange={(e) => setRelease(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="both" className="recomm-radio-label123">Both, as long as it sounds good</label>
          </div>

          {/* Purpose Question */}
          <div className="recomm-question-container123">
            <label className="recomm-question-label123">5. What is the purpose of your music selection?</label>
            <input
              type="radio"
              id="focus"
              name="purpose"
              value="Focus"
              onChange={(e) => setPurpose(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="focus" className="recomm-radio-label123">Focus</label>
            <input
              type="radio"
              id="relax"
              name="purpose"
              value="Reflect and relax"
              onChange={(e) => setPurpose(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="relax" className="recomm-radio-label123">Reflect and relax</label>
            <input
              type="radio"
              id="unwind"
              name="purpose"
              value="Unwind"
              onChange={(e) => setPurpose(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="unwind" className="recomm-radio-label123">Unwind</label>
            <input
              type="radio"
              id="pumped"
              name="purpose"
              value="Get pumped up"
              onChange={(e) => setPurpose(e.target.value)}
              className="recomm-radio-input123"
            />
            <label htmlFor="pumped" className="recomm-radio-label123">Get pumped up</label>
          </div>

          <button type="submit" className="recomm-submit-button123">Get Recommendation</button>
        </form>

        {/* Display result */}
        {result && <div className="recomm-result123" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
    </div>
  );
};

export default Recomm;
