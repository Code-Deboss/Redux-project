import './App.css';
import Changecolor from './components/Changecolor';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <Changecolor />
    </div>
  );
}

export default App;
