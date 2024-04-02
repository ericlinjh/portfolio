import Lottie from 'lottie-react';
import './App.scss';
import gradient from './background/gradient.svg'
import noise from './background/noise.svg'
import signature from './hero-section/SIGNATURE.json'

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: signature,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

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

      <div class="intro">
        <h1>Hi,</h1>
        <div>
          <h1>I'm</h1>
          <h1>Eric</h1>
        </div>
        <p1>Product Manager, Front-end Developer, UI Designer</p1>
      </div>

      <Lottie
      animationData={signature}
      loop={false}
      autoplay={true}
      id="signature"
      />


      <img id="background-noise" src={noise} />
      <img id="background-gradient" src={gradient} />

    </>
  );
}

export default App;
