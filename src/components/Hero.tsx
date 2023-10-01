import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
    <div className="hero-container">
      <Image src='/photo__profil.jpg' className="profile-img" width={200} height={200} alt="Yohann's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Yohann 👋</h1>
        <p>
          I'm a software developer based in Lille, France. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className="social-icons">
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
    </div>
  );
}

export default Hero;