import './styles/cv.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <h1>My CV</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;