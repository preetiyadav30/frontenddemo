import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 
          Welcome To Our CICD DEMO With Github Actions
          For RSL 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          welcome to our first frontend automatic deplyment using github actions 
        </a>
      </header>
    </div>
  );
}

export default App;
