import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <div className="header__container">
  {/* Left Content */}
  <div className="header__content">
    <h2>Hello,</h2>
    <h1>
      This is <span className="highlight">SAHIL KULRIA</span>,
    </h1>
    <h2>
      FRONT <span className="highlight-green">END DEVELOPER.</span>
    </h2>
    <CTA />
    <HeaderSocials />
  </div>

  <div className="code-display">
    <pre>
      <code>
{`const sahil = {
  name: 'Sahil Kulria',
  skills: ['Html', 'Css', 'Tailwind/Bootstrap', 'React', 'MySQL', 'MongoDB'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};
console.log(sahil.hireable());
`}
      </code>
    </pre>
  </div>
</div>

  
  );
};



export default Header;
