import "./App.scss";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Research from "./components/Research/Research";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="research" className="section">
          <Research />
        </section>
      </main>
    </div>
  );
};

export default App;
