function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Meta
      </a>

      <div className="nav-links">
        <a href="#">AI Glasses</a>
        <a href="#">Meta AI</a>
        <a href="#">Apps</a>
        <a href="#">About Us</a>
        <a href="#">Build With Us</a>
        <a href="#">Our Technologies</a>
      </div>

      <div className="nav-actions">
        <button className="contact-btn">Contact Us</button>

        <button className="menu-btn">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;