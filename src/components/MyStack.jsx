import React from "react";

const MyStack = () => {
  return (
      <section className="section-container">
        <div className="title">
          My Tech <span id="Stack-Gradient">Stack</span>
        </div>
        <div className="flex-container">
          <div className="left">
            <div className="title">My non-React tools :</div>
            <div className="items">
              <div className="left-items">
                <div className="glass python">
                  <img
                    className="left-logo"
                    src="/public/icons/stack/python.svg"
                    alt="python logo"
                  />
                  Python
                </div>
                <div className="glass">
                  <img
                    className="left-logo"
                    src="/public/icons/stack/django.svg"
                    alt="django logo"
                  />
                  Django
                </div>
                <div className="glass">
                  <img
                    className="left-logo"
                    src="/public/icons/stack/panda.svg"
                    alt="panda logo"
                  />
                  Panda
                </div>
              </div>
              <div className="right-items">
                <div className="glass">
                  <img
                    className="left-logo"
                    src="/public/icons/stack/sass.svg"
                    alt="sass logo"
                  />
                  SASS
                </div>
                <div className="glass" id="typescript-shadow">
                  <img
                    className="left-logo"
                    src="/public/icons/stack/typescript.svg"
                    alt="typescript logo"
                  />
                  TypeScript
                </div>
                <div className="glass">
                  <img
                    className="left-logo"
                    src="/public/icons/stack/github.svg"
                    alt="github logo"
                  />
                  GitHub
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="react-banner">My React Ecosystem</div>
            <div className="elements-container">
              <div className="element first">React Hooks</div>
              <div className="element second">State Management</div>
              <div className="element third">React Router</div>
              <div className="element fourth">API Fetching</div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default MyStack;
