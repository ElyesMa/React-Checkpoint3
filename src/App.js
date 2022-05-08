import imageInSrc from "./imageInSrc.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
    <h1 className="title red">ELYES MANI</h1>
    <br/>
    <img src={imageInSrc} alt="imageInSrc" />
    <br/>
    <img src="/imageInPublic.jpg" alt="imageInPublic"/>
    <br/>
    <video width="320" height="240" controls>
    <source src="/coming-soon.mp4" type="video/mp4"/>
    </video>
    </div>
);
}

export default App;
