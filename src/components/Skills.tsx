const Skills = (): JSX.Element => {
    return (
      <div className="skills-container">
        <h2>Compétences</h2>
        <div className="grid-skills">
          <div className="skill-card html" title="Html5">
            <i className="fa-brands fa-html5 html-icon"></i>
            <p>HTML</p>
          </div>
          <div className="skill-card css" title="Sass - TailWind">
            <i className="fa-brands fa-css3-alt css-icon"></i>
            <p>CSS</p>
          </div>
          <div className="skill-card js" title="Javascript - Typescript">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react" title="React - Nextjs">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card vuejs" title="Vue.js">
            <i className="fa-brands fa-vuejs vuejs-icon"></i>
            <p>Vue</p>
          </div>
          <div className="skill-card node" title="Expressjs">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div className="skill-card php" title="PHP - Symphony">
            <i className="fa-brands fa-php php-icon"></i>
            <p>PHP</p>
          </div>
          <div className="skill-card wordpress" title="Wordpress">
            <i className="fa-brands fa-wordpress wordpress-icon"></i>
            <p>Wordpress</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skills;
