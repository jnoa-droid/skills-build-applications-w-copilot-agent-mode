
import './App.css';
import octofitLogo from './octofitapp-small.png';


function App() {
  return (
    <div className="App">
      <nav>
        <img src={octofitLogo} className="logo" alt="Octofit Tracker Logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#">Leaderboard</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>
      <main>
        <h1>Welcome to Octofit Tracker</h1>
        <p>Track your fitness, join teams, and compete on the leaderboard!</p>
        <button>Get Started</button>
      </main>
    </div>
  );
}

export default App;
