

import './App.css';
import octofitLogo from './octofitapp-small.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <img src={octofitLogo} className="logo" alt="Octofit Tracker Logo" />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/workouts">Workouts</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <h1>Welcome to Octofit Tracker</h1>
                <p>Track your fitness, join teams, and compete on the leaderboard!</p>
                <button>Get Started</button>
              </>
            } />
            <Route path="/activities" element={<Activities />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
