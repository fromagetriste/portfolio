const Navbar = () => {
  return (
    <nav id="nav-shadow">
      <div className="nav__container">
        <ul className="nav-left__container">
          <li>
            <img
              src="/backgrounds-and-icons/react-favicon.svg"
              alt="logo-react"
              className="nav-logo"
              // id="saturate-img"
            ></img>
          </li>
        </ul>

        <ul className="nav-right__container">
          <li>
            <a href="#" className="nav_sections">About</a>
          </li>
          <li>
            <a href="#" className="nav_sections">Stack</a>
          </li>
          <li>
            <a href="#" className="nav_sections">Skills</a>
          </li>
          <li>
            <a href="#" className="nav_sections">Projects</a>
          </li>
          <li>
            <a href="#" className="nav_sections">Contact</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fromagetriste/"
              target="_blank"
            >
              <img
                src="/backgrounds-and-icons/linkedin.svg"
                alt="logo-Linkedin"
                className="nav-logo"
                id="saturate-img"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/fromagetriste" target="_blank">
              <img
                src="/backgrounds-and-icons/github-mark-white.svg"
                alt="logo-github"
                className="nav-logo"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
