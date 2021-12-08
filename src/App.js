import './style.css'
import IMG from './myImage/myImageInSrc.png'

function App() {
  return (
    <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <div><h1 className="title red">Your name here</h1></div>
          <div><img src={IMG} alt='myImageInSrc' /></div>
          <div><img src="./myImage/myImageInPublic.png" alt='myImageInPublic' /></div>    
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>

  );
}

export default App;
