import './App.css';
import Header from './components/Header';
import Summaries from './components/Summaries';
import Summary from './components/Summary';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Summary /> */}
      <Summaries />
    </div>
  );
}

export default App;
