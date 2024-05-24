import logo from './logo.svg';
import './App.css';
import Counter from './Components/features/TestReducer';
import ConsumeAPIs from './Components/features/axios/consumeAPIs';
import LazyLoadedComponents from './Components/features/lazyLoading/LazyLoading';

function App() {
  return (
    <div className="App">
     <Counter />
     <ConsumeAPIs />
     <LazyLoadedComponents />
    </div>
  );
}

export default App;
