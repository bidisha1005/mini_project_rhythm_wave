import React, { useEffect, useState } from "react";
import "./userprofile.css";
import "./sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);  // Store user data
  const [loading, setLoading] = useState(true);  // For loading state
  const [error, setError] = useState("");  // For error state

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");  // Get the JWT token from localStorage

        if (!token) {
          setError("No token found, please login again.");
          return;
        }

        // Fetch user profile data from the backend (only user name here)
        const response = await axios.get("http://localhost:3000/api/users/user/profile", {
          headers: {
            "x-auth-token": token,  // Send the token in the request header
          },
        });

        setUser(response.data);  // Set user data in state
        setLoading(false);  // Set loading to false once data is fetched
      } catch (err) {
        setError("Failed to fetch user profile.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>;  // Show error message if there's an issue
  }

  return (
    <div>
      {/* Logo Section */}
      <div className="logo-container">
        <img src="../logo.png" alt="Logo" className="logo" />
      </div>

      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/homepage" className="sidebar-link">
                <img src="../home.png" alt="Home Icon" className="icon" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/musicvideo" className="sidebar-link">
                <img src="../clapperboard.png" alt="Video Icon" className="icon" />
                <span>Music Video</span>
              </Link>
            </li>
            <li>
              <Link to="/library" className="sidebar-link">
                <img src="../library.png" alt="Library Icon" className="icon" />
                <span>Your Library</span>
              </Link>
            </li>
            <li>
              <Link to="/listeninghistory" className="sidebar-link">
                <img src="../history.png" alt="History Icon" className="icon" />
                <span>Listening History</span>
              </Link>
            </li>
            <li>
              <Link to="/recomm" className="sidebar-link">
                <img src="../question-sign.png" alt="Question Icon" className="icon" />
                <span>SOTD</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-image">
              <img src="../profile.jpg" alt="User Profile" className="profile-img" />
            </div>
            <div className="profile-info">
              <h2 id="user">{user?.name}</h2>  {/* Display user's name */}
              <div className="followers-info">
                <p>• 123 Followers</p> {/* Static number for followers */}
                <p>• 65 Following</p> {/* Static number for following */}
              </div>
            </div>
          </div>

          {/* Public Playlists */}
          <h3>Public Playlist</h3>
          <div className="playlists">
            {[
              { img: "../download5.jpeg", title: "Daily Mix 1" },
              { img: "../download6.jpeg", title: "Daily Mix 2" },
              { img: "../download4.jpg", title: "Top Songs 2023" },
              { img: "../download7.jpeg", title: "Chill Beats" },
              { img: "../download8.jpeg", title: "Dance Mix" },
              { img: "../download2.jpg", title: "Top 50 India" },
            ].map((playlist, index) => (
              <div className="playlist-item" key={index}>
                <div
                  className="playlist"
                  style={{
                    backgroundImage: `url(${playlist.img})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <p>{playlist.title}</p>
              </div>
            ))}
            </div>

{/* Followers */}
<h3>Followers</h3>
<div className="followers">
  {[
    { img: "../p1.jpeg", name: "Jassie" },
    { img: "../p2.jpeg", name: "Liya" },
    { img: "../p3.jpeg", name: "Maria" },
    { img: "../p4.jpeg", name: "Kiana" },
    { img: "../p5.jpeg", name: "Eva" },
    { img: "../p6.jpeg", name: "Michael" },
  ].map((follower, index) => (
    <div className="follower-item" key={index}>
      <div
        className="follower"
        style={{
          backgroundImage: `url(${follower.img})`,
          backgroundSize: "cover",
        }}
      ></div>
      <p>{follower.name}</p>
    </div>
  ))}
</div>

{/* Following */}
<h3>Following</h3>
<div className="following">
  {[
    { img: "../a6.jpeg", name: "Billie Eilish" },
    { img: "../a4.jpeg", name: "Metro Boomin" },
    { img: "../a5.jpeg", name: "Lana Del Ray" },
    { img: "../a2.jpeg", name: "Coldplay" },
    { img: "../a3.jpeg", name: "Sabrina Carpenter" },
    { img: "../a1.jpeg", name: "Bruno Mars" },
  ].map((follow, index) => (
    <div className="follow-item" key={index}>
      <div
        className="follow"
        style={{
          backgroundImage: `url(${follow.img})`,
          backgroundSize: "cover",
        }}
      ></div>
      <p>{follow.name}</p>
    </div>
  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
