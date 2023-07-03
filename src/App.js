
import './App.css';
import FlavanoidTable from './components/FlavanoidTable.js';
import GammaTable from './components/GammaTable.js';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>DATA VISUALISING</h1>
      </header>
      <div className="container flex-container">
        <div className="flavanoid flex-container">
          <h2 className="headings">FLAVANOID TABLE</h2>
          <FlavanoidTable />
        </div>
        <div className="gamma flex-container">
          <h2 className="headings">GAMMA TABLE</h2>
          <GammaTable />
        </div>
      </div>
    </div>
  );
}

export default App;
