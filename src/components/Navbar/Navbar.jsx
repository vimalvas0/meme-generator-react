import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <img src="/Troll Face.png" alt="Logo- Laughing images" />
          <h2>Meme Generator</h2>
        </div>
        <p className="navbar__right">by Vimal with 💗</p>
      </div>
    </nav>
  );
}
