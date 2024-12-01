import Image from 'next/image';

const About = (): JSX.Element => {
  return (
    <div className="about-container">
      <h2>À propos</h2>
      <div className="flex-about">
        <div className="about-text">
        <p> Développeur passionné, je conçois des solutions adaptées aux besoins de mes clients en utilisant différentes technologies comme Vue.js ou React pour le front-end et Symfony(PHP) ou Express.js(Node.js) pour le back-end. J'assure également la maintenance de sites WordPress en PHP. </p> 
        <p> Mon objectif est de mettre ces outils au service des besoins de mes clients, en optimisant les performances et l'expérience utilisateur(UX), tout en assurant un code de qualité. </p>
        </div>
        <div className="about-img">
        <Image src='/on_ouvre_ou_pas.jpg' alt='about-me' className="profile-img" width={300} height={500} />
        </div>
      </div>
    </div>
  );
}

export default About;