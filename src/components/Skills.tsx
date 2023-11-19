const Skills = (): JSX.Element => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card html" title="Html5">
            <i className="fa-brands fa-html5 html-icon"></i>
            <p>HTML</p>
          </div>
          <div className="skill-card css" title="Css3 - TailWind">
            <i className="fa-brands fa-css3-alt css-icon"></i>
            <p>CSS</p>
          </div>
          <div className="skill-card js" title="Javascript - Typescript">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react" title="React - Next">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card angular" title="Angular">
            <i className="fa-brands fa-angular angular-icon"></i>
            <p>Angular</p>
          </div>
          <div className="skill-card node" title="Nodejs - Expressjs">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skills;
