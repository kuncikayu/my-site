import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faXTwitter, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="content">
          <h1 className="name">Hi I'm Key</h1>
          <div className="social-icons">
          <a rel="noopener noreferrer" className="icon-container">
              <FontAwesomeIcon icon={faDiscord} className="icon" />
          <div className="tooltip">Discord: kuncikayu_</div>
          </a>
            <a href="https://t.me/kuncikayu" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} className="icon" />
            </a>
            <a href="https://twitter.com/kuncikayu_" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="icon" />
            </a>
            <a href="https://github.com/kuncikayu" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
