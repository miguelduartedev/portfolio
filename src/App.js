import "./App.scss";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <img
          src="main_illustration.svg"
          className="https://raw.githubusercontent.com/luisconceicaodev/portfolio/main/public/main_illustration.svg"
          alt="An Illustration of a man in a home office greeting you in"
        />
      </section>
      <section className="text-area">
        <h1 className="text-area-heading mb-4">Welcome!</h1>
        <h3 className="text-area-heading">
          <a className="anchor" href="#about-me">
            About Me
          </a>
        </h3>
        <h3 className="text-area-heading">
          <a className="anchor" href="#professional-experience">
            Professional Experience
          </a>
        </h3>
      </section>
    </div>
  );
}

export default App;
