const Footer = (): JSX.Element => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} Portfolio Yohann Deletrez. Tous droits réservés.
          </p>
          <div className="social_icons">
            <a
              href="https://github.com/GessyBoy"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yohann-deletrez/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
  
  export default Footer;