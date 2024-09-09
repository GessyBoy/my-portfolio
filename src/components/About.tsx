import Image from 'next/image';

const About = (): JSX.Element => {
  return (
    <div className="about-container">
      <h2>À propos</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          En tant que développeur, je suis passionné par la création de solutions élégantes et efficaces pour résoudre des problèmes complexes. Avec une solide expérience en développement de logiciels, je me concentre sur les technologies web telles que HTML, CSS et JavaScript. J'aime travailler à la fois sur le front-end et le back-end des applications, en recherchant constamment des moyens d'optimiser les performances, d'améliorer l'expérience utilisateur et de garantir une qualité de code irréprochable.
          </p>
          <p>Au cours de ma carrière, j'ai participé à une grande variété de projets, allant de simples sites web statiques à des applications complexes de niveau entreprise. J'ai acquis une expertise avec divers outils et frameworks de développement, notamment React, Angular, Node.js et PHP. Toujours curieux d'apprendre et d'explorer de nouvelles technologies, je cherche sans cesse à perfectionner mes compétences et à enrichir mes connaissances.</p>
        </div>
        <div className="about-img">
        <Image src='/on_ouvre_ou_pas.jpg' alt='about-me' className="profile-img" width={300} height={500} />
        </div>
      </div>
    </div>
  );
}

export default About;