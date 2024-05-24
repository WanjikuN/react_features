import logo from './logo.svg';
import './App.css';
import Counter from './Components/features/TestReducer';
import ConsumeAPIs from './Components/features/axios/consumeAPIs';
import LazyLoadedComponents from './Components/features/lazyLoading/LazyLoading';
import ShoppingCart from './Components/features/UseMemoTest/UseMemoTest';

function App() {
  return (
    <div className="App">
     <Counter />
     <ConsumeAPIs />
     <LazyLoadedComponents />
     <ShoppingCart />
    </div>
  );
}

export default App;
