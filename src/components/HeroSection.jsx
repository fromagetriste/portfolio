const HeroSection = () => {
  return (
    <main className="flex__container">
      <div className="card__container">
        Hello, <br />
        My name is Damien, I am a <br />
        self-taught <span id="text-gradient">front-end</span> <br />
        Developer.
      </div>
      <div className="terminal__container">
        <p>
          const Damien =
          <br />
          name : Damien GRAVELLE <br />
          Date of birth : 14/03/1992 at Valenciennes <br />
          Main Stack : [React, TypeScript, Redux,MySql] <br />
          Secondary Stack : [Python, Django, Panda]
        </p>
      </div>
    </main>
  );
};

export default HeroSection;
