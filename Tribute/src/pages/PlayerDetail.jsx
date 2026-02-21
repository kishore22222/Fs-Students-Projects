import { useParams } from "react-router-dom";
import { players } from "../data";

export default function PlayerDetail() {
  const { id } = useParams();
  const player = players.find((p) => p.id === id);

  if (!player)
    return <h2 className="text-white text-center">Player Not Found</h2>;

  // 🔥 Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert("🎉 Fan Registration Successful!");
  };

  return (
    <div
      className="player-background"
      style={{ backgroundImage: `url(${player.background})` }}
    >
      <div className="overlay">
        <div className="player-container">

          <h1 className="text-center mb-4">{player.name}</h1>

          <div className="details">
            <p><strong>Role:</strong> {player.role}</p>
            <p><strong>Country:</strong> {player.country}</p>
          </div>

          <h3 className="mt-4">Achievements</h3>
          <ul className="achievements">
            {player.achievements.map((ach, index) => (
              <li key={index}>{ach}</li>
            ))}
          </ul>

          {/* GALLERY */}
          <h2 className="gallery-title">Gallery</h2>

          <div className="gallery-grid">
            {player.images.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt="player" />
              </div>
            ))}
          </div>

          {/* FAN FORM */}
          <div className="form-section">
            <h2>Fan Registration</h2>

            <form className="fan-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="form-row">
                <input type="tel" placeholder="Phone Number" />
                <input type="number" placeholder="Age" />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="Favorite Format" />
              </div>

              <textarea
                placeholder="Why do you admire this player?"
                rows="4"
              ></textarea>

              <button type="submit">Register</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}