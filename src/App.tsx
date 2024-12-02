import './App.css'
import Timer from './components/timer/timer';
import Rules from './components/rules/rules';

function App() {


  return (
    <div className="App">
      <header>
        <h1>SkillBoost</h1>
      </header>
      <main>
        <Timer />
        <Rules />
      </main>
    </div>
  )
}

export default App
