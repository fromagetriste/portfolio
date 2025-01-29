import React from "react";

const MyStack = () => {
  return (
    <section className="section-container" id="StackIdForScroll">
      <div className="title">
        My <span id="Stack-Gradient">Tech Stack</span>
      </div>
      <div className="sub-title">I am more focused on React</div>
      <div className="flex-container">
        <div className="gauche">
          <div className="title">Non-React tools :</div>
          <div className="items">
            <div className="gauche-items">
              <div className="glass">
                <img
                  className="gauche-logo"
                  src="/public/icons/stack/python.svg"
                  alt="python logo"
                />
                Python
              </div>
              <div className="glass">
                <img
                  className="gauche-logo"
                  src="/public/icons/stack/django.svg"
                  alt="django logo"
                />
                Django
              </div>
              <div className="glass">
                <img
                  className="gauche-logo"
                  src="/public/icons/stack/panda.svg"
                  alt="panda logo"
                />
                Panda
              </div>
            </div>
            <div className="right-items">
              <div className="glass">
                <img
                  className="gauche-logo"
                  src="/public/icons/stack/tailwind.svg"
                  alt="sass logo"
                />
                Tailwind / SASS
              </div>
              <div className="glass" id="typescript-shadow">
                <img
                  className="gauche-logo"
                  src="/public/icons/stack/typescript.svg"
                  alt="typescript logo"
                />
                TypeScript
              </div>
              <div className="glass">
                <img
                  className="gauche-logo"
                  src="/public/icons/stack/github.svg"
                  alt="github logo"
                />
                GitHub
              </div>
            </div>
          </div>
        </div>

        <div className="droite">
          <div className="glass-card-react">
            <div className="logo-react-container">
              <img
                src="/public/icons/stack/react-logo-pink.svg"
                alt="logo react"
                className="card-logo-react"
              />
            </div>
            <ul className="skills-react-container">
              <li className="skill-react">Hooks</li>
              <li className="skill-react">State Management</li>
              <li className="skill-react">API Fetching</li>
              <li className="skill-react">Data Handling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
