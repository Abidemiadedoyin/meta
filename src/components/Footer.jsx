function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">Meta</div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#">AI Glasses</a>
            <a href="#">Meta AI</a>
            <a href="#">Apps</a>
          </div>

          <div>
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Our Technologies</a>
            <a href="#">Our Mission</a>
          </div>

          <div>
            <h4>Connect</h4>
            <a href="#">Contact Us</a>
            <a href="#">Newsroom</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Meta. All rights reserved.</p>
        <p>Privacy · Terms · Cookies</p>
      </div>
    </footer>
  );
}

export default Footer;