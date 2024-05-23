import logo from './logo.svg';
import './App.css';
import Counter from './Components/features/TestReducer';
import ConsumeAPIs from './Components/features/axios/consumeAPIs';

function App() {
  return (
    <div className="App">
     <Counter />
     <ConsumeAPIs />
    </div>
  );
}

export default App;
