import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Section from './UI/Section';

function App() {
  return (
    <div className='App mx-5 my-6 md:my-[4rem]'>
      <Section>
        <Header />
        <AboutMe />
      </Section>
    </div>
  );
}

export default App;
