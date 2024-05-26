const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <ul className="nav-left__container">
          <li>
            <img
              src="/backgrounds-and-icons/react-favicon.svg"
              alt="logo-react"
              className="nav-logo"
              id="saturate-img"
            ></img>
          </li>
        </ul>

        <ul className="nav-right__container">
          <li>
            <a href="#">Stack</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
