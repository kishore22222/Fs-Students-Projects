import homeBg from "../assets/kholi/bg.png";

const Home = () => {
  return (
    <div
      className="home-background"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="home-overlay">
        <div className="home-wrapper text-center">
          <h1 className="hero-title">Welcome to Cricket Tribute</h1>
          <p className="hero-subtitle">
            Select a player from the navbar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;