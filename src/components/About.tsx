import Image from 'next/image';

const About = (): JSX.Element => {
  return (
    <div className="about-container">
      <h2>À propos</h2>
      <div className="flex-about">
        <div className="about-text">
        <p> Développeur passionné, je conçois des solutions adaptées aux besoins de mes clients en utilisant des technologies comme JavaScript avec React, Angular, et Node.js avec Expressjs. J'assure également la maintenance de sites WordPress en PHP. </p> <p> Mon objectif est de mettre ces outils au service des besoins de mes clients, en optimisant les performances et l'expérience utilisateur, tout en assurant un code de qualité. </p>
        </div>
        <div className="about-img">
        <Image src='/on_ouvre_ou_pas.jpg' alt='about-me' className="profile-img" width={300} height={500} />
        </div>
      </div>
    </div>
  );
}

export default About;