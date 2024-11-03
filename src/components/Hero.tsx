import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
    <div className="hero-container">
      <Image src='/photo__profil.jpg' className="profile-img" width={200} height={200} alt="Yohann's personal headshot" />
      <div className="hero-text">
        <h1>Salut, moi c'est Yohann 👋</h1>
        <p>
        Développeur de logiciels basé à Lille (59), je me spécialise dans la création et la conception de sites web et d'applications. Je propose également des services de reprise de projets existants et de maintenance de sites web.
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