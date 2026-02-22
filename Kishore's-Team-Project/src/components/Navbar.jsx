import { Link, useNavigate } from "react-router-dom";
import { players } from "../data";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (

    <nav className="navbar navbar-dark bg-dark px-0">
  <div className="w-100 d-flex align-items-center px-4">
    <span className="navbar-brand cursor-pointer">🏏 Cricket Legends</span>

    <div className="ms-auto">
      {players.map((player) => (
        <Link
          key={player.id}
          className="btn btn-outline-light mx-1"
          to={`/player/${player.id}`}
        >
          {player.name}
        </Link>
      ))}

      <button
        className="btn btn-danger mx-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  </div>
</nav>
  );
};

export default Navbar;