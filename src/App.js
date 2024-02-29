import './App.scss';
import gradient from './background/gradient.svg'
import noise from './background/noise.svg'

function App() {
  return (
    <>
      <header>
        <h6 id="header-logo">ERIC LIN 嘉宏</h6>
        <div id="header-tabs">
          <p1><a href="">About Me</a></p1>
          <p1><a href="">Resume</a></p1>
        </div>
      </header>

      <img id="background-noise" src={noise} />
      <img id="background-gradient" src={gradient} />

    </>
  );
}

export default App;
