import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Header from './components/Header';
import Skill from './components/Skill';
import Section from './UI/Section';

function App() {
  return (
    <div className='App mx-5 my-6 md:my-[4rem]'>
      <Section>
        <Header />
        <AboutMe />
        <Experience />
        <Skill />
      </Section>
    </div>
  );
}

export default App;
